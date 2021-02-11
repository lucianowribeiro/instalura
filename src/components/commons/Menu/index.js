import React from 'react';
import { Logo } from '../../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {
  const links = [
    {url: '/', name: 'Home' },
    {url: '/faq', name: 'Perguntas Frequentes' },
    {url: '/sobre', name: 'Sobre'}
  ]
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide> {/* MenuWrapper.LeftSide */}
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul"> {/* MenuWrapper.CentralSide */}
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url}>
              {link.name}
            </a>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide> {/* MenuWrapper.RightSide */}
        <button type="button">
          Entrar
        </button>
        <button type="button">
          Cadastrar
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
} 