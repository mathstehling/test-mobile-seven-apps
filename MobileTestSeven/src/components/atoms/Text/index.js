import styled from 'styled-components/native'

export const DefaultText = styled.Text`
  font-size: ${({fontSize, theme}) => theme.metrics.px(fontSize || 14)}px;
  color: ${({theme, color}) =>
    color ? theme.colors[color] : theme.colors.white};
  text-align: ${({align}) => align || 'left'};
  margin-top: ${({theme, mt, noMargin}) =>
    theme.metrics.handlePadding(noMargin ? 0 : mt)}px;
  margin-bottom: ${({theme, mb, noMargin}) =>
    theme.metrics.handlePadding(noMargin ? 0 : mb)}px;
  margin-left: ${({theme, ml, noMargin}) =>
    theme.metrics.handlePadding(noMargin ? 0 : ml)}px;
  margin-right: ${({theme, mr, noMargin}) =>
    theme.metrics.handlePadding(noMargin ? 0 : mr)}px;
  max-width: ${({maxWidth, theme}) =>
    maxWidth ? `${theme.metrics.px(maxWidth)}px` : 'auto'};
  width: ${({width, theme, fullWidth}) =>
    width ? `${theme.metrics.px(width)}px` : fullWidth ? '100%' : 'auto'};
  height: ${({height, theme}) =>
    height ? `${theme.metrics.px(height)}px` : 'auto'};
  background-color: ${({theme, bg}) =>
    bg ? theme.colors[bg] : 'transparent'};
  padding-right: ${({theme, pr}) => theme.metrics.handlePadding(pr)}px;
  padding-left: ${({theme, pl}) => theme.metrics.handlePadding(pl)}px;
  padding-top: ${({theme, pt}) => theme.metrics.handlePadding(pt)}px;
  padding-bottom: ${({theme, pb}) => theme.metrics.handlePadding(pb)}px;
  padding: ${({theme, padding}) => theme.metrics.handlePadding(padding)}px;
  font-weight: ${({fw}) => fw ? fw : 'normal'};
  text-decoration: ${({underlineColor}) =>
    underlineColor ? 'underline' : 'none'};
  text-decoration-color: ${({theme, underlineColor}) =>
    theme.colors[underlineColor || 'transparent']};
  opacity: ${({opacity}) => opacity || 1};
  text-transform: ${({capitalize}) => (capitalize ? 'capitalize' : 'none')};
`

export const TitleSplash = styled(DefaultText).attrs({
  fontSize: 50,
  defaultFont: 'bold',
  color: 'white',
})``

export const Title = styled(DefaultText).attrs({
  fontSize: 30,
  defaultFont: 'bold',
  color: 'white',
})``