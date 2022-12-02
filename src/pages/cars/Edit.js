import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import TextField  from "@mui/material/TextField";
import InputLabel  from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button'; 



const Edit = () => {
    const [form, setForm] = useState ({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const { id } = useParams();
    const [ car, setCar] = useState(null);
    let token = localStorage.getItem('token');
    useEffect(() => {
    axios.put(`/cars/${id}`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
    })
             .then((response) =>{
                console.log(response.data);
                setCar(response.data);
                setForm(response.data);
               
             })
             .catch((err) => {
                console.log(err.response.data.message);
             })        
        console.log("mounted");
    }, [token, id]);

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;

             

       
        setForm(prevState =>({
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
                        message: `${field} is required!!!`
                    }
                }));
            }
        })
    };
    const submitform = () => {
        let token = localStorage.getItem('token');
        if(!isRequired(['make', 'model', 'series', 'year', 'reg_plate', 'engine_cap', 'fuel', 'colour', 'transmission', 'body_type']))
        axios.post('http://localhost:3001/api/cars', form, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
             .then(response => {
                console.log(response.data);
                navigate('/cars');
             })
             .catch(err=> {
                console.log(err.response.data)
                console.error(err);
                setErrors(err.response.data.errors);
             });  
    }
    if(!car) return "loading...";
    return (
        <>
            <h2>Edit Page</h2>
            <div className='form-group'>
            <TextField 
                variant='filled' 
                label='Make' 
                name='make' 
                onChange={handleForm}
                error={errors.make}
                value={form.make}
                
                /> 
            </div>
            <div className='form-group'>
            <TextField 
                variant='filled' 
                label='Model' 
                name='model' 
                onChange={handleForm}
                error={errors.model}
                value={form.model}
                
                /> 
            </div>
            <div className='form-group'>
            <TextField 
                variant='filled' 
                label='Series' 
                name='series' 
                onChange={handleForm}
                error={errors.series}
                value={form.series}
                
                /> 
            </div>
            <div className='form-group'>
            <TextField 
                variant='filled' 
                label='Year' 
                name='year' 
                onChange={handleForm}
                error={errors.year}
                value={form.year}
                
                /> 
            </div>
            <div className='form-group'>
            <TextField 
                variant='filled' 
                label='Reg' 
                name='reg_plate' 
                onChange={handleForm}
                error={errors.reg_plate}
                value={form.reg_plate}
                
                /> 
            </div>
            <div className='form-group'>
            <TextField 
                variant='filled' 
                label='Engine Capacity' 
                name='engine_cap' 
                onChange={handleForm}
                error={errors.engine_cap}
                value={form.engine_cap}
                
                /> 
            </div>
            <div className="form-group">
                <FormControl variant="filled" fullWidth>
                <InputLabel id="fuel-select">Fuel</InputLabel>
                <Select 
                    labelId='fuel-select' 
                    name="fuel" 
                    label="fuel" 
                    onChange={handleForm}
                    error={errors.fuel}
                    value={form.fuel}
                    
                    >
                    <MenuItem value='Petrol'>Petrol</MenuItem>
                    <MenuItem value='Disel'>Disel</MenuItem>
                    <MenuItem value='Mild-Hybrid'>Mild-Hybrid</MenuItem>
                    <MenuItem value='Hybrid'>Hybrid</MenuItem>
                    <MenuItem value='Full Electric'>Full electric</MenuItem>
                </Select>
                </FormControl>
            </div>
            <div className='form-group'>
            <TextField 
                variant='filled' 
                label='Colour' 
                name='colour' 
                onChange={handleForm}
                error={errors.colour}
                value={form.colour}
                
                /> 
            </div>
            <div className="form-group">
                <FormControl variant="filled" fullWidth>
                <InputLabel id="transmission-select">transmission</InputLabel>
                <Select 
                    labelId='transmission-select' 
                    name="transmission" 
                    label="transmission" 
                    onChange={handleForm}
                    error={errors.transmission}
                    value={form.transmission}
                    
                    >
                    <MenuItem value='Manual'>Manual</MenuItem>
                    <MenuItem value='Automatic'>Automatic</MenuItem>
                    <MenuItem value='Flappy Paddle'>Flappy Paddle</MenuItem>
                </Select>
                </FormControl>
            </div>
            <div className="form-group">
                <FormControl variant="filled" fullWidth>
                <InputLabel id="body-select">Body type</InputLabel>
                <Select 
                    labelId='body-select' 
                    name="body_type" 
                    label="body_type" 
                    onChange={handleForm}
                    error={errors.body_type}
                    value={form.body_type}
                    
                    >
                    <MenuItem value='2 door saloon'>2 Door Saloon</MenuItem>
                    <MenuItem value='4 door saloon'>4 Door Saloon</MenuItem>
                    <MenuItem value='3 door hatchback'>3 Door Hatchbach</MenuItem>
                    <MenuItem value='4 door hatchback'>4 Door Hatchbach</MenuItem>
                    <MenuItem value='5 door hatchback'>5 Door Hatchbach</MenuItem>
                    <MenuItem value='5 door MPV'>5 Door MPV</MenuItem>
                    <MenuItem value='Sports'>Sports</MenuItem>
                    <MenuItem value='Flappy Paddle'>Flappy Paddle</MenuItem>
                </Select>
                </FormControl>
            </div>
            <Button onClick={submitform}variant="contained">Submit</Button>
        </>
    );

};

export default Edit;