import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = ({navigation}) => {
  const user = useSelector(s => s.user);
  const {loading, data, error} = useFetch(Config.API_PRODUCT_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    //SPİNNER CAGIRDIK
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 15}}>
        Hello: {user.name.firstname}
      </Text>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;
