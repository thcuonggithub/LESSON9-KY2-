import { useContext, useState } from 'react'
import Store from './store'
import './App.css'
import Card from './components/Card';
import Modal from './components/Modal';
import SearchBar from './components/SearchBar';

function App() {
  const store = useContext(Store);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const handleSave = (updatedPokemon) => {
    const updatedPokData = store.pokData.map(pokemon =>
      pokemon.id === updatedPokemon.id ? updatedPokemon : pokemon
    );
    store.setPokData(updatedPokData);
    store.setFilteredPokemons(updatedPokData);
    setCurrentPokemon(null);
  };

  return (
    <div className="app">
      <SearchBar searchTerm={store.searchTerm} onSearch={(term) => { store.setSearchTerm(term); store.handleSearch(); }} />
      <div className="card_wrapper">
        {store.filteredPokemons.map(pokemon => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            img={pokemon.image}
            onClick={() => setCurrentPokemon(pokemon)}
          />
        ))}
      </div>
      {currentPokemon && (
        <Modal
          pokemon={currentPokemon}
          onClose={() => setCurrentPokemon(null)}
          onChangePokemon={setCurrentPokemon}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
export default App

