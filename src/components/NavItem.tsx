import Link from "next/link"
import React from "react"
import styled from 'styled-components';

const Text = styled.span`
  color: #FFFFFF;
  transition-duration: 500ms;
  :hover {
    color: #F2A71B
  }
`

interface NavItemProps {
  text: string,
  link: string,
}

const NavItem: React.FC<NavItemProps> = ({ text, link }) => {
  return (
    <li>
      <Link href={link} scroll={false}><Text>{text}</Text></Link>
    </li>
  )
}

export default NavItem
