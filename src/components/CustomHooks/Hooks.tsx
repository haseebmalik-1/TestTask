import React from 'react';
import {View} from 'react-native';
import {hooksStyles} from '../../styles/index'
import { ConverterContextProvider } from '../../state/context/ConverterContextProvider';
import HooksForm from '../HooksForm';

const Hooks = () => {
  return (
    <ConverterContextProvider>
      <View style={hooksStyles.container}>
        <HooksForm type={'hooks'} />
      </View>
    </ConverterContextProvider>
  );
};

export default Hooks;
