import React from 'react';
import { ImageBackgroundScreen } from './styles';
import { Title, BaseView } from '../../../components'
import Home from '../../../assets/imgs/Home.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Background = ({ children, title, goBack, onPress }) => {
    return (

        <ImageBackgroundScreen source={Home}>
            {goBack &&
                <BaseView ml={356} mt={10} height={40} mb={-40}>
                    <Icon name={'arrow-left'} size={40} color={'#FFF'} onPress={onPress} />
                </BaseView>
            }
            <Title ml={24} mt={100} height={50}>{title}</Title>
            {children}
        </ImageBackgroundScreen>

    )
}