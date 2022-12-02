import { Link } from 'react-router-dom';


const CarCard = (props) => {
    let make = <p><b>Make:</b> {props.car.make}</p>
    let model = <p></p>
    let series = <p></p>


    if(props.authenticated){
        make = <p><b>Make:</b><Link to={`/cars/${props.car._id}`}>{props.car.make}</Link></p>
        model = <p><b>Reg:</b>{props.car.model}</p>
        series = <p><b>Engin Cap:</b>{props.car.series}</p>
            }
    return (
        <div>
        {make}
        <p><b>Model:</b>{props.car.model}</p>
        <p><b>Series:</b>{props.car.series}</p>
              
        <hr />
    </div>
    )
};
export default CarCard;