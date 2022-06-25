import styled from 'styled-components/native';

export const ContainerSearchBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({theme}) => theme.colors.secondary};
  width: ${({theme}) => theme.metrics.px(380)}px;
  height: ${({theme, h}) => theme.metrics.px(60)}px;
  border-width: ${({theme, focus}) => theme.metrics.px(focus ? 2 : 1)}px;
  border-color: ${({theme, focus}) =>
    focus ? theme.colors.selected : theme.colors.secondary};
  border-radius: ${({theme}) => theme.metrics.px(16)}px;
`

export const InputText = styled.TextInput`
width: ${({theme}) => theme.metrics.px(380)}px;
height: ${({theme}) => theme.metrics.px(60)}px;
flex-direction: row;
font-weight: ${({fw}) => fw ? fw : 'normal'};
font-size: ${({fontSize, theme}) => theme.metrics.px(fontSize || 14)}px;
color: ${({theme}) => theme.colors.white};
bottom: ${({theme}) => theme.metrics.px(18)}px;
margin-bottom: ${({theme}) => theme.metrics.px(30)}px;
`;