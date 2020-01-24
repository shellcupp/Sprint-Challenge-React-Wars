import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
width: 100%;
display: flex;

align-items: center;
`;
const Firstdiv = styled.div`
width:45%;
`;
const Seconddiv = styled.div`
width:45%;
`;

const CharacterCard = (props) => {
    const {name, birth, height, hair, eyes} = props;

    return (
        <WrapperDiv>
        <Firstdiv>
            <h2>{name}</h2>
        </Firstdiv>
        <Seconddiv>
            <p>Born: {birth}</p>
            <p>Height: {height}</p>
            <p>Hair Color: {hair}</p>
            <p>Eye Color: {eyes}</p>
        </Seconddiv>
        </WrapperDiv>
    )
}

export default CharacterCard;