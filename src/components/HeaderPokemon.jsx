import React, { Component } from 'react';

import Pokebola from '../imgs/pokedex.jpg';

import Pokedex from '../imgs/pokebola.svg';

class HeaderPokemon extends Component {
    render() {
        return (
            <nav class="navbar navbar-inverse bg-inverse">
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">
                            <img class="App-logo" src={Pokedex}
                            alt="logo" title="Pokedex"/>
                        </a>
                    </div>
                 
                </div>                 
            </nav>
        );
    }
}

export default HeaderPokemon;