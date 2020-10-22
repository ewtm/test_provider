import React, { Component } from 'react';
import PokemonService from '../service/PokemonService';

class ListPokemon extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',
            pokemons: []
        }
    }

    componentDidMount(){
        PokemonService.getPokemon().then((res) => {
            console.log(res.data.results)
            this.setState({ pokemons: res.data.results })
           
        })
    }

   

    render() {
        return (
            <div>

                <h2 className="text-center"> Nome ou numero </h2>


                


                
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Url</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {
                                this.state.pokemons.map(
                                    pokemon => 
                                    <tr >
                                        <td>{pokemon.name}</td>
                                        <td>{pokemon.url}</td>

                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListPokemon;