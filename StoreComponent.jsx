import React, { useState, useEffect } from "react";
import Store from '.';

const StoreComponent = (props) => {
    const [pokData, setPokData] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const pokemons = [];
            for (let i = 1; i <= 100; i++) {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const data = await response.json();
                pokemons.push({
                    id: `#${String(data.id).padStart(4, '0')}`,
                    name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                    types: data.types.map(typeInfo => typeInfo.type.name),
                    image: data.sprites.front_default,
                });
            }
            setPokData(pokemons);
            setFilteredPokemons(pokemons);
            console.log(pokemons);
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        const filtered = pokData.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPokemons(filtered);
    };

    const value = {
        pokData,
        filteredPokemons,
        searchTerm,
        setSearchTerm,
        setPokData,
        setFilteredPokemons,
        handleSearch,
    };

    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    );
};
export default StoreComponent