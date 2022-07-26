import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={style}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Style" />}
    />
  );
}

// Activities lists
const style = [
  { label: 'Masculine', value: 'Masculine' },
  { label: 'Feminine', value: 'Feminine' },
  { label: 'Both', value: 'Both' },

];
