import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';

const CTAWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 40px 0;
    margin: 350px auto 150px;
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


const CTA_2 = () => {
    return (
        <CTAWrapper>
            <h4>A short onboarding for a long lasting relationship.</h4>
            <p>Our agent will visit you, onboard you and activate your POS. Everything in under 10 minutes.</p>
            <Button color="white" background="#00b2ca" name="Request now" margin="auto"/>
        </CTAWrapper>
    )
}

export default CTA_2;