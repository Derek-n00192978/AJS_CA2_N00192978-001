import axios from 'axios';
import { useState, useEffect } from 'react';

import CarCard from '../../components/CarCard';

const Index = (props) => {
    const [ cars, setCars ] = useState(null);
    
    useEffect(() => {
        axios.get('http://localhost:3001/api/cars')
             .then((response) =>{
                console.log(response.data);
                setCars(response.data)
             })
             .catch((err) => {
                console.error(err);
             })
        console.log("mounted");     
    }, []);
    if(!cars) return 'Loading...';

    const carsList =cars.map((car) => {
        return <CarCard car={car} authenticated={props.authenticated} />;
    })
    return (
        <>
        <h2>Cars</h2>
        { carsList}
        </>
    );
   
};

export default Index;