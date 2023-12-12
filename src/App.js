import React, { useState } from 'react';
import './App.css';

import {
  Select,
  FormControl,
  MenuItem,
  Typography,
  Grid,

} from '@mui/material';

const employeeCityList = [
  { name: "India", state: ["Gujarat", 'Goa', 'Maharashtra'], },
  { name: "US", state: ["Clifornia", 'Hawali', 'Texas'] },
  { name: "Canada", state: ["Yulon", 'Alberta', 'Manitoba'], },
];


const App = () => {

  const [employeeRegistrationDetails, setEmployeeRegistrationDetails] = useState({
    country: "India",
  })

  const handlerEmployeeRegistrationDetails = (e) => {

    setEmployeeRegistrationDetails({
      ...employeeRegistrationDetails,
      [e.target.name]: e.target.value
    })
  }

  const selectedCountryObject = employeeCityList.find((country) => country.name === employeeRegistrationDetails.country)


  return (

    <div>
      <h2>Select Country and State</h2>

      <FormControl
        variant="standard"
        fullWidth
      >
        <Select
          placeholder="Select Country"

          name="country"
          value={employeeRegistrationDetails.country}
          onChange={(e) => handlerEmployeeRegistrationDetails(e)}
        >
          <MenuItem value="" style={{ width: "100%" }}><em>None</em></MenuItem>
          {employeeCityList.map((val) => {
            return (
              <MenuItem key={val.name} value={val.name} style={{ width: "100%" }}>
                {val.name}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>


      <Grid item xs={12}>
        <Typography variant="h6">States of {employeeRegistrationDetails.country}</Typography>
        <ul>
          {selectedCountryObject?.state.map((state) => (
            <li key={state}>{state}</li>
          ))}
        </ul>
      </Grid>

    </div>

  );
}

export default App;

