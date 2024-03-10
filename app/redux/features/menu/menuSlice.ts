import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { MenuData } from "@/app/components/MenuPreview";


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
        createCategory: (state, action) => {
        },
        addProduct: (state, action) => {},
        removeProduct: (state, action) => {},
        featureProduct: (state, action) => {}
    }
})

export const {addMenu, createCategory, addProduct, removeProduct, featureProduct} = menuSlice.actions

export const selectMenus = (state: RootState) => state.value.value

export default menuSlice.reducer