import PokemonCard from '../components/PokemonCard';
import PokemonSearchInput from '../components/PokemonSearchInput';
import { useState } from 'react';

function SearchPokemon({pokemons}) {
  const [activePokemon, setActivePokemon] = useState(null);

  return (
    <section className="search">
        <h2 className="search__title">Search Pokemon</h2>
        <PokemonSearchInput 
          pokemons={pokemons}
          setActivePokemon={setActivePokemon} 
        />
        <section className="search__list">
          {
            activePokemon
            ? <PokemonCard pokemon={activePokemon} />
            : <p>Ingen pokemon hittad ännu...</p>
          }    
        </section>
    </section>
  )
}

export default SearchPokemon;