import React from 'react';
import {BaseView, Background, InputSearch, FilterButton, BaseScroll} from '../../../components';
import {Filters} from '../../../services'
import {HomeContainer} from './styles';
import {useDataStore} from '../../../services';

export const HomeScreen = ({navigation}) => {
    const {setStyle} = useDataStore();
    return (
        <Background title={'Find your favorite song'}>
            <BaseView mt={24} ml={24} fullHeight>
                <InputSearch
                    placeholder={'Search'}
                />
                <BaseScroll fullHeight mb={200} align={'center'}>
                    {Filters.map((item) => (
                        <HomeContainer padding={16} ml={100}>
                            <FilterButton {...item} onPress={() => {
                                setStyle(item);
                                navigation.navigate('Music')
                            }} />
                        </HomeContainer>
                    ))}
                </BaseScroll>
            </BaseView>
        </Background>
    )
}