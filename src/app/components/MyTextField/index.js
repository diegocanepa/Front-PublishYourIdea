import React from 'react';
import { useField } from 'formik';
import {TextField} from '@material-ui/core';

const TextFieldInput = ({label, ...props}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <TextField
                {...field}{...props}
                label={label}  
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && Boolean(meta.error) ? meta.error : null}
            />
        </>
    );
};


export default TextFieldInput;