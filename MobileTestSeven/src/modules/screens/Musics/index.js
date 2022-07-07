import React from 'react';
import { Background, SongButton, BaseView, BaseScroll, DefaultText } from '../../../components'
import { useDataStore, Songs, useSearchStore, usePlaylistStore } from '../../../services';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const MusicsScreen = ({ navigation }) => {
    const { style, setStyle } = useDataStore();
    const { search, setSearch } = useSearchStore();
    const { playlist, setPlaylist } = usePlaylistStore();
    console.log(search);
    console.log(style);
    console.log(playlist);
    const songs = Songs.filter((s) => s.songName === search || s.artistName === search);
    console.log(songs)
    return (
        <Background title={'Select a song'} goBack onPress={() => { navigation.goBack(); setStyle(null); setSearch(null); setPlaylist(null); }}>
            {(style || playlist) &&
                style.songs.map((item) => {
                    const song = Songs.find((s) => s.id === item)
                    return (

                        <BaseView ml={24} mt={20}>
                            <SongButton image={song.artistPicture} title={song.songName} singer={song.artistName} time={song.duration} />
                        </BaseView>

                    )
                })}
            {search &&
                songs.map((item) => {
                    return (
                        <BaseView ml={24} mt={20}>
                            <SongButton image={item.artistPicture} title={item.songName} singer={item.artistName} time={item.duration} />
                        </BaseView>
                    )
                })
            }
            {(songs.length === 0 && search != null) &&
                <BaseView ml={24} mt={20}>
                    <DefaultText fw={500} fontSize={20}>Nenhuma música encontrada</DefaultText>
                </BaseView>}

        </Background >

    )
}