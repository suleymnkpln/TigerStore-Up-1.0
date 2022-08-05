import React from 'react';
import {FlatList, Linking} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import DetailCard from '../../components/Card/DetailCard';

const Detail = ({route}) => {
  const {idMeal} = route.params;

  const {data, loading, error} = useFetch(`${Config.API_DETAIL}${idMeal}`);

  const renderDetail = ({item}) => (
    <DetailCard
      detail={item}
      onSelect={() => Linking.openURL(item.strYoutube)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return <FlatList data={data.meals} renderItem={renderDetail} />;
};

export default Detail;
