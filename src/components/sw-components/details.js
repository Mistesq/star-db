import React from 'react';
import ItemDetails, { Record } from './../item-details/item-details';
import SwapiService from './../../services/swapi-service';
import { SwapiServiceConsumer } from '../swapi-service-context';

const swapiService = new SwapiService();

const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getPersonImage }) => {
                    return (
                        <ItemDetails 
                            itemId={itemId} 
                            getData={getPerson}
                            getImageUrl={getPersonImage}>
                            
                            <Record field="gender" label="Gender" />
                            <Record field="eyeColor" label="Eye Color" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({ itemId })  => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPlanet, getPlanetImage }) => {
                    return (
                        <ItemDetails 
                            itemId={itemId} 
                            getData={getPlanet}
                            getImageUrl={getPlanetImage}>
                            
                            <Record field="population" label="Population" />
                            <Record field="rotaionPeriod" label="Rotaion Period" />
                            <Record field="diameter" label="Diameter" />
                        </ItemDetails>
                    );
                }
            }

        </SwapiServiceConsumer>
    );
};

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getStarship, getStarshipImage }) => {
                    return (
                        <ItemDetails
                            itemId={itemId} 
                            getData={getStarship}
                            getImageUrl={getStarshipImage}>
                
                            <Record field="model" label="model" />
                            <Record field="length" label="Lenght" />
                            <Record field="costInCredits" label="Cost" />
                        </ItemDetails>
                    );
                }
            }

        </SwapiServiceConsumer>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}