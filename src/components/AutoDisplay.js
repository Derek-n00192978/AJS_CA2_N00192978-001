import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
//import EditIcon from '@mui/icons-material/Edit';

//react-bootstrap card
import Card from 'react-bootstrap/Card';

import DeleteBtn from './DeleteBtn';
const AutoDisplay = (props) => {
    let name = <p><b>Name:</b> {props.auto_part.name}</p>
    let location = <p><b>Location:</b>{props.auto_part.location}</p>
    let phone = <p><b>Phone:</b>{props.auto_part.phone}</p>
    let web_address = <p><b>Web Address:</b>{props.auto_part.web_address}</p>
    let image = <p><b>Image:</b>{props.auto_part.image_path}</p>
    
    

    if(props.authenticated){
        web_address = <p><b>web_address:</b><Link to={`https://autocare.ie`}>{props.auto_part.name}</Link></p>;       
    }
    
    return (
        <div>
            <Card.Header><b>{name}</b></Card.Header>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${props.auto_part.image_path}`} name={image} />
            <Card.Body>
                <Card.Text>
                    {name} 
                    {location}
                    {phone}
                    <Card.Link href="https://autocare.ie">{web_address}</Card.Link>
                </Card.Text>
                <Button 
                    component={Link} 
                    to={`/auto_parts/${props.auto_part._id}/edit`}
                    //startIcon={<EditIcon />}
                    variant='outlined'
                >
                Edit
                </Button>
                    <DeleteBtn 
                        id={props.auto_part._id} 
                        resource='auto_parts' 
                        callback={props.callback}
                        variant="danger"
                    />
            </Card.Body>
            </Card>
            
        </div>
    );
};
export default AutoDisplay;