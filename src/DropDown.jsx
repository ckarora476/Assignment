import React from "react";

class DropDown extends React.Component {
  render() {
    const { value, name, values, onChange } = this.props;
    const addExtraOption = value === ""
    const defaultOption = <option name={name}>Select A State</option> 
    const options = values.map((dropdownValue, index) => {
      const selectedAttr = value === dropdownValue ? { selected: true } : {};
      return (
        <option value={dropdownValue} key={index} name={name} {...selectedAttr}>
          {dropdownValue}
        </option>
      );
    });
    
    if (addExtraOption) options.unshift(defaultOption)

    return (
      <select onChange={onChange} name={name}>
        {options}
      </select>
    );
  }
}

export default DropDown;
