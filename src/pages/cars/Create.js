import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import TextField  from "@mui/material/TextField";
import InputLabel  from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Create = () => {
    const [form, setForm] = useState ({});
    const navigate = useNavigate();

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        

       
        setForm(prevState =>({
            ...prevState,
            [name]: value
        }));
        
    };
    const submitform = () => {
        let token = localStorage.getItem('token');
        axios.post('http://localhost:3001/api/cars', {

        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
             .then(response => {
                console.log(response.data);
                //navigate('/');
             })
             .catch(err=> {
                console.log(err.response.data)
                console.error(err);
             });  
    }

    return (
        <>
            <h2>Create Page</h2>
            <div className='form-group'>
            <TextField variant='filled' label='Make' name='make' onChange={handleForm}/> 
            </div>
            <div className='form-group'>
            <TextField variant='filled' label='Model' name='model' onChange={handleForm}/> 
            </div>
            <div className='form-group'>
            <TextField variant='filled' label='Series' name='series' onChange={handleForm}/> 
            </div>
            <div className='form-group'>
            <TextField variant='filled' label='Year' name='year' onChange={handleForm}/> 
            </div>
            <div className='form-group'>
            <TextField variant='filled' label='Reg' name='reg_plate' onChange={handleForm}/> 
            </div>
            <div className='form-group'>
            <TextField variant='filled' label='Engine Capacity' name='engine_cap' onChange={handleForm}/> 
            </div>
            <div className="form-group">
                <FormControl variant="filled" fullWidth>
                <InputLabel id="fuel-select">city</InputLabel>
                <Select labelId='fuel-select' name="fuel" label="fuel" onChange={handleForm}>
                    <MenuItem value='Petrol'>Petrol</MenuItem>
                    <MenuItem value='Disel'>Disel</MenuItem>
                    <MenuItem value='Mild-Hybrid'>Mild-Hybrid</MenuItem>
                    <MenuItem value='Hybrid'>Hybrid</MenuItem>
                    <MenuItem value='Full Electric'>Full electric</MenuItem>
                </Select>
                </FormControl>
            </div>
            <div className='form-group'>
            <TextField variant='filled' label='Colour' name='colour' onChange={handleForm}/> 
            </div>
            <div className="form-group">
                <FormControl variant="filled" fullWidth>
                <InputLabel id="transmission-select">transmission</InputLabel>
                <Select labelId='transmission-select' name="transmission" label="transmission" onChange={handleForm}>
                    <MenuItem value='Manual'>Manual</MenuItem>
                    <MenuItem value='Automatic'>Automatic</MenuItem>
                    <MenuItem value='Flappy Paddle'>Flappy Paddle</MenuItem>
                </Select>
                </FormControl>
            </div>
            <div className="form-group">
                <FormControl variant="filled" fullWidth>
                <InputLabel id="body-select">Body type</InputLabel>
                <Select labelId='body-select' name="body_typr" label="body_type" onChange={handleForm}>
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
        </>
    );

};

export default Create;