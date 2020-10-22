import React, { Component } from 'react';
import axios from 'axios';
import PokemonService from '../service/PokemonService';

class SearchPokemon extends Component {

    constructor(props){
        super(props);

        this.state = {
            query: '',
            id: '',
            nome: '',
            peso:'',
            altura:'',
            option: '',
            abilitys:[]
        }

        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(event) {
        console.log(event.target.value)
        this.setState({ option : event.target.value})
        
    }

    handleOnInputChange = (event) =>{
        const query = event.target.value;
        
        console.log("dentro :" +this.state.option)
        
        this.setState({ query },() => {
            this.searchResults(query);
        });
        
    }

    searchResults = (option) =>{

        if(this.state.option == "1"){
    
            PokemonService.searchPokemon(option)           
                    .then( res => {
                        this.setState({
                            nome : res.data.name,
                            id : res.data.id,
                            peso : res.data.weight,
                            altura: res.data.height,
                        })
                    })
        }else if (this.state.option == "2"){
            PokemonService.searchAbility(option)
                .then(res => {
                    this.setState({
                        abilitys : res.data.pokemon
                    })
                    console.log(res.data.pokemon[0].pokemon.name);
                })
        }
    }

    renderSearchResult = () => {

        if ( this.state.nome){

        return (
            <div class="col-md-12">
                    <div class="card col-md-12">

                        <div class="card-body">
                                <div class="card-body">
                                 
                                    <h5 class="card-title">
                                        {this.state.nome}
                                    </h5>
                            
                                </div>
                                <ul class="list-group ">
                                    <li class="list-group-item">
                                        Id: {this.state.id}
                                    </li>
                                    <li class="list-group-item">
                                        Peso: {this.state.peso}
                                    </li>
                                    <li class="list-group-item">
                                        Altura: {this.state.altura}
                                    </li>

                                </ul>
                        </div>

                    </div>
            </div>
        )
        }
    }


    renderSearchResultAbility = () => {

        if (this.state.ability){

        return (
            <div class="col-md-12">
                    <div class="card col-md-12">

                        <div class="card-body">
                        <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nome</th>
                               
                            </tr>
                            
                        </thead>
                        <tbody>
                            {
                                this.state.abilitys.map(
                                    pokemon => 
                                    <tr >
                                        <td>{pokemon}</td>
                                        

                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
                        </div>

                    </div>
            </div>
        )
        }
    }


    renderAlert = () => {

        if ( this.state.nome){
        return(
            <div>
                <div class="alert alert-success" role="alert">
                    Sua pesquisa retornou o pokemon {this.state.nome}  

                </div>
            </div>
        )
        }
    }


    render() {
        const { query } = this.state;

        return (

            <div class="container">
                
                <header class="page-header">
                        <h2>
                            Busca

                            <small>  Pokemons</small>
                        </h2>
                </header>
                

                {this.renderAlert()}
           

                <div class="col-xs-12 col-sm-9 col-md-12">

                

                    <div class="search-mode" onChange={this.onChangeValue}>
                        <div class="radio-inline">
                            <label>
                                <input type="radio" value="1" name="selectOption"/>
                                Nome ou número
                            </label>
                   
                        </div>

                        <div class="radio-inline">
                            <label>
                                <input type="radio" value="2" name="selectOption"/>
                                Habilidade
                            </label>
                        </div>

                    </div>

                    <div class="search-box">
                            <input 
                                class="form-control"
                                type="text"
                                name= "query"
                                value={ query }
                                id="search-input"
                                placeholder="..::Search by pokemon::.."
                                onChange={this.handleOnInputChange}
                            />
                            <button class="btn btn-primary"
                                onClick={this.handleSubmit}>
                                Procurar
                            </button>             
                    </div>

                    <br/>

                    {this.renderSearchResult()}
                    {this.renderSearchResultAbility()}
                    

                </div>

            </div>
        );
    }
}

export default SearchPokemon;