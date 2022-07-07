import React from 'react';
import { Background, SongButton, BaseView, BaseScroll, PlaylistButton } from '../../../components'
import { usePlaylistStore, Playlists, Songs } from '../../../services';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const PlaylistsScreen = ({ navigation }) => {
    const { setPlaylist } = usePlaylistStore();
    let sum = 0;

    return (
        <Background title={'Select a song'} onPress={() => { navigation.goBack() }}>
            <BaseScroll>
                {Playlists.map((item) => {
                    return (
                        <BaseView ml={24} mt={20}>
                            <PlaylistButton title={item.name} time={item.time} onPress={() => { setPlaylist(item); navigation.navigate('Music') }} />
                        </BaseView>
                    )
                })}
            </BaseScroll>
        </Background >

    )
}