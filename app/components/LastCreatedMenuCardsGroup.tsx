import { collection, getDocs } from "firebase/firestore";
import LastCreatedMenuCard, {
  LastCreateMenuCardProps,
} from "./LastCreatedMenuCard";
import { auth, db } from "../lib/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MenuData } from "./MenuPreview";

export default function LastCreatedMenuCardsGroup() {
  const [menus, setMenus] = useState<MenuData[]>([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchUserMenus = async () => {
      try {
        const menusCollectionRef = collection(db, "users", user?.uid!, "menus");
        const menusSnapshot = await getDocs(menusCollectionRef);
        const menusData = menusSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Menus do usuário:", menusData);
        setMenus(menusData as any);
      } catch (error) {
        console.log("Erro ao buscar menus do usuário:", error);
      }
    };

    fetchUserMenus();
  }, [user?.uid]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "12px",
        }}
      >
        Criações Recentes
      </h2>
      {menus.map((card) => (
        <LastCreatedMenuCard
          key={card.id}
            userId={user?.uid}
            menuId={card.id}
          menuTitle={card.menuTitle}
          menuDescription={card.menuDescription}
          menuUrl={
            "data:image/png;base64,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"
          }
          menuThumbnailImgPath={
            "https://media.istockphoto.com/id/1299967143/pt/foto/young-woman-hands-using-the-smart-phone-to-scan-the-qr-code-to-select-food-menu-in-the.jpg?b=1&s=612x612&w=0&k=20&c=HrUJbA4vblZsVUur0ziY1bbCPm06xwIkSpMfGOz_RC0="
          }
        />
      ))}
    </div>
  );
}
