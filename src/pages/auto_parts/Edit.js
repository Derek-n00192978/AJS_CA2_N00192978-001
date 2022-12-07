import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/Textfield';
//import InputLabel from '@mui/material/InputLabel';
//import Select from '@mui/material/Select';
//import FormControl from '@mui/material/FormControl';
//import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
//import FormHelperText from '@mui/material/FormHelperText';
import Table from 'react-bootstrap/Table';

const Edit = () => {
    const [ auto_part, setAuto_part] = useState(null);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    let token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`/auto_parts/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
             .then((response) => {
                 console.log(response.data);
                 setAuto_part(response.data);
                 setForm(response.data);
             })
             .catch((err) => {
                 console.error(err);
                 console.log(err.response.data.message);                 
             });
    }, [token, id]);

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const isRequired = (fields) => {
        let error = false;

        fields.forEach(field => {
            if(!form[field]){
                error = true;
                setErrors(prevState => ({
                    ...prevState,
                    [field]: {
                        message: `${field} is required!!!!`
                    }
                }));
            }
        });

        return error;
    };

    const submitForm = () => {

        if(!isRequired(['name', 'location', 'phone', 'web_address'])){

            axios.put(`/auto_parts/${id}`, form, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
            })
             .then(response => {
                console.log(response.data);
                navigate('/auto_parts');
             })
             .catch(err => {
                console.error(err);
                console.log(err.response.data.message)
                setErrors(err.response.data.errors);
             });
        }

    };

    if(!auto_part) return "Loading...";



    return (
        <>
            <h2>Edit</h2>

            <div className='form-group'>
                <TextField 
                    variant='filled' 
                    label='Name' 
                    name='name' 
                    onChange={handleForm}
                    error={errors.name}
                    helperText={errors.name?.message}
                    value={form.name}
                />
            </div>
            <div className='form-group'>
                <TextField 
                     
                    variant='filled' 
                    label='Location' 
                    name='location' 
                    onChange={handleForm}
                    error={errors.location}
                    helperText={errors.location?.message}
                    value={form.location}
                />
            </div>
            
            <div className='form-group'>
                <TextField 
                    variant='filled'
                    label='Phone'
                    type='phone'
                    name='phone'
                    onChange={handleForm}
                    InputLabelProps={{ shrink: true }}
                    error={errors.phone}
                    helperText={errors.phone?.message}
                    value={form.phone}
                />
            </div>
            <div className='form-group'>
                <TextField 
                    variant='filled'
                    label='Web address'
                    type='web_address'
                    name='web_address'
                    onChange={handleForm}
                    InputLabelProps={{ shrink: true }}
                    error={errors.web_address}
                    helperText={errors.web_address?.message}
                    defaultValue={form.web_address}
                />
            </div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Image Selector for Image Upload</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <input type="file" />
                    </tr>
                </tbody>
            </Table>
            <Button onClick={submitForm} variant='contained'>Submit</Button>
        </>
    );
};

export default Edit;