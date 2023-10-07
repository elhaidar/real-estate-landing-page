import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../slices/weatherSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export function makeStore(){
    return configureStore({
        reducer: {
            weather: weatherReducer
        },
    });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;