import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const properties = {
    houses: [
        { id: 1, img: '/images/Drop1.png', title: '2 BHK FLAT', price: '₹1.70 Cr', area: '1568 sqft', location: 'Banjara Hills, Hyderabad' },
        { id: 2, img: '/images/drop2.png', title: '3 BHK FLAT', price: '₹1.60 Cr', area: '1328 sqft', location: 'Jubilee Hills, Hyderabad' },
        { id: 3, img: '/images/drop3.png', title: '3 BHK HOUSE', price: '₹2.50 Cr', area: '2500 sqft', location: 'Shamshabad, Hyderabad' },
        { id: 4, img: '/images/drop12.png', title: '3 BHK VILLA', price: '₹3.00 Cr', area: '2740 sqft', location: 'Kengeri, Bangalore' },
        { id: 5, img: '/images/drop3.png', title: '4 BHK FLAT', price: '₹2.00 Cr', area: '1234 sqft', location: 'Mumbai' },
    ],
    apartments: [
        { id: 1, img: '/images/drop4.png', title: '2 BHK & 3 BHK FLAT', price: '₹1.70 Cr', area: '2390 sqft', location: 'Banjara Hills, Hyderabad' },
        { id: 2, img: '/images/drop5.png', title: '2 BHK & 3 BHK FLAT', price: '₹1.20 Cr', area: '1230 sqft', location: 'Kazipet, Warangal' },
        { id: 3, img: '/images/drop6.png', title: '3 BHK & 4 BHK FLAT', price: '₹2.00 Cr', area: '2390 sqft', location: 'Mumbai' },
    ],
    lands: [
        { id: 1, img: '/images/drop7.png', title: 'LAND', price: '₹1.1 Cr', area: '1280 yards', location: 'Hasanparthy, Warangal' },
        { id: 2, img: '/images/drop8.png', title: 'LAND', price: '₹1.00 Cr', area: '2380 yards', location: 'Kazipet, Warangal' },
        { id: 3, img: '/images/drop9.png', title: 'LAND', price: '₹1.50 Cr', area: '1140 yards', location: 'Manmoor, Warangal' },
    ],
    villas: [
        { id: 1, img: '/images/drop10.png', title: '6 BHK VILLA', price: '₹2.00 Cr', area: '1988 sqft', location: 'Jubilee Hills, Hyderabad' },
        { id: 2, img: '/images/drop11.png', title: '5 BHK VILLA', price: '₹2.50 Cr', area: '1980 sqft', location: 'Banjara Hills, Hyderabad' },
        { id: 3, img: '/images/drop12.png', title: '4 BHK VILLA', price: '₹2.74 Cr', area: '1760 sqft', location: 'Delhi' },
    ]
};

const PropertyCarousel = ({ title, properties, category }) => {
    const navigate = useNavigate();

    const handleViewMore = (property) => {
        navigate(`/${category}/${property.id}`);
    };

    const propertyPairs = [];
    for (let i = 0; i < properties.length; i += 2) {
        propertyPairs.push(properties.slice(i, i + 2));
    }

    return (
        <div className="container my-4">
            <h3>{title}</h3>
            <Carousel indicators={false} controls={true}>
                {propertyPairs.map((pair, index) => (
                    <Carousel.Item key={index}>
                        <div className="row justify-content-center">
                            {pair.map((property, i) => (
                                <div key={i} className="col-md-5 mx-2">
                                    <div className="card text-center">
                                        <img src={property.img} className="card-img-top" alt={property.title} style={{ height: "200px" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{property.title}</h5>
                                            <p>{property.price} | {property.area}</p>
                                            <p>{property.location}</p>
                                            <button 
                                                onClick={() => handleViewMore(property)} 
                                                className="btn btn-danger"
                                            >
                                                View More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

const Drop = () => {
    const { category } = useParams();
    const categoryKey = category.toLowerCase() + "s";
    const filteredProperties = properties[categoryKey] || [];

    return (
        <div className="container">
            <PropertyCarousel 
                title={category.toUpperCase()} 
                properties={filteredProperties} 
                category={category}
            />
        </div>
    );
};

export default Drop;
