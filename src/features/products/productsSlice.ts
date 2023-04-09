import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import data from './productsData'

interface IProducts {
		id: number,
		img: string,
		name: string,
		description?: string,
		price: string,
		chip?: string
}

type ProductsType = 'textile' | 'leather' | 'carpet';

interface IProductsState {
		type: ProductsType,
		textile: IProducts[],
		leather: IProducts[],
		carpet: IProducts[]
}


const initialState: IProductsState = {
		type: 'textile',
		textile: data.textile,
		leather: data.leather,
		carpet: data.carpet
}

export const productsSlice = createSlice({
		name: 'product',
		initialState,
		reducers: {
				setProductsType: (state, action: PayloadAction<ProductsType>) => {
						state.type = action.payload;
				}
		}
})

export const {setProductsType} = productsSlice.actions;

export default productsSlice.reducer;