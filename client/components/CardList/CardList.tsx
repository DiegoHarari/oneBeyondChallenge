import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View} from 'react-native';
import {Button} from '../Button';

import {mockImages} from '../../mock/mockImages';

import styles from './styles';

import {Routes} from '../../navigation/routes/routes';

export const CardList = ({phones}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={mockImages[phones.id]} style={styles.imageStyle} />
      <View style={styles.textContainer}>
        <Text style={styles.innerText}>Phone: {phones.name}</Text>
        <Text style={styles.innerText}>Brand: {phones.manufacturer}</Text>
        <Text style={styles.innerText}>Color: {phones.color}</Text>
        <Text style={styles.innerText}>Price: {phones.price}</Text>
        <Button
          buttonText="More Details"
          onPress={() => navigation.navigate(Routes.details, {})}
        />
      </View>
    </View>
  );
};
