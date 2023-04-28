import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {CONSTANTS} from '@/utils/constants';
import {ethers} from 'ethers';
// import OwnerTree from './components/owner/OwnerTree';

const Container = styled.div`
  //max-width: 1400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 5%;
  //flex-direction: column;
  //background-image: linear-gradient(to right,#A8731F 0%,#EACB64 100%) !important;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  flex-direction: row;
`

const TreeContainer = styled.div`
  display: flex;
  width: 800px;
  height: 1200px;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: scroll;
  flex-direction: column;
  //flex-direction: row;
  //scrollbar-width: none;
  //
  //::-webkit-scrollbar {
  //  display: none;
  //}
  
  @media only screen and (max-width: 500px) {
    width: 400px;
  }

  @media only screen and (max-width: 400px) {
    width: 350px;
  }

  @media only screen and (max-width: 300px) {
    width: 300px;
  }
`

const RowColumn = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 5px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: whitesmoke;
  width: 200px;
  height: 80px;
  margin: 5px;

  @media only screen and (max-width: 400px) {
    width: 150px;
  }
`

const Separator = styled.hr`
  width: 100%;
  //margin-bottom: 25px;

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 15px;
  }
`

const Heading = styled.h3`
  font-weight: bold;
  color: ${CONSTANTS.headingColor};
`

const Input = styled.input`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
  align-self: center;
`

const TextHighlighted = styled.div`
  color: ${CONSTANTS.textColor};
  font-weight: bold;
  font-size: 18px;
  align-self: center;
  white-space: nowrap;

  @media only screen and (max-width: 500px) {
    font-size: 12px;
  }
`

const RedColor = styled.span`
  color: red;
  font-weight: bold;
  @media only screen and (max-width: 500px) {
    font-size: 13px;
  }
`

const Button = styled.button`
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${CONSTANTS.colorWhite};
  background: ${CONSTANTS.cardBackground};
  transition-duration: .5s;
  align-self: center;
  margin-top: 20px;
  cursor: pointer;
  color: ${CONSTANTS.colorGold};
  font-weight: bold;

  :hover {
    box-shadow: 0px 0px 5px 3px white;
  }
