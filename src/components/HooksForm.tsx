import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  Menu,
  SaveButton,
  ResetButton,
  MetricFoam,
  ImperialUnitsForm,
} from '.';
import {styles} from '../styles';
import {ConverterContext} from '../state/context/ConverterContextProvider';

const HooksForm = props => {
  const {type} = props;
  const contextVals = useContext(ConverterContext);

  return (
    <View style={styles.container}>
      <Text style={styles.titles}>Unit converter (with {type})</Text>
      {contextVals.menu === 'imperial' ? (
        <ImperialUnitsForm
          lbs={contextVals.lbs}
          changeLbs={contextVals.changeLbs}
          ft={contextVals.ft}
          changeFt={contextVals.changeFt}
          ins={contextVals.ins}
          changeIn={contextVals.changeIn}
        />
      ) : (
        <MetricFoam
          kg={contextVals.kg}
          changeKg={contextVals.changeKg}
          mm={contextVals.mm}
          changeM={contextVals.changeM}
        />
      )}
      <Menu onPress={contextVals.setMenu} active={contextVals.menu} />
      <SaveButton
        onPress={contextVals.saveDataToDisk}
        containerStyle={styles.button}
      />
      <ResetButton onPress={contextVals.resetPress} />
    </View>
  );
};

export default HooksForm;
