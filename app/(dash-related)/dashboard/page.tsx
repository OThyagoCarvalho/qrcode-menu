"use client";
import SuggestionCardsGroup from "@/app/components/SuggestionCardsGroup";
import LastCreatedMenuCardsGroup from "@/app/components/LastCreatedMenuCardsGroup";
import { Button } from "@nextui-org/react";
import ControlPointTwoToneIcon from "@mui/icons-material/ControlPointTwoTone";
import { selectMenus } from "@/app/redux/features/menu/menuSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/app/lib/firebase";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { MenuData } from "@/app/interfaces/menu";

export default function Dashboard() {
  const [user] = useAuthState(auth);

  // this contains all data of the menus in store
  // that was either retrieved from the firestore or initialized from scratch
  const menus = useAppSelector(selectMenus);
  const dispatch = useAppDispatch();

  const handleAddMenuToUser = async (userId: any, payload: MenuData) => {
    try {
      const menusCollectionRef = collection(db, "users", userId, "menus");
      const docRef = await addDoc(menusCollectionRef, payload);
      console.log("Menu adicionado com sucesso com o ID:", docRef.id);
    } catch (error) {
      alert(`"Erro ao adicionar menu:": ${error}`);
      return null;
    }
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: "16px",
      }}
    >
      <h1 className="uppercase text-[48] font-bold">
        Olá , {user?.displayName || user?.email}
      </h1>
      <section
        id="dashboard-menu"
        style={{
          border: "1px solid #9c9c9c",
          borderRadius: "24px 24px 0 0",
          padding: "24px 24px 0 24px",
          display: "flex",
          justifyContent: "space-between",
          height: "100vh",
          minHeight: "fit-content",
          background: "white",
          gap: "48px",
        }}
      >
        <div
          style={{
            overflowY: "auto",
          }}
        >
          <Button
            variant="flat"
            isIconOnly
            className="bg-red-900 h-[96px] w-[96px] mb-6 text-red-100"
            radius="lg"
            onClick={() =>
              handleAddMenuToUser(user?.uid, {
                menuTitle: "Meu Novo Menu",
                menuDescription: "Clique para Editar seu menu.",
                userId: user?.uid,
              })
            }
          >
            <ControlPointTwoToneIcon fontSize="large" color="inherit" />
          </Button>
          {/* <Link href={'/edit-menu'}>
            </Link> */}

          <LastCreatedMenuCardsGroup />
        </div>
        <SuggestionCardsGroup />
      </section>
    </main>
  );
}
