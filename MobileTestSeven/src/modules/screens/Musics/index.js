import React from 'react';
import {Background, SongButton, BaseView, BaseScroll} from '../../../components'
import {useDataStore, Songs} from '../../../services';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const MusicsScreen = ({navigation}) => {
    const {style} = useDataStore();
    console.log(style);
    return (
        <Background title={'Select a song'} goBack onPress={() => {navigation.goBack()}}>
            {style.songs.map((item) => {
                const song = Songs.find((s) => s.id === item)
                return (

                    <BaseView ml={24} mt={20}>
                        <SongButton image={song.artistPicture} title={song.songName} singer={song.artistName} time={song.duration} />
                    </BaseView>

                )
            })}
        </Background >

    )
}