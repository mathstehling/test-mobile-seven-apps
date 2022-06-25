import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
flex-direction: column;
align-itens: center;
justify-content: center;
`;

export const Logo = styled.Image`
width: ${({theme}) => theme.metrics.px(130)}px;
height: ${({theme}) => theme.metrics.px(130)}px;
`;