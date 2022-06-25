import styled from 'styled-components/native';
import {BaseTouch, BaseView} from '../../atoms';

export const ImageBackground = styled.ImageBackground.attrs({resizeMode: 'cover'})`
width: ${({theme}) => theme.metrics.px(152)}px;
height: ${({theme}) => theme.metrics.px(150)}px;
border-radius: ${({theme}) => theme.metrics.px(120)}px;
align-itens: center;
justify-content: center;
text-align: center;
`;

export const SmallImageSinger = styled.Image.attrs({resizeMode: 'cover'})`
width: ${({theme}) => theme.metrics.px(40)}px;
height: ${({theme}) => theme.metrics.px(40)}px;
border-radius: ${({theme}) => theme.metrics.px(40)}px;
background-color: ${({theme}) => theme.colors.white};
align-itens: center;
justify-content: center;
text-align: center;
`;

export const ImageContainer = styled(BaseView).attrs({
    backgroundColor: '#FFF',
    width: 380,
    height: 40,
})`
top: ${({theme}) => theme.metrics.px(0)}px;
left: ${({theme}) => theme.metrics.px(0)}px;
border-radius: ${({theme}) => theme.metrics.px(40)}px;
`;

export const SongContainer = styled(BaseView).attrs({
    backgroundColor: '#4349E0',
    width: 50,
    height: 50,
})`
top: ${({theme}) => theme.metrics.px(0)}px;
left: ${({theme}) => theme.metrics.px(0)}px;
`;