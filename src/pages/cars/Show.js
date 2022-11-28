import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import CarCard from "../../components/CarCard";

const Show = () => {
    const { id } = useParams();
    const [ car, setCar] = useState(null);
    let token = localStorage.getItem('token');

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
        <CarCard car={car} />
    );
};

export default Show;