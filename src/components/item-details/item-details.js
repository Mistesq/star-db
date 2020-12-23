import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button/error-button';

import './item-details.scss';

export const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field]}</span>
    </li>
  );
};


export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({ item, image: getImageUrl(item) });
      });
  }

  render() {
    const { item, image } = this.state;

    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { name } = this.state.item;

    return (
      <div className="item-details card">
        <div className="item-image">
          <img 
            src={image}
            alt="character"/>
        </div>

        <div className="card-body">
          <h4>{name} {this.props.itemId}</h4>
          <ul className="list-group list-group-flush">
            { 
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item })
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}

