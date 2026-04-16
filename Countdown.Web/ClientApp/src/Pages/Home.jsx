import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Countdown from '../components/Countdown';
import EstherandChosson from '../components/Image/Image';

const Home = () => {
    return (
        <>
        <div className='image'>
            {/* <img src="Images/SAL_057.jpg" className="picture"></img> */}
            <div className="app-container ">

                <div className="d-flex flex-column justify-content-center align-items-center child">
                    <Countdown />
                </div>

            </div>
            </div>
        </>
    );
};

export default Home;