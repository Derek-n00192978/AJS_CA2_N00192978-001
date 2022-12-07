import axios from 'axios';
import { useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';


import AutoCard from '../../components/AutoCard';

const Index = (props) => {
    const [ auto_parts, setAuto_parts ] = useState(null);
    useEffect(() => {
        axios.get('https://vercel.com/n00192978-iadtie/ca2-cars-api/api/auto_parts')
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
 <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>All Auto Centres</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ auto_partsList }</td>
          </tr>
        </tbody>
      </Table>
      {/*<Table responsive="md">
        <thead>
          <tr>
            <th>All Auto Centers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ auto_partsList }</td>
         </tr>
        </tbody>
      </Table>
      <Table responsive="lg">
        <thead>
          <tr>
            <th>All Auto Centres</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ auto_partsList }</td>
          </tr>
        </tbody>
    </Table>*/}
      </div>
            
        </>
    );
};

export default Index;