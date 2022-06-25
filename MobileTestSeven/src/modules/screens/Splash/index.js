import React from 'react';
import {Container, Logo} from './styles';
import LogoImage from '../../../assets/imgs/Logo.jpg'

export const SplashScreen = () => {
    return (
        <Container>
            <Logo source={LogoImage} />
        </Container>
    )
}