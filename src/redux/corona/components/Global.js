import React from 'react';
import { Card, Col, Row } from 'antd';

const Global = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Confirmed" bordered={true}>
            <p>NewConfirmed: 135</p>
            <p>TotalConfirmed: 135</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Death" bordered={true}>
            <p>NewDeaths: 135</p>
            <p>TotalDeaths: 135</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Recovered" bordered={true}>
            <p>NewRecovered: 135</p>
            <p>TotalRecovered: 135</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default React.memo(Global);