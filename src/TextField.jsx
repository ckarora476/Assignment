import React from "react";

class TextField extends React.Component {
  render() {
    const { label, value, name,onChange } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input type="text" onChange={onChange} value={value} name={name}/>
      </div>
    );
  }
}

export default TextField