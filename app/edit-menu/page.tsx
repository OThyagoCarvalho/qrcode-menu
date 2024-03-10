'use client'
import { Button } from "@nextui-org/react";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CreateSection from "../components/CreateSection";
import MenuPreview, { MenuCategory, MenuData } from "../components/MenuPreview";
import Link from "next/link";
import InputText from "../components/InputText";
import React from "react";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

export default function EditMenu () {

    const [ menu, setMenu ] = React.useState<MenuData>({
        menuTitle: '',
        menuThumbnailImgPath: '#',
        menuCategories: [],
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
            categoryTitle, //handle id here 
        };

        const categoryExists = menu.menuCategories?.some(category => category.categoryTitle === newCategory.categoryTitle);


        if (!categoryExists) {
            setMenu(prevMenu => ({
                ...prevMenu,
                menuCategories: [...(prevMenu.menuCategories || []), newCategory],
            }));
        } else {
            alert("Erro. Categoria já existe.");
        }
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
                    className=" bg-[#d9d9d9] h-[48px] w-[48px] text-red-900"
                    >
                    <ArrowBackRoundedIcon 
                        fontSize="large"
                        color="inherit"
                        />
                </Button>              
            </Link>
            {
                !menu.menuTitle ? <InputText
                onConfirmInput = {(inputValue) => handleSetMenu({
                    key: "menuTitle",
                    value: inputValue
                })} 
                variant="underlined"
                placeholder="Dê um nome para seu menu"
                />
                                : <div style={{
                                    display: 'flex',
                                    alignItems: 'end',
                                    fontSize: '24px',
                                    fontWeight: 'bold'
                                }}> 
                                    <h2> {menu.menuTitle}</h2>
                                    <Button radius="md"
                                        variant="flat"
                                        isIconOnly
                                        className="bg-red-900 h-[48px] font-bold w-[48px] ml-3 text-red-100"
                                        onClick={() => setMenu( prevMenu => (
                                            {...prevMenu,
                                            menuTitle: ''
                                            }
                                        ))}
                                        > 
                                            <DeleteForeverRoundedIcon /> 
                                    </Button>
                                </div>
            }
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
                gap: '16px',
                overflowY: 'scroll'
            }}
        >
            <InputText
                variant="underlined"
                placeholder="Crie uma categoria"
                onConfirmInput={(inputValue) => handleSetCategoryOfMenu(inputValue)}
                shouldClearOnConfirm = {true}
            />

            {menu.menuCategories?.map((category, i) => {
                return (
                    <CreateSection sectionTitle={category.categoryTitle} />
                )})}

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