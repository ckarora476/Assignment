import React from "react";
import { getFormField } from "./FieldFactory";

class Flexi extends React.Component {
  constructor(props) {
    super(props);
    const { data, items } = this._getInitialData(props);
    this.state = {
      data,
      items
    };
  }

  _getInitialData = props => {
    let items = (props.config && props.config.items) || [];
    items = this._getFlattenedItems(items);
    let data = items
      .map(item => item.name)
      .reduce((acc, name) => ({ ...acc, [name]: "" }), {});
    return { data, items };
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.config !== nextProps.config) {
      const { data, items } = this._getInitialData(nextProps);
      this.setState({
        data,
        items
      });
    }
  }

  _onChange = event => {
    const { name, value } = event.target;
    const data = { ...this.state.data, [name]: value };
    this.setState({ data });
  };

  onSubmit = e => {
    // Replace data with composing your form data
    const { data } = this.state;
    this.props.onSubmit(data); // dont edit this line
  };

  _flattenChildren = item => {
    if (!item.children) {
      return [item];
    }
    return item.children.items.reduce(
      (acc, element) => {
        return acc.concat(this._flattenChildren(element));
      },
      [item]
    );
  };

  _getFlattenedItems = items => {
    return items
      .map(this._flattenChildren)
      .reduce((acc, item) => [...acc, ...item], []);
  };

  _renderItem = (item, index) => {
    const Component = getFormField(item.type);
    if (!Component) return null;
    const value = this.state.data[item.name];
    return (
      <Component
        {...item}
        value={value}
        onChange={this._onChange}
        key={index}
      />
    );
  };

  render() {
    const { config } = this.props;
    const items = this.state.items.map(this._renderItem);
    return (
      <form>
        {items}
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default Flexi;
