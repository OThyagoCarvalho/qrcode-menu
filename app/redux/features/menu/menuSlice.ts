import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { MenuData } from "@/app/components/MenuPreview";
import { updateMenuAddCategoryPayload } from "@/app/interfaces/menu";

const getInitialStore = () : MenuData[] => {
    
    // get initial state from google firestore    
    const initialState =[
        {
            userId: "",
            menuId: "",
            menuTitle: "",
            menuDescription: "",
            menuUrl: "",
            menuCategories: [],
            menuThumbnailImgPath: ""
        }
    ]
    return initialState
}

export const menuSlice = createSlice({
    name: 'menus',
    initialState: {
        value: getInitialStore()
    },
    reducers: {
        addMenu: (state, action: PayloadAction<MenuData>) => {

            if (state.value.length === 1 && state.value[0].menuTitle === '') { 
                state.value[0] = action.payload
            } else {
                state.value.push(action.payload);
            }
        },
        updateMenuAddCategory: (state, action: PayloadAction<updateMenuAddCategoryPayload>) => {
            const {menuTitle, newCategory } = action.payload
            const menuIndex = state.value.findIndex(menu => menu.menuTitle === menuTitle);
            if (menuIndex !== -1) {
                const menuToUpdate = state.value[menuIndex];
                if (menuToUpdate.menuCategories) {
                    menuToUpdate.menuCategories.push(newCategory as unknown as any);
                } else {
                    menuToUpdate.menuCategories = [newCategory as unknown as any];
                }
            }

        },
        addProduct: (state, action) => {},
        removeProduct: (state, action) => {},
        featureProduct: (state, action) => {}
    }
})

export const {addMenu, updateMenuAddCategory, addProduct, removeProduct, featureProduct} = menuSlice.actions

export const selectMenus = (state: RootState) => state.value.value

export default menuSlice.reducer