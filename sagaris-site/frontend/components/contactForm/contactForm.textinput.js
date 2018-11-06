import React from 'react'
import Label from './contactForm.lable'
import InputFeedback from './contactForm.inputFeedback'
import { Field } from 'formik';

const TextInput = ({
    type,
    id,
    label,
    error,
    value,
    onChange,
    className,
    ...props
}) => {
    return (
        <div>
            <Label htmlFor={id} error={error}>
                {label}
            </Label>
            <Field
                style={error ? {border: '1px solid #FF5577', boxShadow: 'rgba(255, 85, 119, 0.5) 0px 0px 30px'} : {border: 'none'}}
                id={id}
                name={id}
                className={`text-input ${className}`}
                type={type}
                value={value}
                onChange={onChange}
                {...props}
            /> 
            <InputFeedback error={error} />
        </div>
    );
};

export default TextInput