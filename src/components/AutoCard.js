import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

//import EditIcon from '@mui/icons-material/Edit';

const AutoCard = (props) => {
    let name = <p><b>Name:</b> {props.auto_part.name}</p>
    let location = <p><b>Location:</b>{props.auto_part.location}</p>
  
    
    

    if(props.authenticated){
        name = <p><b>Name:</b><Link to={`/auto_parts/${props.auto_part._id}`}>{props.auto_part.name}</Link></p>
        
        
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
                </Card.Body>
            </Card>
            <br></br>
        </div>
    )
};
export default AutoCard;