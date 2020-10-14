import React from 'react';
import styled from 'styled-components';
import Phones from '../assets/pos-photos.png';
import {IconContext} from 'react-icons';
import { MdWifi,MdBatteryChargingFull, MdSimCard, MdStayPrimaryPortrait, MdCameraAlt} from "react-icons/md";
import {FcNfcSign} from "react-icons/fc";
import { FiPrinter } from "react-icons/fi";



const SpecWrapper = styled.section`
    position: relative;
    width: 100%;
`

const ColumnContainer = styled.div`
    max-width: 1080px;
    margin: auto;
    display: flex;
    flex-direction: row;
    text-align: left;
    .spec-list{
        width: 50%;
        h4{
            margin: 0 0 40px;
        }
        ul{
            padding: 0;
            list-style: none;
            li{
                line-height: 3.5;
                letter-spacing: 0.02em;
                p {
                    display: inline-block;
                    padding-left: 20px;
                    margin: 0;
                }
            }
        }
    }
    .image-container{
        width: 50%;
        img{
            width: 100%;
        }
    }
`



const Specs = () => {
    return (
        <SpecWrapper>
            <IconContext.Provider value={{ size: "1.5em"}}>
            <ColumnContainer>
                <div className="spec-list">
                  <h4>POS specs that matter for your day-to-day</h4> 
                  <ul>
                      <li><MdWifi/><p>4G/3G/2G, Wi-Fi, Bluetooth and cable</p></li>
                      <li><MdBatteryChargingFull/><p>Long-lasting battery (5250mAh)</p></li>
                      <li><MdSimCard/><p>SIM card already included</p></li>
                      <li><FcNfcSign/><p>contactless payments</p></li>
                      <li><FiPrinter/><p>High-speed thermal printer</p></li>
                      <li><MdStayPrimaryPortrait/><p>5” High Definition display</p></li>
                      <li><MdCameraAlt/><p>5MP auto zoom camera for code scanning</p></li>
                  </ul>
                </div>
                <div className="image-container">
                  <img src={Phones} alt="Customers holding phones"/>  
                </div>
            </ColumnContainer>
            </IconContext.Provider>
        </SpecWrapper>
    )
}

export default Specs;