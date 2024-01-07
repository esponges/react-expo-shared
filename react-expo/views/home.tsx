// home view

import { useState } from 'react';
import { useGetPokemonByNameQuery } from '../store/rtk-redux/pokemon-service';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { gql, useQuery } from '@apollo/client';

export const Home = () => {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  const { data: apolloData, error: apolloError, loading: apolloLoading } = useQuery(gql`
  query UserStats {
    userStats {
      connections
      shares
      prayers
    }
  }
`);

  return (
    <View>
      {isLoading ? <Text>Loading...</Text> : null}
      {error ? <Text>Oops</Text> : null}
      {data && (
        <View>
          <Text>Pokemon name: {data.name}</Text>
          <Text>Pokemon height: {data.height}</Text>
          <Text>Pokemon weight: {data.weight}</Text>
          <Image
            source={{
              uri: data.sprites.front_default,
            }}
          />
        </View>
      )}
      {apolloLoading ? <Text>Apollo Loading...</Text> : null}
      {apolloError ? <Text>Apollo Oops. Error:{apolloError.message}</Text> : null}
      <Text>Connections: {apolloData?.userStats.connections}</Text>
      <Text>Shares: {apolloData?.userStats.shares}</Text>
      <Text>Prayers: {apolloData?.userStats.prayers}</Text>
    </View>
  );
};
