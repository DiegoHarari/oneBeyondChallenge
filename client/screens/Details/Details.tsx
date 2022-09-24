import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {ActivityIndicator} from 'react-native-paper';
// import {useAPI} from '../../context/apiContext';

interface Iprops {
  data?: string;
  phoneData?: any;
  isLoading?: boolean;
}

export const Details: React.FC<Iprops> = () => {
  //   const {data, isLoading} = useAPI();
  //   const phonesData = data?.data;
  //   const [phones, setPhones] = useState<string[]>();
  //   useEffect(() => setPhones(phonesData), [phonesData]);

  //   if (isLoading) {
  //     return (
  //       <View style={styles.loadingIndicator}>
  //         <ActivityIndicator size="large" color="#0000ff" />
  //       </View>
  //     );
  //   }

  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};
