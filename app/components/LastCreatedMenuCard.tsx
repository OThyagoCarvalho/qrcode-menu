import Image from "next/image";
import { MenuData } from "./MenuPreview";
import Link from "next/link";

export type LastCreateMenuCardProps = Pick<
  MenuData,
  "menuTitle" | "menuDescription" | "menuUrl" | "menuThumbnailImgPath" | "menuId" | "userId"
>

export default function LastCreatedMenuCard({
  userId,
  menuId,
  menuTitle,
  menuDescription,
  menuThumbnailImgPath,
  menuUrl,
}: LastCreateMenuCardProps) {

  return (
    <Link  
      href={`/edit-menu?user=${userId}&menu=${menuId}`}
      style={{
        border: "1px solid #DEDEDE",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "660px",
        height: "144px",
        borderRadius: "34px",
        padding: "18px",
        cursor: 'pointer'
      }}
    >
      <div
        style={{
          position: "relative",
          height: "112px",
          width: "112px",
          overflow: "hidden",
          objectFit: "cover",
        }}
      >
        <img
          className="w-full h-full object-cover rounded-[24px]"
          src={menuThumbnailImgPath}
        />
      </div>
      <div
        id="card-content-container"
        style={{
          textWrap: "pretty",
          margin: "0 24px",
        }}
      >
        <h3
          id="card-content-menu-title"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {menuTitle}
        </h3>
        <p id="card-content-menu-description">{menuDescription}</p>
      </div>
      <div
        style={{
          position: "relative",
          height: "112px",
          width: "112px",
          overflow: "hidden",
          objectFit: "cover",
        }}
      >
        <img
          className="w-full h-full object-cover rounded-[24px]"
          src={menuUrl}
        />
      </div>
    </Link>
  );
}
