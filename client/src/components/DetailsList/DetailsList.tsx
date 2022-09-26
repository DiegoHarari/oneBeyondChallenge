import React from 'react';
import {View} from 'react-native';

import {DataTable} from 'react-native-paper';

export const DetailsList = ({phones}) => {
  const {
    color,
    description,
    manufacturer,
    name,
    price,
    screen,
    processor,
    ram,
  } = phones;
  return (
    <View style={{borderWidth: 0.5, borderColor: 'gray'}}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Details</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>Brand</DataTable.Cell>
          <DataTable.Cell>{manufacturer}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Color</DataTable.Cell>
          <DataTable.Cell>{color}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Description</DataTable.Cell>
          <DataTable.Cell>{description}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Name</DataTable.Cell>
          <DataTable.Cell>{name}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Price</DataTable.Cell>
          <DataTable.Cell>{price}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Processor</DataTable.Cell>
          <DataTable.Cell>{processor}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Ram</DataTable.Cell>
          <DataTable.Cell>{ram}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Screen</DataTable.Cell>
          <DataTable.Cell>{screen}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};
