'use client'
import { Button } from "@nextui-org/react";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CreateSection from "../components/CreateSection";
import MenuPreview, { MenuCategory, MenuData } from "../components/MenuPreview";
import Link from "next/link";
import InputText from "../components/InputText";
import React from "react";
import { Divider } from "@mui/material";

export default function EditMenu () {

    const [ menu, setMenu ] = React.useState<MenuData>({
        menuTitle: 'Nome do Menu',
        menuThumbnailImgPath: '#',
        menuCategories: undefined,
        menuUrl: undefined,
    })

    const handleSetMenu = ({key, value}: {
        key: keyof MenuData,
        value: string
    } ) => {
        setMenu({
            ...menu,
            [key]: value
        })
        console.log(JSON.stringify(menu))
    }

    const handleSetCategoryOfMenu = (categoryTitle: string) => {
        const newCategory: MenuCategory = {
            categoryTitle, // Assuming you generate or handle IDs elsewhere if necessary
        };
        const categoryExists = menu.menuCategories!.find({'categoryTitle': newCategory})
        setMenu(prevMenu => ({
            ...prevMenu,
            menuCategories: [...(prevMenu.menuCategories || []), newCategory], // Append new category
        }));

        console.log(JSON.stringify(menu.menuCategories))
    };

    return (
              <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                gap: '16px',            
            }}
            >
            <div
                style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    width: 'fit-content'
                }}
                >   
            <Link href={'/dashboard'}>
                <Button
                    radius="md"
                    variant="flat"
                    isIconOnly
                    className="bg-red-900 h-[48px] w-[48px] text-red-100"
                    >
                    <ArrowBackRoundedIcon 
                        fontSize="large"
                        color="inherit"
                        />
                </Button>              
            </Link>
                <InputText
                    onConfirmInput={(inputValue) => handleSetMenu({
                        key: "menuTitle",
                        value: inputValue
                    })} 
                    variant="underlined"
                    placeholder="Dê um nome para seu menu"
                    />
            </div>
            <section
            id="menu-edition-and-preview-section"
            style={{
                border: '1px solid #9c9c9c',
                borderRadius: '24px 24px 0 0',
                padding: '24px 24px 0 24px',
                display: 'flex',                
                height: '100vh',
                minHeight: 'fit-content',
                background: 'white',
                gap: '24px'             
                
            }}
            >   

            {/*  create section component bellow */}
            <section
            style={{
                border: '1px solid #9c9c9c',
                borderRadius: '12px',
                padding: '16px',
                minHeight: 'fit-content',
                maxHeight: 'max-content',
                boxSizing: 'border-box',
                maxWidth: '360px',
                display: 'flex',
                flex: '1',
                flexDirection: 'column',
                gap: '16px'
            }}
        >
            <InputText
                variant="underlined"
                placeholder="Crie uma categoria"
                onConfirmInput={(inputValue) => handleSetCategoryOfMenu(inputValue)}
            />
            <Divider
                style={{
                    margin: '4px 0'
                }}
            />
            <InputText />

        </section>
            {/* create section component above */}
  
                <MenuPreview
                    menuTitle={menu.menuTitle}
                    menuCategories={menu.menuCategories}
                />
            </section>
        </main>
    )
}