import React from 'react';
import {View} from 'react-native';
import { hooksStyles } from '../../styles';
import {MobXFoam} from '../../components';
import { Provider } from 'mobx-react';
import store from '../../state/MobXStore';

const Mobx = () => {
  return (
    <Provider store={store}>
      <View style={hooksStyles.container}>
        <MobXFoam type={'mobx'} />
      </View>
    </Provider>
  );
};

export default Mobx;
