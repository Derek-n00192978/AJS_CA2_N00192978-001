import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import CarCard from '../../components/CarCard';

const Index = (props) => {
    const [ cars, setCars ] = useState(null);
    
    useEffect(() => {
        axios.get('https://ca2-cars-api.vercel.app/api/cars')
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

    const deleteCallback = (id) => {
        let carsNew = cars.filter(car => {
            return car._id !== id;
        });

        setCars(carsNew);
    };

    const carsList =cars.map((car) => {
        return <CarCard key={car.id} car={car} authenticated={props.authenticated} callback={deleteCallback}/>;
    });
    return (
        <>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>All Cars from Database</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ carsList }</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
   
};

export default Index;