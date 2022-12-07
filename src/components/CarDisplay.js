import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

//react-bootstrap card
import Card from 'react-bootstrap/Card';

import DeleteBtn from './DeleteBtn';
const CarDisplay = (props) => {
    let make = <p><b>Make:</b> {props.car.make}</p>
    let model = <p></p>
    let series = <p></p>
    let year = <p></p>
    let reg_plate = <p></p>
    let engine_cap = <p></p>
    let fuel = <p></p>
    let colour = <p></p>
    let transmission = <p></p>
    let body_type = <p></p>
    let image_path = <p></p>

    if(props.authenticated){
        make = <p><b>Make:</b>{props.car.make}</p>
        model = <p><b>Model:</b>{props.car.model}</p>
        series = <p><b>Series:</b>{props.car.series}</p>
        year = <p><b>Year:</b>{props.car.year}</p>
        reg_plate = <p><b>Reg_Plate:</b>{props.car.reg_plate}</p>
        engine_cap = <p><b>Engine Capicaty:</b>{props.car.engine_cap}</p>
        fuel =<p><b>Fuel Type:</b>{props.car.fuel}</p>
        colour = <p><b>Colour:</b>{props.car.colour}</p>
        transmission = <p><b>Transmission:</b>{props.car.transmission}</p>
        body_type = <p><b>Body Type:</b>{props.car.body_type}</p>
        image_path = <p><b>Image</b>{props.car.image_path}</p>
            }
    return (
        <div>
            {/*react bootstrap catd */}
            <Card style={{ width: '18rem' }}>
            <Card.Header text-align="center">{props.car.make}-{props.car.model}-{props.car.series}</Card.Header>
                <Card.Img variant="top" src={`${props.car.image_path}`} />
            <Card.Body>
                <Card.Title><p><b>Make:</b>{props.car.make} <b>Model:</b>{props.car.model} <b>Series:</b>{props.car.series}</p></Card.Title>
                <Card.Text>
                <p><b>Engine Capicaty:</b>{props.car.engine_cap} <b>Fuel Type:</b>{props.car.fuel}</p>
                <p><b>Year:</b>{props.car.year} <b>Reg_Plate:</b>{props.car.reg_plate}</p>
                <p><b>Colour:</b>{props.car.colour} <b>Transmission:</b>{props.car.transmission}</p>
                <p></p>
                <p><b>Body Type:</b>{props.car.body_type}</p>
                
                
                </Card.Text>
                <Button 
                        component={Link} 
                        to={`/cars/${props.car._id}/edit`}
                        //startIcon={<EditIcon />}
                        variant='outlined'
                    >
                        Edit
                    </Button>
                <DeleteBtn 
                    id={props.car._id} 
                    resource='cars' 
                    callback={props.callback}
                    variant="danger"
                    /> 
            </Card.Body>
            </Card>      
        </div>
    )
};
export default CarDisplay;