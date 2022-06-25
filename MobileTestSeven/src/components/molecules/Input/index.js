import React, {useState} from 'react';
import {InputText, ContainerSearchBar} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {BaseView} from '../../atoms';

export const InputSearch = ({placeholder}) => {
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState('')

    return (
        <ContainerSearchBar focus={focus}>
            <BaseView row ml={18} mt={18}>
                <Icon name={'magnify'} size={25} color={'#9D9D9D'} />
                <InputText value={value} onChangeText={setValue} onEndEditing={() => setFocus(false)}
                    onFocus={() => setFocus(true)}
                    placeholder={placeholder} />
            </BaseView>
        </ContainerSearchBar>
    )
}