import React from 'react'
import classes from './SelectGrey.module.css'

const SelectGrey = ({ value, onChange, options, defaultValue }) => {
  return (
    <select
      className={classes.wrapper}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default SelectGrey
