import {User} from '@/store/types';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {get} from '@/store/fetch';
import {AppState} from '@/store/store';
import {UPDATE_ACCOUNT, UPDATE_ADDRESS, UPDATE_BALANCE, UPDATE_WALLET_CONNECTED} from '@/store/actionTypes';
import App from 'next/app';
import {add} from '@noble/hashes/_u64';
import {getWalletDetails} from '@/utils/wallet';

const initialState: User = {
    account: {
        balance: 0,
        activeDeposit: 0,
        activeDepositWithdrawn: 0,
        walletConnected: false,
        referrer: '',
        address: '',
        depositsLength: 0,
        totalDeposited: 0,
        directCommission: 0,
        directCommissionDebt: 0,
        level: 1,
        levelIncome: 0,
        levelIncomeDebt: 0,
        totalRefs: 0,
        directRefs: 0,
        totalTeamDeposit: 0,
        totalWithdrawn: 0,
        lastWithdrawn: 0,
        projectInsurance: 0,
        dailyRoi: 0,
        contractBalance: 0,
    }
}

export const updateUserAddress = createAsyncThunk(
    UPDATE_ADDRESS,
    (address: string) => {
        return new Promise<void>((resolve, reject) => {
            // @ts-ignore
            resolve(address)
        });
    }
)

// export const updateWalletConnected = createAsyncThunk(
//     UPDATE_WALLET_CONNECTED,
//     (connected: boolean) => {
//         return new Promise<void>((resolve, reject) => {
//             // @ts-ignore
//             resolve(connected)
//         });
//     }
// )

export const updateUserBalance = createAsyncThunk(
    UPDATE_BALANCE,
    (balance: number) => {
        return new Promise<void>((resolve, reject) => {
            // @ts-ignore
            resolve(balance)
        });
    }
)

export const getUserAccountDetails = createAsyncThunk(
    UPDATE_ACCOUNT,
    (address: string,thunkAPI) => {
        return new Promise<void>((resolve, reject) => {
            getWalletDetails(address)
                .then((res: any) => {
                    resolve(res)
                })
        });
    }
);


export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        // clearFullState: () => initialState,
    },
    extraReducers: {
        [updateUserAddress.fulfilled.toString()]: (state, {payload}) => {
            state.account.address = payload
        },
        // [updateWalletConnected.fulfilled.toString()]: (state, {payload}) => {
        //     state.account.walletConnected = payload
        // },
        [updateUserBalance.fulfilled.toString()]: (state, {payload}) => {
            state.account.balance = payload
        },
        [getUserAccountDetails.fulfilled.toString()]: (state, {payload}) => {
            state.account = payload
        },
    }
});


export const {} = accountSlice.actions;

export const selectAccountState = (state: AppState) => state;
export const selectUserAccount = (state: AppState) => state.account;

export default accountSlice.reducer;
