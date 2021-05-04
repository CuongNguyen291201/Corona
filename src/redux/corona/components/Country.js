import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Country',
    dataIndex: "Country",
    key: 'Country'
  },
  {
    title: 'New Confirmed',
    dataIndex: "NewConfirmed",
    key: 'NewConfirmed'
  },
  {
    title: 'Total Confirmed',
    dataIndex: "TotalConfirmed",
    key: 'TotalConfirmed'
  },
  {
    title: 'New Deaths',
    dataIndex: "NewDeaths",
    key: 'NewDeaths'
  },
  {
    title: 'Total Deaths',
    dataIndex: "TotalDeaths",
    key: 'TotalDeaths'
  },
  {
    title: 'New Recovered',
    dataIndex: "NewRecovered",
    key: 'NewRecovered'
  },
  {
    title: 'Total Recovered',
    dataIndex: "TotalRecovered",
    key: 'TotalRecovered'
  },
];

const data = [];

const Country = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Table rowKey="CountryCode" columns={columns} dataSource={data} />  
    </div>
  )
}

export default React.memo(Country);