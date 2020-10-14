import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo-white.png';
import Curve from '../assets/footer.svg';

const FooterWrapper = styled.section`
    position: relative;
    max-width: 1080px;
    margin: auto;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
    color: white;
    .footer-nav {
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        width: 40%;
    }
    .contact {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: baseline;
        padding-left: 50px;
        width: 60%;
        .image-container{
            img{
                position: relative;
                top: 0;
                left: auto;
                width: 150px;
            }
        }
    }
`
const FooterContainer = styled.section`
    position: relative;
    width: 100%;
    background: #002B3A;
    padding: 100px 0;
    bottom: 0;
    img{
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 262px;
        z-index: 100;
    }
`



const  Footer = () => {
    return (
        <FooterContainer>
            <img src={Curve} alt="Curve"/>
            <FooterWrapper>
                <div className="footer-nav">
                    <h3>Home</h3>
                    <h3>About Us</h3>
                    <h3>Careers</h3>
                </div>
                <div className="contact">
                    <h3>help@saltpay.co</h3>
                    <h3>+354 560-1600</h3>
                    <div className="image-container">
                         <img src={Logo} alt="logo"/>
                    </div>
                </div>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;