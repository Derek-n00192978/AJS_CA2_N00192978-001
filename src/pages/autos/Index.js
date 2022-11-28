import axios from 'axios';
import { useState, useEffect} from 'react';

import AutoCard from '../../components/AutoCard';

const Index = () => {
    const [ autos, setAutos ] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:3001/api/auto_parts/')
             .then((response) =>{
                console.log(response.data);
                setAutos(response.data);
             })
             .catch((err) => {
                console.error(err);
             })        
        console.log("mounted");
    }, []);
    if(!autos) return 'Loading...';

    const autosList =autos.map((auto) => {
        return <AutoCard auto={auto} />;
    })
    return (
        <>
            <h1>All Auto</h1>
            { autosList }
          
        </>
    )
};

export default Index;