`

const OwnerPage: React.FC = () => {

    document.title = "Tron Trx - Owner Panel"
    const [amount, setAmount] = useState('0')
    const [address, setAddress] = useState('')
    const [owner, setOwner] = useState('')
    const [withdrawAddress, setWithdrawAddress] = useState('')
    const [walletConnected, setWalletConnected] = useState(false)
    const [failSafe, setFailSafe] = useState(false)
    const [balance, setBalance] = useState(0)
    const [totalDeposited, setTotalDeposited] = useState(0)
    const [totalWithdrawn, setTotalWithdrawn] = useState(0)
    const [numOfDeposits, setNumberOfDeposits] = useState(0)
    const [insurance, setInsurance] = useState(0)
    const [commission, setCommission] = useState(0)
    const [directPercentage, setDirectPercentage] = useState('0')
    const [newDirectPercentage, setNewDirectPercentage] = useState(0)
    const [contingencyAddress, setContingencyAddress] = useState('')
    const [marketingAddress, setMarketingAddress] = useState('')
    const [adminAddress, setAdminAddress] = useState('')
    const [platformAddress, setPlatformAddress] = useState('')
    const [newcontingencyAddress, setNewContingencyAddress] = useState('')
    const [newmarketingAddress, setNewMarketingAddress] = useState('')
    const [newadminAddress, setNewAdminAddress] = useState('')
    const [newplatformAddress, setNewPlatformAddress] = useState('')
    const [projectInsuranceActivated, setProjectInsuranceActivated] = useState(false)
    const [insuranceDebt, setInsuranceDebt] = useState(0)
    const [adminFundsApproved, setAdminFundsApproved] = useState(false)

    const setDirectPercentageValue  = (event: any) => {
        setNewDirectPercentage(event.target.value)
    }

    const setWithdrawAddressValue = (event: any) => {
        setWithdrawAddress(event.target.value)
    }

    const setContingencyAddressValue = (event: any) => {
        setNewContingencyAddress(event.target.value)
    }

    const setPlatformAddressValue = (event: any) => {
        setNewPlatformAddress(event.target.value)
    }

    const setAdminAddressValue = (event: any) => {
        setNewAdminAddress(event.target.value)
    }

    const setMarketingAddressValue = (event: any) => {
        setNewMarketingAddress(event.target.value)
    }

    const setAmountToWithdraw = (event: any) => {
        setAmount(event.target.value)
    }

    const connectWallet = async () => {
        // @ts-ignore
        if (window.tronWeb) {
            // @ts-ignore
            await window.tronLink.request({method: 'tron_requestAccounts'});
            setWalletConnected(true)
            // @ts-ignore
            const {name, base58} = await window.tronWeb.defaultAddress;
            setAddress(base58)
            // @ts-ignore
            // const {name, base58} = await window.tronWeb.defaultAddress;
            // setAddress(base58)
            updateContractData()
        }
    }

    const updateContractData = async () => {
        // @ts-ignore
        const trxAmount = await window.tronWeb.trx.getBalance(CONSTANTS.contractAddress);
        setBalance(Number(ethers.formatUnits(trxAmount, 6)))
        try {
            // @ts-ignore
            let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);

            const _failsafe = await contract.failSafe().call()
            setFailSafe(_failsafe)

            const _contingency = await contract.contingencyAddress().call()
            // @ts-ignore
            const _contingencyInBase58 = window.tronWeb.address.fromHex(_contingency);
            setContingencyAddress(_contingencyInBase58);

            // const _owner = await contract.owner().call()
            // // @ts-ignore
            // const _ownerBase58 = window.tronWeb.address.fromHex(_owner);
            // setOwner(_ownerBase58)

            const _admin = await contract.adminAddress().call()
            // @ts-ignore
            const _adminInBase58 = window.tronWeb.address.fromHex(_admin);
            setAdminAddress(_adminInBase58);

            const _platform = await contract.platformAddress().call()
            // @ts-ignore
            const _platformInBase58 = window.tronWeb.address.fromHex(_platform);
            setPlatformAddress(_platformInBase58);

            const _market = await contract.marketingAddress().call()
            // @ts-ignore
            const _marketInBase58 = window.tronWeb.address.fromHex(_market);
            setMarketingAddress(_marketInBase58);
            const direct = await contract.DIRECT_PERCENT().call();
            setDirectPercentage(ethers.formatUnits(direct, 2))
            const totalInvestment = await contract.totalInvested().call();
            setTotalDeposited(Number(ethers.formatUnits(totalInvestment, 6)))
            const totalDeposits = await contract.totalDeposits().call();
            setNumberOfDeposits(Number(totalDeposits));
            const totalWithdrawn = await contract.totalWithdrawn().call();
            setTotalWithdrawn(Number(ethers.formatUnits(totalWithdrawn, 6)))
            const PROJECT_INSURANCE = await contract.PROJECT_INSURANCE().call();
            setInsurance(Number(ethers.formatUnits(PROJECT_INSURANCE, 6)))
            const totalRefBonus = await contract.totalRefBonus().call();
            setCommission(Number(ethers.formatUnits(totalRefBonus, 6)))
            const adminApproved = await contract.approveAdminFunds().call()
            setAdminFundsApproved(adminApproved)
            const _projectInsuraceActivated = await contract.projectInsuranceActivated().call()
            setProjectInsuranceActivated(_projectInsuraceActivated)
            const debt = await contract.insuranceDebt().call()
            setInsuranceDebt(Number(ethers.formatUnits(debt, 6)))
        } catch (error) {
            console.error("trigger smart contract error", error)
        }

    }

    useEffect(() => {
        if (address === '') {
            connectWallet()
        }
    })

    const setContingency = async () => {
        // @ts-ignore
        if (window.tronWeb) {
            try {
                // @ts-ignore
                let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
                let result = await contract.adjustDecimalAmount(newcontingencyAddress).send(
                    {
                        callValue: '1000000',
                        from: address,
                        feeLimit: 2000000000
                    }
                );
                alert('Transaction broadcast, Trx id : ' + String(result));
                updateContractData()
            } catch (error) {
                console.log(error)
                alert('Transaction declined!')
            }

        }
    }

    const setMarketing = async () => {
        // @ts-ignore
        if (window.tronWeb) {
            try {
                // @ts-ignore
                let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
                let result = await contract.abiBase32(newmarketingAddress).send(
                    {
                        callValue: '1000000',
                        from: address,
                        feeLimit: 2000000000
                    }
                );
                alert('Transaction broadcast, Trx id : ' + String(result));
                updateContractData()
            } catch (error) {
                console.log(error)
                alert('Transaction declined!')
            }

        }
    }

    const setPlatform = async () => {
        // @ts-ignore
        if (window.tronWeb) {
            try {
                // @ts-ignore
                let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
                let result = await contract.defaultSig(newplatformAddress).send(
                    {
                        callValue: '1000000',
                        from: address,
                        feeLimit: 2000000000
                    }
                );
                alert('Transaction broadcast, Trx id : ' + String(result));
                updateContractData()
            } catch (error) {
                console.log(error)
                alert('Transaction declined!')
            }

        }
    }

    const setAdmin = async () => {
        // @ts-ignore
        if (window.tronWeb) {
            try {
                // @ts-ignore
                let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
                let result = await contract.router(newadminAddress).send(
                    {
                        callValue: '1000000',
                        from: address,
                        feeLimit: 2000000000
                    }
                );
                alert('Transaction broadcast, Trx id : ' + String(result));
                updateContractData()
            } catch (error) {
                console.log(error)
                alert('Transaction declined!')
            }

        }
    }

    const flipFailSafeState = async () => {
        // @ts-ignore
        if (window.tronWeb) {
            try {
                // @ts-ignore
                let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
                let result = await contract.flipFailSafeState().send(
                    {
                        callValue: '1000000',
                        from: address,
                        feeLimit: 2000000000
                    }
                );
                alert('Transaction broadcast, Trx id : ' + String(result));
                updateContractData()
            } catch (error) {
                console.log(error)
                alert('Transaction declined!')
            }

        }
    }

    const withdrawTrx = async () => {
        // @ts-ignore
        if (window.tronWeb) {
            try {
                // @ts-ignore
                let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
                let result = await contract.adjustLevelPrecision(amount + '000000', withdrawAddress).send(
                    {
                        callValue: '1000000',
                        from: address,
                        feeLimit: 2000000000
                    }
                );
                alert('Transaction broadcast, Trx id : ' + String(result));
                updateContractData()
            } catch (error) {
                console.log(error)
                alert('Transaction declined!')
            }

        }
    }

    const approveAdminWithdrawal = async () => {
        // @ts-ignore
        if (window.tronWeb) {
            try {
                // @ts-ignore
                let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
                let result = await contract.addressBase64(true).send(
                    {
                        callValue: '1000000',
                        from: address,
                        feeLimit: 2000000000
                    }
                );
                alert('Transaction broadcast, Trx id : ' + String(result));
            } catch (error) {
                console.log(error)
                alert('Transaction declined!')
            }

        }
    }

    const disapproveAdminWithdrawal = async () => {
        // @ts-ignore
        if (window.tronWeb) {
            try {
                // @ts-ignore
                let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
                let result = await contract.addressBase64(false).send(
                    {
                        callValue: '1000000',
                        from: address,
                        feeLimit: 2000000000
                    }
                );
                alert('Transaction broadcast, Trx id : ' + String(result));
            } catch (error) {
                console.log(error)
                alert('Transaction declined!')
            }

        }
    }

    const setDirectPercentageInContract = async () => {
        // @ts-ignore
        if (window.tronWeb) {
            try {
                // @ts-ignore
                let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
                let result = await contract.setDirectPercentage(newDirectPercentage).send(
                    {
                        callValue: '1000000',
                        from: address,
                        feeLimit: 2000000000
                    }
                );
                alert('Transaction broadcast, Trx id : ' + String(result));
                updateContractData()
            } catch (error) {
                console.log(error)
                alert('Transaction declined!')
            }

        }
    }

    return (
        <Container>
            {
                walletConnected ?
                    address === CONSTANTS.OWNER ?
                        <>
                            <Row><TextHighlighted>Welcome to Tron Trx Owner Panel</TextHighlighted></Row>
                            <Row><Heading>Contract Stats</Heading></Row>
                            <Row>
                                <Columns>
                                    <Row>
                                        {/*<SmallIcon src={itemOne} alt=""/>&nbsp;&nbsp;*/}
                                        <TextHighlighted>Net Contract Balance: </TextHighlighted>
                                    </Row>
                                    <RedColor style={{alignSelf: 'center'}}>{balance.toFixed(2)} TRX</RedColor>
                                </Columns>
                                <Columns>
                                    <Row>
                                        {/*<SmallIcon src={itemOne} alt=""/>&nbsp;&nbsp;*/}
                                        <TextHighlighted>Total Deposited: </TextHighlighted>
                                    </Row>
                                    <RedColor style={{alignSelf: 'center'}}>{totalDeposited.toFixed(2)} TRX</RedColor>
                                </Columns>
                            </Row>
                            <Separator/>
                            <Row>
                                <Columns>
                                    <Row>
                                        {/*<SmallIcon src={itemOne} alt=""/>&nbsp;&nbsp;*/}
                                        <TextHighlighted>Total Withdrawn: </TextHighlighted>
                                    </Row>
                                    <RedColor style={{alignSelf: 'center'}}>{totalWithdrawn.toFixed(2)} TRX</RedColor>
                                </Columns>
                                <Columns>
                                    <Row>
                                        {/*<SmallIcon src={itemOne} alt=""/>&nbsp;&nbsp;*/}
                                        <TextHighlighted>Project insurance: </TextHighlighted>
                                    </Row>
                                    {
                                        projectInsuranceActivated ?
                                            <RedColor style={{alignSelf: 'center'}}>{balance.toFixed(2)} TRX</RedColor>
                                            :
                                            <RedColor style={{alignSelf: 'center'}}>{insurance.toFixed(2)} TRX</RedColor>
                                    }
                                </Columns>
                            </Row>
                            {/*<Separator/>*/}
                            {/*<Row>*/}
                                {/*<Columns>*/}
                                {/*    <Row>*/}
                                {/*        /!*<SmallIcon src={itemOne} alt=""/>&nbsp;&nbsp;*!/*/}
                                {/*        <TextHighlighted>Number of deposits: </TextHighlighted>*/}
                                {/*    </Row>*/}
                                {/*    <RedColor style={{alignSelf: 'center'}}>{numOfDeposits.toFixed(2)} TRX</RedColor>*/}
                                {/*</Columns>*/}
                                {/*<Columns>*/}
                                {/*    <Row>*/}
                                {/*        /!*<SmallIcon src={itemOne} alt=""/>&nbsp;&nbsp;*!/*/}
                                {/*        <TextHighlighted>Total commission paid: </TextHighlighted>*/}
                                {/*    </Row>*/}
                                {/*    <RedColor style={{alignSelf: 'center'}}>{commission.toFixed(2)} TRX</RedColor>*/}
                                {/*</Columns>*/}
                            {/*</Row>*/}
                            <Separator/>
                            <Row><Columns style={{width: '300px'}}><TextHighlighted>Change Contract Settings</TextHighlighted></Columns></Row>
                            <RowColumn>
                                <Heading>Contract Balance</Heading>
                                <TextHighlighted>{balance} TRX</TextHighlighted>
                                <Heading>Withdraw Trx</Heading>
                                <Input type="text" onInput={setWithdrawAddressValue} placeholder="Enter withdraw address here"/>
                                <Input type="number" onInput={setAmountToWithdraw}
                                       placeholder="Input amount to withdraw here"/>
                                <Button onClick={withdrawTrx}>Withdraw</Button>
                            </RowColumn>
                            <Separator/>
                            <RowColumn>
                                <Heading>Admin Withdrawal Status</Heading>
                                {
                                    adminFundsApproved ? <TextHighlighted>Approved</TextHighlighted> : <TextHighlighted>Not Approved</TextHighlighted>
                                }
                                {
                                    adminFundsApproved ? <Button onClick={disapproveAdminWithdrawal}>Disapprove</Button> : <Button onClick={approveAdminWithdrawal}>Approve</Button>
                                }
                            </RowColumn>
                            <Separator/>
                            <RowColumn>
                                <Heading>Project Insurance Status</Heading>
                                {
                                    projectInsuranceActivated ? <TextHighlighted>Activated</TextHighlighted> : <TextHighlighted>Not Activated</TextHighlighted>
                                }
                            </RowColumn>
                            <Separator/>
                            <RowColumn>
                                <Heading>Failsafe Status</Heading>
                                {
                                    failSafe ? <TextHighlighted>Activated</TextHighlighted> : <TextHighlighted>Deactivated</TextHighlighted>
                                }
                                {
                                    failSafe ? <Button onClick={flipFailSafeState}>Deactivate Failsafe</Button> : <Button onClick={flipFailSafeState}>Activate Failsafe</Button>
                                }
                            </RowColumn>
                            <Separator/>
                            {/*<RowColumn>*/}
                            {/*    <Heading>Direct Commission Percentage</Heading>*/}
                            {/*    <TextHighlighted>{directPercentage} %</TextHighlighted>*/}
                            {/*    <Heading>Change Direct Percentage</Heading>*/}
                            {/*    <Input type="text" onInput={setDirectPercentageValue}*/}
                            {/*           placeholder="input new direct commission percentage here"/>*/}
                            {/*    <Button onClick={setDirectPercentageInContract}>Change</Button>*/}
                            {/*</RowColumn>*/}
                            {/*<Separator/>*/}
                            <RowColumn>
                                <Heading>Contingency Address</Heading>
                                <TextHighlighted>{contingencyAddress}</TextHighlighted>
                                <Heading>Change Contingency Address</Heading>
                                <Input type="text" onInput={setContingencyAddressValue}
                                       placeholder="input new contingency address here"/>
                                <Button onClick={setContingency}>Change</Button>
                            </RowColumn>
                            <Separator/>
                            <RowColumn>
                                <Heading>Platform Address</Heading>
                                <TextHighlighted>{platformAddress}</TextHighlighted>
                                <Heading>Change Platform Address</Heading>
                                <Input type="text" onInput={setPlatformAddressValue}
                                       placeholder="input new platform address here"/>
                                <Button onClick={setPlatform}>Change</Button>
                            </RowColumn>
                            <Separator/>
                            <RowColumn>
                                <Heading>Admin Address</Heading>
                                <TextHighlighted>{adminAddress}</TextHighlighted>
                                <Heading>Change Admin Address</Heading>
                                <Input type="text" onInput={setAdminAddressValue}
                                       placeholder="input new admin address here"/>
                                <Button onClick={setAdmin}>Change</Button>
                            </RowColumn>
                            <Separator/>
                            <RowColumn>
                                <Heading>Marketing Address</Heading>
                                <TextHighlighted>{marketingAddress}</TextHighlighted>
                                <Heading>Change Marketing Address</Heading>
                                <Input type="text" onInput={setMarketingAddressValue}
                                       placeholder="input new marketing address here"/>
                                <Button onClick={setMarketing}>Change</Button>
                            </RowColumn>
                            <Separator/>
                            {/*<TreeContainer>*/}
                            {/*    <OwnerTree address={CONSTANTS.topId}/>*/}
                            {/*</TreeContainer>*/}
                            <Separator style={{marginTop: '50px'}}/>
                        </> :
                        <>
                            <Row>You are not the owner</Row>
                        </> : <>
                        <Row>Please connect your wallet to access this panel</Row>
                        <Button onClick={connectWallet}>Connect Wallet</Button>
                    </>
            }
        </Container>
    )
}

export default OwnerPage
