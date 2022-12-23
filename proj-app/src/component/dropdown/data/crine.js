import React from 'react';
import fs from 'fs';
import Papa from 'papaparse';

class ExcelData extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    const file = fs.readFileSync('C:\Users\Dell\Desktop.csv', 'utf-8');
    const results = Papa.parse(file, {
      header: true
    });
    this.setState({ data: results.data });
  }

  render() {
    const { data } = this.state;
    return (
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name}, {item.email}
          </li>
        ))}
      </ul>
    );
  }
}

export default ExcelData;