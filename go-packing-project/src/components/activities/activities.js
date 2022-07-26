import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={activities}
      sx={{ width: "20vw", height: 58, boxShadow: 4,
      "& .MuiOutlinedInput-notchedOutline": {
        border: "0 none",
      },  }}
      renderInput={(params) => <TextField {...params} label="Activities" />}
    />
  );
}

// Activities lists
const activities = [
  { label: 'Hiking', value: 'Hiking' },
  { label: 'Beach Days', value: 'Beach Days' },
  { label: 'Out on the town', value: 'Out on the town' },
  { label: 'Skiing', value: 'Skiing' },
];
