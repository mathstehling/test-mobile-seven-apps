import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BaseView, BaseTouch, DefaultText } from '../../atoms';
import { useDataStore, useSearchStore, usePlaylistStore } from '../../../services';

const ICONS_ASSETS = [{
    id: 0,
    name: 'Home',
    icon: 'text-search'
},
{
    id: 1,
    name: 'Playlists',
    icon: 'playlist-music-outline'
}
]



export const BottomBar = ({ state, descriptors, navigation }) => {
    const { setStyle } = useDataStore();
    const { setSearch } = useSearchStore();
    const { setPlaylist } = usePlaylistStore();
    return (
        <BaseView row fullWidth height={67} btr btl justify={'space-between'}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    setPlaylist(null);
                    setSearch(null);
                    setStyle(null);
                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                const ItemInfo = ICONS_ASSETS.find(item => item.name === label);

                return (
                    <BaseTouch
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        width={214}
                        fullHeight
                        align={'center'}
                        justify={'center'}
                    >
                        <Icon size={36} name={ItemInfo.icon} />
                        <DefaultText color={'secondary'} fw={500}>{ItemInfo.name}</DefaultText>
                    </BaseTouch>
                );
            })}
        </BaseView>
    );
}