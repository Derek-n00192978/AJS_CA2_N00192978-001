import axios from 'axios';
import { useState, useEffect} from 'react';

import AutoCard from '../../components/AutoCard';

const Index = (props) => {
    const [ auto_parts, setAuto_parts ] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:3001/api/auto_parts')
             .then((response) =>{
                console.log(response.data);
                setAuto_parts(response.data);
             })
             .catch((err) => {
                console.error(err);
             })        
        console.log("mounted");
    }, []);
    
    if(!auto_parts) return 'Loading...';

    const deleteCallback = (id) => {
        let auto_partsNew = auto_parts.filter(auto_part => {
            return auto_part._id !== id;
        });

        setAuto_parts(auto_partsNew);
    };

    const auto_partsList =auto_parts.map((auto_part) => {
        return <AutoCard key={auto_part._id} auto_part={auto_part} authenticated={props.authenticated} callback={deleteCallback}/>;
    })
    return (
        <>
            <h1>All Auto</h1>
            { auto_partsList }  
        </>
    );
};

export default Index;