import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import CarDisplay from "../../components/CarDisplay";



const Show = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ car, setCar] = useState(null);
    let token = localStorage.getItem('token');

    const deleteCallback = (id) => {
        navigate('/cars');
    };

    useEffect(() => {
        axios.get(`https://vercel.com/n00192978-iadtie/ca2-cars-api/api/cars/${id}`, {
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
        <CarDisplay key={car.id} car={car} authenticated={props.authenticated} callback={deleteCallback}/>
    );
};

export default Show;