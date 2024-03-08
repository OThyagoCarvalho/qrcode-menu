import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menu: {
            menuName: 'Default Menu',
            categories: [
                {categoryName: 'Default Category',
                  items: []      
            }
            ]
        }
    },
    reducers: {
        createCategory: (state, action) => {
            state.menu.categories.push(action.payload)
        },
        addProduct: (state, action) => {},
        removeProduct: (state, action) => {},
        featureProduct: (state, action) => {}
    }
})

export const { createCategory, addProduct, removeProduct, featureProduct} = menuSlice.actions

export default menuSlice.reducer