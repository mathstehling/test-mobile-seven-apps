import styled from 'styled-components';

export const BaseView = styled.View`
  margin-top: ${({ theme, mt }) => theme.metrics.handlePadding(mt)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.handlePadding(mb)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.handlePadding(mr)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.handlePadding(ml)}px;
  border-radius: ${({ theme, br }) => theme.metrics.handleBorderRadius(br)}px;
  padding: ${({ theme, padding }) => theme.metrics.handlePadding(padding)}px;
  max-width: ${({ maxWidth, theme }) =>
            maxWidth ? `${theme.metrics.px(maxWidth)}px` : 'auto'};
  background-color: ${({ theme, bg }) => (bg ? theme.colors[bg] : 'transparent')};
  width: ${({ width, theme, fullWidth, baseWidth }) =>
            width
                  ? `${theme.metrics.px(width)}px`
                  : fullWidth
                        ? '100%'
                        : baseWidth
                              ? `${theme.metrics.px(327)}px`
                              : 'auto'};
  height: ${({ height, theme, fullHeight }) =>
            fullHeight ? '100%' : height ? `${theme.metrics.px(height)}px` : 'auto'};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: ${({ align }) => align || 'flex-start'};
  position: ${({ position }) => position || 'relative'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  border-color: ${({ theme, borderColor }) =>
            borderColor ? theme.colors[borderColor] : 'transparent'};
    bottom: ${({ theme, bt }) => theme.metrics.handlePadding(bt)}px;}
  border-width: ${({ theme, borderColor }) =>
            theme.metrics.px(borderColor ? 1 : 0)}px;
  border-top-left-radius: ${({ theme, btl }) => theme.metrics.px(btl ? 20 : 0)}px;
  border-top-right-radius: ${({ theme, btr }) =>
            theme.metrics.px(btr ? 20 : 0)}px;
  border-bottom-left-radius: ${({ theme, bbl }) =>
            theme.metrics.px(bbl ? 30 : 0)}px;
  border-bottom-right-radius: ${({ theme, bbr }) =>
            theme.metrics.px(bbr ? 30 : 0)}px;
`;

export const BaseTouch = styled.TouchableOpacity`
  margin-top: ${({ theme, mt }) => theme.metrics.handlePadding(mt)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.handlePadding(mb)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.handlePadding(mr)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.handlePadding(ml)}px;
  color: ${({ theme, c }) => theme.colors[c]}px;

  padding-horizontal: ${({ theme, paddingh }) =>
            theme.metrics.handlePadding(paddingh)}px;
  border-radius: ${({ theme, br }) => theme.metrics.handleBorderRadius(br)}px;
  max-width: ${({ maxWidth, theme }) =>
            maxWidth ? `${theme.metrics.px(maxWidth)}px` : 'auto'};
  background-color: ${({ theme, bg }) => (bg ? theme.colors[bg] : 'transparent')};
  width: ${({ width, theme, fullWidth, baseWidth }) =>
            width
                  ? `${theme.metrics.px(width)}px`
                  : fullWidth
                        ? '100%'
                        : baseWidth
                              ? `${theme.metrics.px(428)}px`
                              : 'auto'};
  height: ${({ height, theme }) =>
            height ? `${theme.metrics.px(height)}px` : 'auto'};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  border-color: ${({ theme, borderColor }) =>
            borderColor ? theme.colors[borderColor] : 'transparent'};
  border-width: ${({ theme, borderWidth }) =>
            theme.metrics.px(borderWidth ? 1 : 0)}px;
`;

export const BaseScroll = styled.ScrollView.attrs(
      ({ horizontal, pb, pl, pr, theme, align, scroll }) => ({
            horizontal: horizontal,
            showsVerticalScrollIndicator: false,
            showsHorizontalScrollIndicator: false,
            keyboardShouldPersistTaps: 'handled',
            contentContainerStyle: {
                  paddingBottom: theme.metrics.px(pb || 0),
                  paddingLeft: theme.metrics.px(pl || 0),
                  paddingRight: theme.metrics.px(pr || 0),
                  alignItems: align || 'center',
            },
            scrollEnabled: scroll,
      }),
)`
  width: ${({ width, theme, fullWidth }) =>
            width ? `${theme.metrics.px(width)}px` : fullWidth ? '100%' : 'auto'};
  padding-top: ${({ theme, pt }) => theme.metrics.px(pt || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  height: ${({ theme, height, fullHeight }) =>
            height ? `${theme.metrics.px(height)}px` : fullHeight ? '100%' : 'auto'};
`;

export const BaseScrollFilter = styled(BaseScroll).attrs()`
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: ${({ theme, btl }) => theme.metrics.px(btl ? 20 : 0)}px;
  border-top-right-radius: ${({ theme, btr }) =>
            theme.metrics.px(btr ? 20 : 0)}px;
`;
