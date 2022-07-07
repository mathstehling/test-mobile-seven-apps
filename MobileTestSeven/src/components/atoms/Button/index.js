import React from 'react'
import { BaseTouch, DefaultText, BaseView } from '../index'
import { Image, SmallImageSinger, ImageContainer, SongContainer } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ass } from '../../../assets/imgs'


export const FilterButton = ({ image, style, onPress }) => {
    return (

        <BaseTouch width={152} height={150} br={120} mt={12} onPress={onPress}>
            <Image source={{ uri: image }} />
            <DefaultText fontSize={20} fw={600} color={'white'} mt={8}>{style}</DefaultText>
        </BaseTouch>
    );
};

export const PlaylistButton = ({ title, time, onPress }) => {
    return (
        <BaseTouch width={380} height={120} br={15} bg={'secondary'} align={'flex-start'} justify={'flex-start'} onPress={onPress}>
            <DefaultText fontSize={25} fw={500} color={'white'} padding={16}>{title}</DefaultText>
            <DefaultText fontSize={14} fw={400} color={'white'} ml={16} mt={20}>Tempo de reprodução: {time}</DefaultText>
        </BaseTouch>
    );
};

export const SongButton = ({ image, title, singer, time }) => {
    const uri = '../../../assets/imgs/ass.jpg'
    return (
        <BaseTouch width={380} height={60} bg={'secondary'} borderWidth br={15} justify={'flex-start'} align={'flex-start'}>
            <ImageContainer ml={12} mt={10} br={40} row>
                <SmallImageSinger source={{ uri: image, }} />
                <BaseView width={100}>
                    <DefaultText color={'white'} fw={700} ml={20} width={300}>{title}</DefaultText>
                    <DefaultText color={'white'} fw={400} ml={20} width={300} mt={5}>{singer}</DefaultText>
                </BaseView>
                <DefaultText color={'white'} fw={400} ml={182} mt={20}>{time}</DefaultText>
            </ImageContainer>

        </BaseTouch>
    );
};

export const SearchButton = ({ onPress }) => {
    return (
        <BaseTouch width={54} height={60} ml={12} bg={'secondary'} br={16} onPress={onPress}>
            <Icon name={'magnify'} size={40} color={'#9D9D9D'} />
        </BaseTouch>
    )
}