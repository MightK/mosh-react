import React from 'react';

const Input = ({name,handleChange,account,label,error}) => {
    return (
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
            value={account[name]}
            onChange={handleChange} 
            id={name}
            name={name}
            type="text" className="form-control"/>
           {error && <div className="alert alert-danger">{error}</div>} 
    </div>
      );
}
 
export default Input;