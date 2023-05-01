import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {getContractStats} from '@/store/accountSlice';


interface FooterNavItemProps {
    text: string,
    link: string
}

const FooterNavItem: React.FC<FooterNavItemProps> = ({ text, link }) => {

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
            <button onClick={handleClick}>{text}</button>
        </li>
    )
}

export default FooterNavItem
