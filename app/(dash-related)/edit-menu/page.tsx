"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import CreateSection from "../../components/CreateSection";
import MenuPreview, {
  MenuCategory,
  MenuData,
} from "../../components/MenuPreview";
import Link from "next/link";
import InputText from "../../components/InputText";
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

import AddProduct from "../../components/addProductForm";
import {
  addMenu,
  selectMenus,
  setStore,
  updateMenuAddCategory,
} from "../../redux/features/menu/menuSlice";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import { MenuItem } from "@/app/interfaces/menu";

export default function EditMenu() {
  const storedMenu = useAppSelector(selectMenus);
  const [autocompleteInputValue, setAutocompleteInputValue] = useState("");
  const [autocompleteSelectedValue, setAutocompleteSelectedValue] =
    useState("");
  const [menu, setMenu] = useState<MenuData>({ menuTitle: "" });
  const [menuTitle, setMenuTitle] = useState({ menuTitle: "", saved: false });
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const menuId = searchParams.get("menu");
  const userId = searchParams.get("user");

  useEffect(() => {
    const fetchUserMenu = async () => {
      if (!userId || !menuId) return;
      try {
        const menuDocRef = doc(db, "users", userId, "menus", menuId);
        const menuSnapshot = await getDoc(menuDocRef);
        if (menuSnapshot.exists()) {
          console.log("Menu específico do usuário:", menuSnapshot.data());
          const fetchedMenuData = menuSnapshot.data() as MenuData;
          setMenu({ id: menuSnapshot.id, ...menuSnapshot.data() } as MenuData);
          setMenuCategories(fetchedMenuData.menuCategories || []);
        }
      } catch (error) {
        console.log("Erro ao buscar menu do usuário:", error);
      }
    };
    fetchUserMenu();
  }, [userId, menuId]);

  const updateMenu = async (userId: string, menuId: string, menuData: any) => {
    const menuDocRef = doc(db, "users", userId, "menus", menuId);
    try {
      await updateDoc(menuDocRef, menuData);
      console.log("Menu atualizado com sucesso");
    } catch (error) {
      console.error("Erro ao atualizar menu:", error);
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
          autoComplete="hidden"
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
                    updateMenu(userId!, menuId!, {
                      menuTitle: menuTitle.menuTitle,
                    });
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
                selectedKey={autocompleteSelectedValue}
                onSelectionChange={setAutocompleteSelectedValue as any}
                onClear={() => setAutocompleteSelectedValue("")}
                onInputChange={setAutocompleteInputValue}
                listboxProps={{
                  emptyContent: (
                    <Button
                      className="flex justify-center w-full bg-red-900 text-white"
                      onClick={() => {

                        console.log('menuCategories antes:' + JSON.stringify(menuCategories))

                        const newCategory = { categoryTitle: autocompleteInputValue };
                      
                        // Atualizar o estado local primeiro para incluir a nova categoria
                        setMenuCategories((prevMenuCats) => {
                          const updatedMenuCategories = [...prevMenuCats, newCategory];
                          console.log('menuCategories depois: ' + JSON.stringify(updatedMenuCategories))
                          
                          // Atualizar o Firestore com o estado local atualizado
                          updateMenu(userId!, menuId!, {
                            menuCategories: updatedMenuCategories,
                          })
                          .then(() => {
                            // Após a atualização bem-sucedida no Firestore, despachar a ação Redux
                            dispatch(updateMenuAddCategory({
                              menuTitle: menuTitle.menuTitle,
                              newCategory,
                            }));
                          })
                          .catch((error) => {
                            console.error("Erro ao atualizar menu no Firestore:", error);
                            // Tratar possíveis erros
                          });
                      
                          return updatedMenuCategories; // Retornar o estado atualizado
                        });
                      }}
                    >
                      Inserir Categoria
                    </Button>
                  ),
                }}
                label="Crie ou Escolhar uma Categoria
                            para editar"
                className="max-w-xs"
              >
                {menuCategories?.map((menuCategory) => (
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
          {autocompleteSelectedValue && (
            <AddProduct
              categoryTitle={autocompleteSelectedValue}
              menuTitle={menuTitle.menuTitle}
            />
          )}
        </section>
        <MenuPreview
          menuTitle={menuTitle.menuTitle || menu.menuTitle}
          menuCategories={menu.menuCategories}
        />
      </section>
    </main>
  );
}
