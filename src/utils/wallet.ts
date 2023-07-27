import {CONSTANTS} from '@/utils/constants';
import {ethers} from 'ethers';
import {add} from '@noble/hashes/_u64';
import {getUserAccountDetails} from '@/store/accountSlice';
import {useEffect} from 'react';
import {get} from '@/store/fetch';

export const getBalanceOfAddress = async (address: string) => {

    const response = await get('accounts/' + address)
    console.log(response, ' response from api')
}

export const getWalletDetails = async (address: string) => {
    // address = 'TELwoeetocGr8356hyNe5J2bULiRwVjxd6'
    // @ts-ignore
    if (window.tronWeb) {
        // @ts-ignore
        const balance = Number(ethers.formatUnits(await window.tronWeb.trx.getBalance(address), 6))
        // @ts-ignore
        const contractBalance = Number(ethers.formatUnits(await window.tronWeb.trx.getBalance(CONSTANTS.contractAddress), 6))
        // @ts-ignore
        let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
        let result = await contract.users(address).call();
        const PROJECT_INSURANCE = await contract.PROJECT_INSURANCE().call();
        let roi = await contract.getDailyRoi().call(
            {from: address}
        )
        if (Number(result?.depositsLength.toString()) > 0) {
            let deposit = await contract.userDeposits(address, Number(result?.depositsLength.toString()) - 1).call()
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
                projectInsurance: Number(Number(ethers.formatUnits(PROJECT_INSURANCE.toString(), 6)).toFixed(2)),
                dailyRoi: Number(Number(ethers.formatUnits(roi.toString(), 6)).toFixed(2)),
                contractBalance: contractBalance,
            }
        } else {
            return {
                address: address,
                balance: balance,
                activeDeposit: 0,
                activeDepositWithdrawn: 0,
                walletConnected: true,
                // @ts-ignore
                // referrer: window.tronWeb.address.fromHex(result?.referrer),
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
                projectInsurance: Number(Number(ethers.formatUnits(PROJECT_INSURANCE.toString(), 6)).toFixed(2)),
                dailyRoi: Number(Number(ethers.formatUnits(roi.toString(), 6)).toFixed(2)),
                contractBalance: contractBalance,
            }
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

export const fetchContractStats = async () => {
    // console.log('contract stats called')
    // @ts-ignore
    let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
    try {
        const totalInvestment = await contract.totalInvested().call();
        const totalWithdrawn = await contract.totalWithdrawn().call();
        return {
            contractTotalDeposited: Number(ethers.formatUnits(totalInvestment.toString(), 6)),
            contractTotalWithdrawn: Number(ethers.formatUnits(totalWithdrawn.toString(), 6))
        }
    } catch (e) {
        console.log(e)
        return {
            contractTotalDeposited: 0,
            contractTotalWithdrawn: 0
        }
    }
}
