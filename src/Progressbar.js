import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import './Progressbar.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataRR } from './DataWins/DataRR';
import { DataKXIP } from './DataWins/DataKXIP';
import { DataMI } from './DataWins/DataMI';
import { DataCSK } from './DataWins/DataCSK';
import { DataSRH } from './DataWins/DataSRH';
import { DataKKR } from './DataWins/DataKKR';
import { DataRCB } from './DataWins/DataRCB';
import { DataDC } from './DataWins/DataDC';



export default function Progressbar() {
    return (
        <div className='Wrapper'>
            <h1 style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '40px', }}>% Win Stats</h1>
            <div style={{ margin: '30px', width: '60%', marginLeft: '20%', backgroundColor: '#004BA0', color: "White", padding: '1.5% 0.5% 1.5% 0.5%', borderRadius: '10px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.75)' }} >
                <h2 style={{ textAlign: 'center', fontWeight: "bolder" }}>Rajasthan Royals</h2>

                <Slider
                    slidesToShow={3}
                    autoplay={true} autoplaySpeed={3000} dots={true}>
                    {
                        DataRR.map(props => (
                            <div>
                                <CircularProgressbar
                                    props={props}
                                    value={props.percentage}
                                    text={`${props.percentage}%`}
                                    styles={{
                                        path: {

                                            stroke: `rgb(0, 255, 0, ${props.percentage / 100})`,

                                            transition: 'stroke-dashoffset 0.5s ease 0s',


                                        },
                                        trail: {

                                            stroke: '#d6d6d6',

                                            strokeLinecap: 'butt',

                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },

                                        text: {

                                            fill: '#f88',

                                            fontSize: '16px',
                                        },
                                    }

                                    } />
                                <h3 style={{ fontSize: '20px', textAlign: 'center', color: "white", fontWeight: 'bold', paddingTop: '4%' }}>{props.title}</h3>
                            </div>

                        ))
                    }
                </Slider>
            </div >

            {/* Repeating the same for Each of the teams; For punjab Kings */}


            <div style={{ margin: '30px', width: '60%', marginLeft: '20%', backgroundColor: '#ED1B24', color: "White", padding: '1.5% 0.5% 1.5% 0.5%', borderRadius: '10px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.75)' }}>
                <h2 style={{ textAlign: 'center' }}>Punjab Kings</h2>

                <Slider
                    slidesToShow={3}
                    autoplay={true} autoplaySpeed={3000} dots={true}>
                    {
                        DataKXIP.map(props => (
                            <div >
                                <CircularProgressbar
                                    props={props}
                                    value={props.percentage}
                                    text={`${props.percentage}%`}
                                    styles={{
                                        path: {

                                            stroke: `rgb(0, 255, 0, ${props.percentage / 100})`,

                                            transition: 'stroke-dashoffset 0.5s ease 0s',


                                        },
                                        trail: {

                                            stroke: '#d6d6d6',

                                            strokeLinecap: 'butt',

                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },

                                        text: {

                                            fill: '#4D4C7D',

                                            fontSize: '16px',
                                        },
                                    }

                                    } />
                                <h3 style={{ fontSize: '20px', textAlign: 'center', color: "white", fontWeight: 'bold', paddingTop: '4%' }}>{props.title}</h3>
                            </div>

                        ))
                    }
                </Slider>
            </div >

            {/* For MI */}

            <div style={{ margin: '30px', width: '60%', marginLeft: '20%', backgroundColor: '#004BA0', color: "White", padding: '1.5% 0.5% 1.5% 0.5%', borderRadius: '10px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.75)' }}>
                <h2 style={{ textAlign: 'center' }}>Mumbai Indians</h2>

                <Slider
                    slidesToShow={3}
                    autoplay={true} autoplaySpeed={3000} dots={true}>
                    {
                        DataMI.map(props => (
                            <div >
                                <CircularProgressbar
                                    props={props}
                                    value={props.percentage}
                                    text={`${props.percentage}%`}
                                    styles={{
                                        path: {

                                            stroke: `rgb(0, 255, 0, ${props.percentage / 100})`,

                                            transition: 'stroke-dashoffset 0.5s ease 0s',


                                        },
                                        trail: {

                                            stroke: '#d6d6d6',

                                            strokeLinecap: 'butt',

                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },

                                        text: {

                                            fill: '#f88',

                                            fontSize: '16px',
                                        },
                                    }} />
                                <h3 style={{ fontSize: '20px', textAlign: 'center', color: "white", fontWeight: 'bold', paddingTop: '4%' }}>{props.title}</h3>
                            </div>

                        ))
                    }
                </Slider>
            </div >

            {/* For CSK */}


            <div style={{ margin: '30px', width: '60%', marginLeft: '20%', backgroundColor: '#F9CD05', color: "White", padding: '1.5% 0.5% 1.5% 0.5%', borderRadius: '10px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.75)' }}>
                <h2 style={{ textAlign: 'center' }}>Chennai Super Kings</h2>

                <Slider
                    slidesToShow={3}
                    autoplay={true} autoplaySpeed={3000} dots={true}>
                    {
                        DataCSK.map(props => (
                            <div >
                                <CircularProgressbar
                                    props={props}
                                    value={props.percentage}
                                    text={`${props.percentage}%`}
                                    styles={{
                                        path: {

                                            stroke: `rgb(0, 255, 0, ${props.percentage / 100})`,



                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            // Rotate the path

                                        },
                                        trail: {

                                            stroke: '#d6d6d6',

                                            strokeLinecap: 'butt',

                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },

                                        text: {

                                            fill: '#f88',

                                            fontSize: '16px',
                                        },
                                    }

                                    } />
                                <h3 style={{ fontSize: '15px', textAlign: 'center' }}>{props.title}</h3>
                            </div>

                        ))
                    }
                </Slider>
            </div >

            {/* For SRH */}


            <div style={{ margin: '30px', width: '60%', marginLeft: '20%', backgroundColor: '#F7A721', color: "White", padding: '1.5% 0.5% 1.5% 0.5%', borderRadius: '10px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.75)' }}>
                <h2 style={{ textAlign: 'center' }}>Sunsrisers Hyderabad</h2>

                <Slider
                    slidesToShow={3}
                    autoplay={true} autoplaySpeed={3000} dots={true}>
                    {
                        DataSRH.map(props => (
                            <div >
                                <CircularProgressbar
                                    props={props}
                                    value={props.percentage}
                                    text={`${props.percentage}%`}
                                    styles={{
                                        path: {

                                            stroke: `rgb(0, 255, 0, ${props.percentage / 100})`,

                                            transition: 'stroke-dashoffset 0.5s ease 0s',


                                        },
                                        trail: {

                                            stroke: '#d6d6d6',

                                            strokeLinecap: 'butt',

                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },

                                        text: {

                                            fill: '#f88',

                                            fontSize: '16px',
                                        },
                                    }

                                    } />
                                <h3 style={{ fontSize: '20px', textAlign: 'center', color: "white", fontWeight: 'bold', paddingTop: '4%' }}>{props.title}</h3>
                            </div>

                        ))
                    }
                </Slider>
            </div >

            {/* For RCB */}

            <div style={{ margin: '30px', width: '60%', marginLeft: '20%', backgroundColor: '#EC1C24', color: "White", padding: '1.5% 0.5% 1.5% 0.5%', borderRadius: '10px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.75)' }}>
                <h2 style={{ textAlign: 'center' }}>Royal Challenegrs Bangalore</h2>

                <Slider
                    slidesToShow={3}
                    autoplay={true} autoplaySpeed={3000} dots={true}>
                    {
                        DataRCB.map(props => (
                            <div >
                                <CircularProgressbar
                                    props={props}
                                    value={props.percentage}
                                    text={`${props.percentage}%`}
                                    styles={{
                                        path: {

                                            stroke: `rgb(0, 255, 0, ${props.percentage / 100})`,

                                            transition: 'stroke-dashoffset 0.5s ease 0s',


                                        },
                                        trail: {

                                            stroke: '#d6d6d6',

                                            strokeLinecap: 'butt',

                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },

                                        text: {

                                            fill: '#4D4C7D',

                                            fontSize: '16px',
                                        },
                                    }

                                    } />
                                <h3 style={{ fontSize: '20px', textAlign: 'center', color: "white", fontWeight: 'bold', paddingTop: '4%' }}>{props.title}</h3>
                            </div>

                        ))
                    }
                </Slider>
            </div >

            {/* For KKR */}


            <div style={{ margin: '30px', width: '60%', marginLeft: '20%', backgroundColor: '#2E0854', color: "White", padding: '1.5% 0.5% 1.5% 0.5%', borderRadius: '10px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.75)' }}>
                <h2 style={{ textAlign: 'center' }}>Kolkata Knight Riders</h2>

                <Slider
                    slidesToShow={3}
                    autoplay={true} autoplaySpeed={3000} dots={true}>
                    {
                        DataKKR.map(props => (
                            <div >
                                <CircularProgressbar
                                    props={props}
                                    value={props.percentage}
                                    text={`${props.percentage}%`}
                                    styles={{
                                        path: {

                                            stroke: `rgb(0, 255, 0, ${props.percentage / 100})`,

                                            transition: 'stroke-dashoffset 0.5s ease 0s',


                                        },
                                        trail: {

                                            stroke: '#d6d6d6',

                                            strokeLinecap: 'butt',

                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },

                                        text: {

                                            fill: '#f88',

                                            fontSize: '16px',
                                        },
                                    }

                                    } />
                                <h3 style={{ fontSize: '20px', textAlign: 'center', color: "white", fontWeight: 'bold', paddingTop: '4%' }}>{props.title}</h3>
                            </div>

                        ))
                    }
                </Slider>
            </div >
            <div style={{ margin: '30px', width: '60%', marginLeft: '20%', backgroundColor: '#2561AE', color: "White", padding: '1.5% 0.5% 1.5% 0.5%', borderRadius: '10px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.75)' }}>
                <h2 style={{ textAlign: 'center' }}>Delhi Captials</h2>

                <Slider
                    slidesToShow={3}
                    autoplay={true} autoplaySpeed={3000} dots={true}>
                    {
                        DataDC.map(props => (
                            <div >
                                <CircularProgressbar
                                    props={props}
                                    value={props.percentage}
                                    text={`${props.percentage}%`}
                                    styles={{
                                        path: {

                                            stroke: `rgb(0, 255, 0, ${props.percentage / 100})`,



                                            transition: 'stroke-dashoffset 0.5s ease 0s',


                                        },
                                        trail: {

                                            stroke: '#d6d6d6',

                                            strokeLinecap: 'butt',

                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },

                                        text: {

                                            fill: '#f88',

                                            fontSize: '16px',
                                        },
                                    }

                                    } />
                                <h3 style={{ fontSize: '20px', textAlign: 'center', color: "white", fontWeight: 'bold', paddingTop: '4%' }}>{props.title}</h3>
                            </div>

                        ))
                    }
                </Slider>
            </div >
        </div >
    )
}

