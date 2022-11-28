import { Link } from 'react-router-dom';
const CarCard = (props) => {
    let make = <p><b>Make:</b> {props.car.make}</p>
    let reg = <p><b>Reg:</b>{props.car.reg_plate}</p>
    let engine_cap = <p><b>Engin Cap:</b>{props.cars.engine_cap}</p>
    let fuel = <p><b>Fuel:</b>{props.cars.fuel}</p>
    let colour = <p><b>Colour:</b>{props.cars.colour}</p>
    let transmission = <p><b>Transmission:</b>{props.cars.transmission}</p>
    let body_type = <p><b>Body type:</b>{props.cars.body_type}</p>

    if(props.authenticated){
        <p><b>Make:</b><Link to={`/cars/${props.car._id}`}>{props.car.make}</Link></p>,
        <p><b>Reg:</b>{props.car.reg_plate}</p>,
        <p><b>Engin Cap:</b>{props.cars.engine_cap}</p>,
        <p><b>Fuel:</b>{props.cars.fuel}</p>,
        <p><b>Colour:</b>{props.cars.colour}</p>,
        <p><b>Transmission:</b>{props.cars.transmission}</p>,
        <p><b>Body type:</b>{props.cars.body_type}</p>
     
    }
    return (
        <div>
        {make}
        <p><b>Model:</b>{props.car.model}</p>
        <p><b>Series:</b>{props.car.series}</p>
        <p><b>Year:</b>{props.cars.year}</p>
        {reg}
        {engine_cap}
        {fuel}
        {colour}
        {transmission}
        {body_type}
      
        <hr />
    </div>
    )
};
export default CarCard;