import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Card from '../Card/Card';
import './Carousel.css'
import { Data } from '../Data';


const Carousel = () => {
    return (
        <div style={{ margin: '30px', borderRadius: '10px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.75)' }}>
            <h1 style={{ paddingBottom: '5%', fontSize: '40px', fontWeight: 'bolder', backgroundColor: '#00237D', color: '#FBCAFF', borderRadius: '10px', paddingLeft: '3%', paddingTop: '4%', }}>IPLVerse: <br />Your IPL101 WebApp</h1>
            <Slider
                slidesToShow={3}
                autoplay={true} autoplaySpeed={3000}
                style={{
                    paddingBottom: '4%',
                    paddingTop: '5%'
                }}>
                {
                    Data.map(props => (
                        <div>
                            <Card props={props} />
                        </div>

                    ))
                }






            </Slider>
        </div>
    )
}


const Card = ({ props }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <img
                className="multi__image"
                src={props.img}
                alt=""
                style={{
                    width: "100%",
                    height: "170px",
                    objectFit: "contain",
                    marginBottom: "10px",
                }}
            />
            <p style={{ fontSize: "18px", padding: "5px 0", textAlign: "center", fontWeight: "bolder" }}>{props.title}</p>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Editions Won: {props.wins}</p>

        </div>
    );
};

export default Carousel
