import {CONSTANTS} from '@/utils/constants';
import {ethers} from 'ethers';
import {add} from '@noble/hashes/_u64';
import {getUserAccountDetails} from '@/store/accountSlice';

export const getWalletDetails = async (address: string) => {
    console.log('wallet details called')
    // @ts-ignore
    if (window.tronWeb) {
        // @ts-ignore
        const balance = Number(ethers.formatUnits(await window.tronWeb.trx.getBalance(address), 6))
        // @ts-ignore
        const contractBalance = Number(ethers.formatUnits(await window.tronWeb.trx.getBalance(CONSTANTS.contractAddress), 6))
        // @ts-ignore
        let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
        let result = await contract.users(address).call();
        let deposit = await contract.userDeposits(address, Number(result?.depositsLength.toString()) - 1).call()
        const PROJECT_INSURANCE = await contract.PROJECT_INSURANCE().call();
        let roi = await contract.getDailyRoi().call(
            {from: address}
        )
        return {
            address: address,
            balance: balance,
            activeDeposit: Number(Number(ethers.formatUnits(deposit?.amount.toString(), 6)).toFixed(2)),
            activeDepositWithdrawn: Number(Number(ethers.formatUnits(deposit?.withdrawn.toString(), 6)).toFixed(2)),
            walletConnected: true,
            // @ts-ignore
            referrer: window.tronWeb.address.fromHex(result?.referrer),
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
            projectInsurance : Number(Number(ethers.formatUnits(PROJECT_INSURANCE.toString(), 6)).toFixed(2)),
            dailyRoi: Number(Number(ethers.formatUnits(roi.toString(), 6)).toFixed(2)),
            contractBalance: contractBalance,
        }
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
