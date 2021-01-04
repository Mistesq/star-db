import React from 'react';

const { 
    Provider: SwapiServiceProdiver,
    Consumer: SwapiServiceConsumer
} = React.createContext();

export {
    SwapiServiceProdiver,
    SwapiServiceConsumer
};