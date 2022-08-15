import React from 'react';
import {Text, View} from 'react-native';
import {Menu, SaveButton, ResetButton, MetricFoam, ImperialUnitsForm} from '.';
import {styles} from '../styles';
import {inject, observer} from 'mobx-react';

const MobXFoam = props => {
  const {type, store} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.titles}>Unit converter (with {type})</Text>
      {store.menu === 'imperial' ? (
        <ImperialUnitsForm
          lbs={store.lbs}
          changeLbs={store.changeLbs}
          ft={store.ft}
          changeFt={store.changeFt}
          ins={store.ins}
          changeIn={store.changeIn}
        />
      ) : (
        <MetricFoam
          kg={store.kg}
          changeKg={store.changeKg}
          mm={store.mm}
          changeM={store.changeM}
        />
      )}
      <Menu onPress={store.setMenu} active={store.menu} />
      <SaveButton
        onPress={store.saveDataToDisk}
        containerStyle={styles.button}
      />
      <ResetButton onPress={store.resetPress} />
    </View>
  );
};

export default inject('store')(observer(MobXFoam));
