import {CONSTANTS} from '@/utils/constants';
import {ethers} from 'ethers';
import {add} from '@noble/hashes/_u64';
import {getUserAccountDetails} from '@/store/accountSlice';

export const getWalletDetails = async (address: string) => {
    // @ts-ignore
    const balance = Number(ethers.formatUnits(await window.tronWeb.trx.getBalance(address), 6))
    // @ts-ignore
    let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
    let result = await contract.users(address).call();
    return {
        address: address,
        balance: balance,
        walletConnected: true,
        referrer: result?.referrer,
        depositsLength: Number(result?.depositsLength.toString()),
        totalDeposited: Number(Number(ethers.formatUnits(result?.totalDeposited.toString(), 6)).toFixed(2)),
        directCommission: Number(Number(ethers.formatUnits(result?.directCommission.toString(), 6)).toFixed(2)),
        directCommissionDebt: Number(Number(ethers.formatUnits(result?.directCommissionDebt.toString(), 6)).toFixed(2)),
        level: Number(result?.level),
        levelIncome: Number(Number(ethers.formatUnits(result?.levelIncome.toString(), 6)).toFixed(2)),
        levelIncomeDebt: Number(Number(ethers.formatUnits(result?.levelIncomeDebt.toString(), 6)).toFixed(2)),
        totalRefs: Number(result?.totalRefs),
        directRefs: Number(result?.directRefs),
        totalTeamDeposit: Number(Number(ethers.formatUnits(result?.totalTeamDeposit.toString(), 6)).toFixed(2)),
        totalWithdrawn: Number(Number(ethers.formatUnits(result?.totalWithdrawn.toString(), 6)).toFixed(2)),
        lastWithdrawn: Number(result?.lastWithdrawn),
    }
}

export const connectWallet = async () => {
    // @ts-ignore
    if (window.tronWeb) {
        // @ts-ignore
        await window.tronLink.request({method: 'tron_requestAccounts'});
        // @ts-ignore
        const {name, base58} = await window.tronWeb.defaultAddress;
        return base58
    }
}
