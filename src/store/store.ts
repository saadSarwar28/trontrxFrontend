import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {createWrapper} from "next-redux-wrapper";
import {accountSlice} from '@/store/accountSlice';

const makeStore = () =>
    configureStore({
        reducer: {
            [accountSlice.name]: accountSlice.reducer,
        },
        devTools: true,
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppState,
    unknown,
    Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
