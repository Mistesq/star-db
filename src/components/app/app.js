import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from './../error-button/error-button';
import ErrorIndicator from './../error-indicator/error-indicator';
import SwapiService from './../../services/swapi-service';
import ErrorBoundry from './../error-boundry/index';
import ItemDetails, { Record } from '../item-details/item-details';
import ItemList from './../item-list/item-list';
import Row from './../Row/row';
import { SwapiServiceProdiver } from '../swapi-service-context/swapi-service-context';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from './../sw-components';

import './app.scss';

class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

      const { getPerson, getStarship, getPersonImage, getAllPlanets, getAllPeople, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails 
        itemId={11} 
        getData={getPerson}
        getImageUrl={getPersonImage}>
          
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5} 
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field="model" label="model" />
        <Record field="length" label="Lenght" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );


    return (
      <ErrorBoundry>
        <SwapiServiceProdiver value={this.swapiService} >
          <div className="stardb-app">
            <Header />

            <PersonDetails itemId={11} />
            <PlanetDetails itemId={13} />
            <StarshipDetails itemId={12} />

            <PersonList />
            <PlanetList />
            <StarshipList />
                      
          </div>
        </SwapiServiceProdiver>
      </ErrorBoundry>
    );
  }
}

export default App;
