// home view

import { useState } from 'react';
import { useGetPokemonByNameQuery } from '../rtk-redux/pokemon-service';
import { View, Text, TextInput, Button, Image } from 'react-native';

export const Home = () => {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

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
    </View>
  );
};
