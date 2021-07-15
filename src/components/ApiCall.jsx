import React, { useState } from 'react';
import axios from 'axios';

const ApiCall = props => {
  const [pokemonState, setPokemonState] = useState(null);

  function fetchData() {
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=840&offset=0')
            .then(res => {
              console.log(res)
              setPokemonState(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
  } 
  return(
    <div>
      <button onClick = {fetchData}>SHOW THE POKÉMON</button>
      {
      pokemonState ?
      pokemonState.map(poke => {
        return <h3>{poke.name}</h3>
      })
      : ""
      }
    </div>
  );

}
export default ApiCall;