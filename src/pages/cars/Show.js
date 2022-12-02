import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
//mui card example

import CarCard from "../../components/CarCard";

const Show = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ car, setCar] = useState(null);
    let token = localStorage.getItem('token');

    const deleteCallback = (id) => {
        navigate('/cars');
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/api/cars/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
             .then((response) => {
                 console.log(response.data);
                 setCar(response.data);
             })
             .catch((err) => {
                 console.error(err);
                 console.log(err.response.data.message);                 
             });
        console.log("mounted");     
    }, [token, id]);

    if(!car) return "Loading...";

    return (
        <CarCard car={car} authenticated={props.authenticated} callback={deleteCallback}/>
    );
};

export default Show;