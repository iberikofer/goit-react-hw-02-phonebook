import React from 'react';

export default class Filter extends React.Component {
  handleFilter = e => {
    const inputValue = e.target.value;
    this.props.handleFilter(inputValue);
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="search"
          onChange={this.handleFilter}
          style={{ borderRadius: 15, padding: 5 }}
        ></input>
      </div>
    );
  }
}
