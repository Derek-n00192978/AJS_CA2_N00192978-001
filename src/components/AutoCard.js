import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
//import EditIcon from '@mui/icons-material/Edit';

import DeleteBtn from './DeleteBtn';
const AutoCard = (props) => {
    let name = <p><b>Name:</b> {props.auto_part.name}</p>
    let location = <p><b>Location:</b>{props.auto_part.location}</p>
    let phone = <p><b>Phone:</b>{props.auto_part.phone}</p>
    let web_address = <p><b>Web Address:</b>{props.auto_part.web_address}</p>
    let image = <p><b>Image:</b>{props.auto_part.image_path}</p>
    
    

    if(props.authenticated){
        name = <p><b>Name:</b><Link to={`/auto_parts/${props.auto_part._id}`}>{props.auto_part.name}</Link></p>
        
        
    }
    return (
        <div>
            {name} 
            {location}
            {phone}
            {web_address}
            {image}
            <Button 
                component={Link} 
                to={`/auto_parts/${props.auto_part._id}/edit`}
                //startIcon={<EditIcon />}
                variant='outlined'
            >
                Edit
            </Button>
            <DeleteBtn id={props.auto_part._id} resource='cars' callback={props.callback} />   
            <hr />
        </div>
    )
};
export default AutoCard;