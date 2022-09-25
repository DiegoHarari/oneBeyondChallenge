import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View} from 'react-native';
import {Button} from '../Button';

import {mockImages} from '../../mock/mockImages';

import styles from './styles';

import {Routes} from '../../navigation/routes/routes';

export const CardList = ({phones}) => {
  const navigation = useNavigation();
  const {name, manufacturer, color, price, id} = phones;

  return (
    <View style={styles.container}>
      <Image source={mockImages[phones.id]} style={styles.imageStyle} />
      <View style={styles.textContainer}>
        <Text style={styles.innerText}>Phone: {name}</Text>
        <Text style={styles.innerText}>Brand: {manufacturer}</Text>
        <Text style={styles.innerText}>Color: {color}</Text>
        <Text style={styles.innerText}>Price: {price}</Text>
        <Button
          buttonText="More Details"
          onPress={() =>
            navigation.navigate(
              Routes.details as never,
              {id, phone: phones} as never,
            )
          }
        />
      </View>
    </View>
  );
};
