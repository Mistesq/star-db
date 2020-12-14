import React, { Component } from 'react';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from './../../services/swapi-service';
import Row from './../Row/row';
import ErrorBoundry from './../error-boundry/error-boundry';

import './people-page.scss';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 4,
    hasError: false
  };

  componentDidCatch(error, info) {

    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = ( 
      <ItemList 
        onItemSelected={this.onPersonSelected} 
        getData={this.swapiService.getAllPeople} 
      >
        {(i) => (
          `${i.name}  (${i.birthYear})`
        )}
      </ItemList>);

      const personDetails = (
        <ErrorBoundry>
          <PersonDetails personId={this.state.selectedPerson} />
        </ErrorBoundry>
      );

    return (
        <Row left={itemList} right={personDetails} />
    );
  }
}
