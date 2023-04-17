export interface User {
    account: {
        balance: number,
        walletConnected: false,
        referrer: string,
        address: string,
        depositsLength: number,
        totalDeposited: number,
        directCommission: number,
        directCommissionDebt: number,
        level: number,
        levelIncome: number,
        levelIncomeDebt: number,
        totalRefs: number,
        directRefs: number,
        totalTeamDeposit: number,
        totalWithdrawn: number,
        lastWithdrawn: number,
    }
}