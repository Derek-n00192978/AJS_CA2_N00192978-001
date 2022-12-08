import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CarCard = (props) => {
    let make = <p><b>Make:</b> {props.car.make}</p>
    let model = <p><b>Model:</b>{props.car.model}</p>
    let series = <p><b>Series:</b>{props.car.series}</p>


    if(props.authenticated){
        make = <p><b>Make:</b><Link to={`/cars/${props.car._id}`}>{props.car.make}</Link></p>
        model = <p><b>Model:</b>{props.car.model}</p>
        series = <p><b>Series:</b>{props.car.series}</p>
            }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{make}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{model}</Card.Subtitle>
                    <Card.Text>{series}</Card.Text>
                </Card.Body>
            </Card>
            <br></br>
        </div>
    )
};
export default CarCard;