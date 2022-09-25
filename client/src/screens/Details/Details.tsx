import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {DetailsList} from '../../components/DetailsList/DetailsList';

import {styles} from '../styles';

interface Iprops {
  data?: string;
  phoneData?: any;
  isLoading?: boolean;
  route: any;
}

export const Details: React.FC<Iprops> = ({route}) => {
  const {id, phone} = route.params;

  if (!id) {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      <DetailsList phones={phone} />
    </View>
  );
};
