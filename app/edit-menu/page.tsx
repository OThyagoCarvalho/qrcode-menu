"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

import CreateSection from "../components/CreateSection";
import MenuPreview, { MenuCategory, MenuData } from "../components/MenuPreview";
import Link from "next/link";
import InputText from "../components/InputText";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  menu,
} from "@nextui-org/react";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

import AddProduct from "../components/addProductForm";
import { addMenu, updateMenuAddCategory } from "../redux/features/menu/menuSlice";

export default function EditMenu() {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  const [menuTitle, setMenuTitle] = useState({ menuTitle: "", saved: false });
  const [autocompleteInputValue, setAutocompleteInputValue] = useState('')
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: "16px",
      }}
    >
      <div className="flex text-[48px] text-nowrap gap-4 align-bottom">
        <Link href={"/dashboard"}>
          <Button
            radius="md"
            isIconOnly
            className=" bg-[#d9d9d9] h-[48px] w-[48px] text-red-900"
          >
            <ArrowBackRoundedIcon
              fontSize="large"
              className="leading-none"
              color="inherit"
            />
          </Button>
        </Link>

        <Input
          isReadOnly={menuTitle.saved}
          id="menu-name-input"
          size="lg"
          variant="underlined"
          placeholder="NOME DO MENU"
          endContent={
            !menuTitle.saved ? (
              <Button isIconOnly>
                <SaveRoundedIcon
                  onClick={() => {
                    setMenuTitle((prevMenuTitle) => ({
                      ...prevMenuTitle,
                      saved: !prevMenuTitle.saved,
                    }));
                    dispatch(
                      addMenu({
                        menuTitle: menuTitle.menuTitle,
                      })
                    );
                    console.log(menuTitle);
                  }}
                />
              </Button>
            ) : (
              <Button isIconOnly>
                <DriveFileRenameOutlineRoundedIcon
                  onClick={() => {
                    setMenuTitle((prevMenuTitle) => ({
                      menuTitle: "",
                      saved: !prevMenuTitle.saved,
                    }));
                    console.log(menuTitle);
                  }}
                />
              </Button>
            )
          }
          onValueChange={(e) =>
            setMenuTitle((prevMenuTitle) => ({
              ...prevMenuTitle,
              menuTitle: e,
            }))
          }
          value={menuTitle.menuTitle}
        />
      </div>

      <section
        id="menu-edition-and-preview-section"
        style={{
          border: "1px solid #9c9c9c",
          borderRadius: "24px 24px 0 0",
          padding: "24px 24px 0 24px",
          display: "flex",
          height: "100vh",
          minHeight: "fit-content",
          background: "white",
          gap: "24px",
        }}
      >  

        <section
          style={{            
            borderRadius: "12px",          
            minHeight: "fit-content",
            maxHeight: "max-content",
            boxSizing: "border-box",
            maxWidth: "360px",
            display: "flex",
            flex: "1",
            flexDirection: "column",
            gap: "16px",
            overflowY: "auto",
          }}
        >
          <section
            style={{
              border: "1px solid #9c9c9c",
              borderRadius: "12px",
              padding: "16px",
              minHeight: "fit-content",
              maxHeight: "max-content",
              boxSizing: "border-box",
              maxWidth: "360px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              overflowY: "auto",
            }}
          >
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Autocomplete
                onInputChange={setAutocompleteInputValue}
                listboxProps={{
                  emptyContent: (
                    <Button className="flex justify-center w-full bg-red-900 text-white"
                        onClick={() => {
                            setMenuCategories(prevMenuCats => [...prevMenuCats, {categoryTitle: autocompleteInputValue}])
                            dispatch(updateMenuAddCategory({
                                menuTitle: menuTitle.menuTitle,
                                newCategory: {
                                    categoryTitle: autocompleteInputValue
                                }
                            }))
                        }}
                    >                      
                      Inserir Categoria
                    </Button>
                  ),
                }}
                label="Crie ou Selecione uma Categoria"
                className="max-w-xs"
              >
                {menuCategories.map((menuCategory) => (
                  <AutocompleteItem
                    key={menuCategory.categoryTitle}
                    value={menuCategory.categoryTitle}
                  >
                    {menuCategory.categoryTitle}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            </div>
          </section>
          <AddProduct />         
        </section>
        <MenuPreview menuTitle={menuTitle.menuTitle} menuCategories={menuCategories}/>
      </section>
    </main>
  );
}
