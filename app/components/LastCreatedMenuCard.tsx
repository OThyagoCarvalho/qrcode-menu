
import Image from "next/image"
import { MenuData } from "./MenuPreview"


export type LastCreateMenuCardProps = Pick <MenuData, "menuTitle" | "menuDescription" | "menuUrl" | "menuThumbnailImgPath" >  

export default function LastCreatedMenuCard ({  menuTitle, 
                                                menuDescription,
                                                menuThumbnailImgPath,
                                                menuUrl
                                            }: LastCreateMenuCardProps)  {

    return (
        <div
            style={{
                border: '1px solid #DEDEDE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '660px',
                height: '144px',
                borderRadius: '34px',
                padding: '18px'
            }}
        >         
           <div
            style={{
                position: 'relative',
                height: '112px',
                width: '112px',
                overflow: 'hidden',
                objectFit: 'cover'
            }}          
           >
                <Image
                 style={{
                    border: '1px solid #DEDEDE',
                    borderRadius: '12px',
                    objectFit: 'contain'                    
                }}                   
                    alt={menuTitle}
                    width={112}
                    height={112}
                    src={menuThumbnailImgPath}
                    />
            </div>
            <div
                id="card-content-container"
                style={{
                    textWrap: 'pretty',
                    margin: '0 24px'                
                }}
            >
                <h3
                    id= "card-content-menu-title"
                    style={{
                        fontSize: "24px",
                        fontWeight: 'bold'
                    }}
                >
                    {menuTitle}
                </h3>
                <p
                    id="card-content-menu-description"
                >
                    {menuDescription}
                </p>
            </div>
            <div
            style={{
                position: 'relative'
            }}    
            >
                <Image
                    style={{
                        border: '1px solid #DEDEDE',
                        borderRadius: '12px'
                    }}
                    alt={menuTitle}                                    
                    height={112}
                    width={112}
                    src={menuUrl}
                    >
                </Image>
            </div>
        </div>
    )
}