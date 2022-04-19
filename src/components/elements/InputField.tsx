import React from 'react';
// import { TextField } from '@mui/material';

const InputField = ({ label, value, error, setError, handleChange }: { label: string, value: string, error: string, setError: (e: string) => void, handleChange: (un: string) => void }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target) {
      handleChange(e.target?.value);
    }
    setError('');
  }
  return (
    <div className="input_group">
      <label>{label}</label>
      <input value={value} className={`form_control ${error ? "form_control_error" : ""}`} onChange={onChange} onFocus={() => {setError('')}} type="text" />
      { error && <p className="input_group_error_field">{error}</p>}
      {/* <TextField
        error
        id="standard-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        variant="standard"
      /> */}
    </div>
  );
};

export { InputField };
