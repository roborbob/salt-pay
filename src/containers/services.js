import React from 'react';
import styled from 'styled-components';
import POS from '../assets/highlights-pos.png';
import Customer from '../assets/highlights-customer-service.png';
import CRM from '../assets/highlights-loyalty.png';


const ServicesWrapper = styled.section`
    top: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    .inner-wrapper {
        max-width: 1080px;
        margin: auto;
        p {
            max-width: 800px;
            margin: 35px auto 50px;
            font-size: 25px;
            font-weight: 300;
            line-height: 1.8;
        }
    }
`

const ServiceBlocks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Blocks = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    img {
        width: 100%;
    }
    p {
        font-size: 20px !important;
        flont-weight: 400;
        line-height: 1.5 !important;
    }
`

const Services = () => {
    return (
        <ServicesWrapper>
            <div className="inner-wrapper">
            <h4>Sell. Engage. Grow.</h4>
            <p>Top quality and affordable tools that help you run your business with the efficiency of the big players.</p>
            <ServiceBlocks>
                <Blocks>
                    <img src={POS} alt="Phone Screen"/>
                    <p>An easy-to-use, modern, robust and fast POS.</p>
                </Blocks>
                <Blocks>
                    <img src={Customer} alt="Woman using phone"/>
                    <p>Amazingly fast and reliable customer service.</p>
                </Blocks>
                <Blocks>
                    <img src={CRM} alt="Customers in shop"/>
                    <p>CRM and Loyalty to keep your clients coming back.</p>
                </Blocks>
            </ServiceBlocks>
            </div>
        </ServicesWrapper>
    )
}

export default Services;