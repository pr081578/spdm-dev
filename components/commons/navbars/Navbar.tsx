'use client';
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import LoginModal from '../../modals/LoginModal';
import RegisterModal from '../../modals/RegisterModal';
import Logo from '../Logo';

const menuBasicItems = [
  { label: 'About', route: '/about' },
  { label: 'FAQ', route: '/faq' },
  { label: 'Support', route: '/Support' },
];

export default function navbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuBasicItems.map((item, i) => (
          <NavbarItem key={i}>
            <Link color="foreground" href={item.route}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <LoginModal />
      <RegisterModal />
    </Navbar>
  );
}
