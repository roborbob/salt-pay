import React from 'react';
import styled from 'styled-components';
import Curve from '../assets/header.svg';
import Logo from '../assets/logo.svg';
import Button from '../components/button';
import {ParallaxProvider, Parallax} from 'react-scroll-parallax';

const HeaderWrapper = styled.section`
    padding: 0 28px 0 40px; 
    position: relative;
    height: 350px;
    background: linear-gradient(312.45deg, #e5f8f4 34.75%, #eefafd 70.82%);
    img{
        position: absolute;
        left: 0;
        top: 350px;
        width: 100%;
        z-index: -1;
    }
`

const Navigation = styled.div`
    top: 40px;
    max-width: 1080px;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img{
        position: relative;
        width: 200px;
        top: 0;
        z-index: 0;
    }
`

const TitleBlock = styled.div`
    position: relative;
    padding: 180px 0;
    width: 100%;
    margin: auto;
    z-index: 1000;
    h2{
        display: block;
        color: grey;
        line-height: 0;
        font-size: 40px;
        font-weight: 400;
        letter-spacing: 0.06em;
    }
    .big {
        font-size: 240px;
        line-height: 0;
        color:#002b3a;
        font-weight:500;
        letter-spacing: 0;
    }
`


const Header = () => {

    return (
        <ParallaxProvider>
            <HeaderWrapper>
                    <Navigation>
                        <img src={Logo} alt="SaltPay Logo"/>
                        <div>
                            <Button color="#002b3a" background="#fff" name="Login" margin="0 12px"/>
                            <Button background="#002b3a" color="#fff" name="Request"margin="0 12px"/>
                        </div>
                    </Navigation>
                    <Parallax y={[30, -30]}>
                        <TitleBlock>
                            <h2>It's time to feel</h2>
                            <h2 className="big">big</h2>
                        </TitleBlock>
                    </Parallax> 
                <img src={Curve} alt="screen-buffer"/>
            </HeaderWrapper>
        </ParallaxProvider>
    )
}

export default Header;