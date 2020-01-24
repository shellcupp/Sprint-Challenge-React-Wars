import React from 'react';

const CharacterCard = (props) => {
    const {name, birth, height, hair, eyes} = props;

    return (
        <div>
            <h2>{name}</h2>
            <p>Born: {birth}</p>
            <p>Height: {height}</p>
            <p>Hair Color: {hair}</p>
            <p>Eye Color: {eyes}</p>
        </div>
    )
}

export default CharacterCard;