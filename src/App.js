import './App.css';
import Datos from './components/Datos';
import { useState } from 'react';


function App() {
  const [pokemon, setpokemon] = useState('')
  const [pokemonD, setPokemonD] = useState({ sprites: { front_default: null } })

  const onChangeFn = (event) => {
    setpokemon(event.target.value)
  }
  const onClickFn = () => {
    //setpokemon( {label: pokemon})
    console.log(pokemon, "https://pokeapi.co/api/v2/pokemon/" + pokemon)

    fetch ("https://pokeapi.co/api/v2/pokemon/" + pokemon)
      .then(response => response.json())
      .then(
        (pokemonData) => {
          console.log(pokemonData)
            setPokemonD(pokemonData)
        }
      )
  }
  return (
    <>
      <div className="App">
        <h1>Bienvenido a tu Pokedex</h1>
        
        <h2>Nombre del pokemon : {pokemonD.name}</h2>
        <input type="text" value={pokemon} onChange={onChangeFn} />
        <button type="button" className="btn btn-light" onClick={onClickFn}>Buscar</button>
<img src ={pokemonD.sprites.front_default}></img>
      </div>

    </>

  );
}

export default App;
