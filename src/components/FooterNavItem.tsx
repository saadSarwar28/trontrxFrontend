import React from 'react'
import Link from 'next/link'


interface FooterNavItemProps {
    text: string,
    link: string
}

const FooterNavItem: React.FC<FooterNavItemProps> = ({ text, link }) => {
    return (
        <li>
            <div></div>
            <Link href={link} scroll={false}>{text}</Link>
        </li>
    )
}

export default FooterNavItem