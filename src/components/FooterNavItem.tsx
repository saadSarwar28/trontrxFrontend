import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {getContractStats} from '@/store/accountSlice';

const Button = styled.button`
  border: none;
  background: none;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
`


interface FooterNavItemProps {
    text: string,
    link: string
}

const FooterNavItem: React.FC<FooterNavItemProps> = ({text, link}) => {

    const router = useRouter()
    const dispatch = useDispatch()

    const handleClick = () => {
        if (text === 'CONTRACT STATS') {
            // @ts-ignore
            if (window.tronWeb) {
                dispatch(
                    // @ts-ignore
                    getContractStats()
                )
            }
        }
        router.push(link)
    }

    return (
        <li>
            <div></div>
            <Button onClick={handleClick}>{text}</Button>
        </li>
    )
}

export default FooterNavItem
