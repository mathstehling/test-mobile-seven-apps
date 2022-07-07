import React, { useState } from 'react';
import { InputText, ContainerSearchBar } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { BaseView } from '../../atoms';
import { useSearchStore } from '../../../services';

export const InputSearch = ({ placeholder, value, setValue }) => {
    const [focus, setFocus] = useState(false)
    const { setSearch } = useSearchStore();

    return (
        <ContainerSearchBar focus={focus}>
            <BaseView row ml={18} mt={18}>
                <InputText value={value} onChangeText={setValue} onEndEditing={() => { setFocus(false); setSearch(value) }}
                    onFocus={() => setFocus(true)}
                    placeholder={placeholder} />
            </BaseView>
        </ContainerSearchBar>
    )
}