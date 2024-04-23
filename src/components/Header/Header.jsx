import {
  ContainerData,
  HeaderContainer,
  Text,
  ImageContainer,
  Image,
  LinkElement,
  LinkLogo,
} from './Header.styled';
import image from '../../Files/img/favicon-32x32.png';
import { useState } from 'react';
import { BurgerComponent } from 'components/BurgerComponent/BurgerComponent';
import { BlurBackground } from 'components/BlurBackground/BlurBackground';
import { StyleSheetManager } from 'styled-components';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const choosenBase = JSON.parse(localStorage.getItem('myCollection')).length;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <StyleSheetManager shouldForwardProp={prop => !['isOpen'].includes(prop)}>
      <HeaderContainer>
        <ImageContainer>
          <LinkLogo to="/">
            <Image src={image} alt="Lékařské Zkoušky Online" />
            <Text>Lékařské Zkoušky Online</Text>
          </LinkLogo>
        </ImageContainer>
        <BurgerComponent onClick={toggleMenu} />
        <ContainerData isOpen={isOpen}>
          <LinkElement to="/" onClick={closeMenu}>
            Main Page
          </LinkElement>
          <LinkElement to="page" onClick={closeMenu}>
            Take a tests
          </LinkElement>
          <LinkElement to="AllTests" onClick={closeMenu}>
            All Tests
          </LinkElement>
          <LinkElement to="MyBase" onClick={closeMenu}>
            My Base <span style={{ color: 'blue' }}>({choosenBase})</span>
          </LinkElement>
          <LinkElement to="video" onClick={closeMenu}>
            Video
          </LinkElement>
        </ContainerData>
        {isOpen && <BlurBackground onClick={closeMenu} />}
      </HeaderContainer>
    </StyleSheetManager>
  );
};
