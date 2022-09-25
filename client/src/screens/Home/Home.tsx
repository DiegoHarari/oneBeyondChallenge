import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useAPI} from '../../context/apiContext';
import {CardList} from '../../components/CardList/CardList';

import {styles} from '../styles';

interface Iprops {
  data?: string;
  phoneData?: any;
  isLoading?: boolean;
}

export const Home: React.FC<Iprops> = () => {
  const {data, isLoading} = useAPI();
  const phonesData = data?.data;
  const [phones, setPhones] = useState<string[]>();
  useEffect(() => setPhones(phonesData), [phonesData]);

  if (isLoading) {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={phones}
        renderItem={({item}) => <CardList phones={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
