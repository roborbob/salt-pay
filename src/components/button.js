import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    padding: 15px 20px;
    border-radius: 6px;
    width: fit-content;
    font-size: 16px;
    margin:${props => props.margin};
    text-align: center;
    outline: none; 
    border: none;
    color:${props => props.color};
    background: ${props => props.background};
`
const Button = (props) => {
    
    return (
        <ButtonStyle color={props.color} background={props.background} margin={props.margin}>
            {props.name}
        </ButtonStyle>
    )
}

export default Button;