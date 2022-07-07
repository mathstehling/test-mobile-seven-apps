import React, { useState } from 'react';
import { BaseView, Background, InputSearch, FilterButton, BaseScroll, SearchButton } from '../../../components';
import { Filters } from '../../../services'
import { HomeContainer } from './styles';
import { useDataStore, useSearchStore } from '../../../services';

export const HomeScreen = ({ navigation }) => {
    const { setStyle } = useDataStore();
    const [value, setValue] = useState('')
    console.log(value);

    return (
        <Background title={'Find your favorite song'}>
            <BaseView mt={24} ml={24} fullHeight>
                <BaseView row>
                    <InputSearch
                        placeholder={'Search'}
                        value={value}
                        setValue={setValue}
                    />
                    <SearchButton onPress={() => navigation.navigate('Music')} />
                </BaseView>
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