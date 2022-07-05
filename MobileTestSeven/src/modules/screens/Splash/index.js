import React, {useEffect} from 'react';
import {Logo} from './styles';
import {BaseView, TitleSplash} from '../../../components'
import LogoImage from '../../../assets/imgs/Logo.jpg'

export const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000);
    });
    return (
        <BaseView fullWidth
            fullHeight
            bg={'background'}
            align={'center'}
            justify={'center'}>
            <Logo source={LogoImage} />
            <TitleSplash>Seven Players</TitleSplash>
        </BaseView>
    )
}