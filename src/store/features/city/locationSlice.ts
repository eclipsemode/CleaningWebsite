import {createSlice} from "@reduxjs/toolkit";

type CityType = 'Армавир'

interface ICityState {
		city: CityType
}

const initialState: ICityState = {
		city: 'Армавир'
};

export const locationSlice = createSlice({
		name: 'location',
		initialState,
		reducers: {}
})

export default locationSlice.reducer