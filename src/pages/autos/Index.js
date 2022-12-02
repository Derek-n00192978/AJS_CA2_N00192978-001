import axios from 'axios';
import { useState, useEffect} from 'react';

import AutoCard from '../../components/AutoCard';

const Index = (props) => {
    const [ auto_parts, setAutos ] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:3001/api/auto_parts')
             .then((response) =>{
                console.log(response.data);
                setAutos(response.data);
             })
             .catch((err) => {
                console.error(err);
             })        
        console.log("mounted");
    }, []);
    
    if(!auto_parts) return 'Loading...';

    const autosList =auto_parts.map((auto) => {
        return <AutoCard auto={auto} authenticated={props.authenticated}/>;
    })
    return (
        <>
            <h1>All Auto</h1>
            { autosList }  
        </>
    );
};

export default Index;