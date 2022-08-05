import {FlatList} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CategoriesCard from '../../components/Card/CategoriesCard';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.API_CATEGORIES);

  const renderCategories = ({item}) => (
    <CategoriesCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  const handleCategorySelect = strCategory => {
    navigation.navigate('MealsPage', {strCategory});
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data.categories} renderItem={renderCategories} />;
};

export default Categories;
