import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text} from 'react-native';
import {InputSearch} from './index'

const story = storiesOf('Input', module);

story.add('FilterButton', () => (
    <InputSearch placeholder={'Search'} />
));

