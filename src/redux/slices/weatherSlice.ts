import { createSlice } from '@reduxjs/toolkit'

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Jakarta';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
		'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST as string
	}
};


const initialState = {
    weather: {
    },
} as any

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers:{
        setWeather: (state, action) => {
            state.weather = action.payload
        }
    },
});

export const { setWeather } = weatherSlice.actions

export default weatherSlice.reducer;