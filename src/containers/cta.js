import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';

const CTAWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 40px 0;
    margin: 150px auto 350px;
    h4 {
        margin: 0;
    }
    p {
        font-size: 20px;
        letter-spacing: 0.02em;
        margin: 35px;
        font-weight: 300;
    }
    button {
        margin-top: 30px;
    }
`


const CTA = () => {
    return (
        <CTAWrapper>
            <h4>Questions?</h4>
            <p>No problem. We will reach out to you and explain everything you want to know :)</p>
            <Button color="white" background="#00b2ca" name="Get Contacted" margin="auto"/>
        </CTAWrapper>
    )
}

export default CTA;