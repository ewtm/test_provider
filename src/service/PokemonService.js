import axios from 'axios';

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon";



class PokemonService {

    getPokemon(){
        console.log(ENDPOINT)
        return axios.get(ENDPOINT);
    }

    searchPokemon(idPokemon){
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
    }

    searchAbility(ability){
        return axios.get(`https://pokeapi.co/api/v2/ability/${ability}`);
    }

    


}

export default new PokemonService()