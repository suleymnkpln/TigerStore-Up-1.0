import {FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import MealCard from '../../components/Card/MealCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;

  const {data, error, loading} = useFetch(`${Config.API_MEALS}${strCategory}`);

  const renderMeals = ({item}) => (
    <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />
  );

  const handleMealSelect = idMeal => {
    navigation.navigate('DetailsPage', {idMeal});
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data.meals} renderItem={renderMeals} />;
};

export default Meals;
