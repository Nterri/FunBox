import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({options, value, onChange, classList}) => {
    return (
        <select
            className={classList}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            {options.map(option =>
                <option value={option} key={option}>{option}</option>)}
        </select>
    );
};

export default MySelect;