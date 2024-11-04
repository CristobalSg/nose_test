import React, { CSSProperties } from 'react';
import { Card, Col, Row, Image, Typography } from 'antd';

const { Title, Text } = Typography;

// Definir un estilo para que todas las tarjetas mantengan la misma altura
const cardStyle: CSSProperties = {
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  borderRadius: '8px',
  background: "#ffffff",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "16px",
};

interface ImportantCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const ImportantCard: React.FC<ImportantCardProps> = ({ title, imageUrl, description }) => {
  return (
    <Card style={{ ...cardStyle, background: "#FFE0E0" }}>
      <Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Col xs={24} sm={12} md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <Image
              width="80px"
              height="80px"
              style={{ objectFit: 'contain' }}
              src={imageUrl}
            />
          </div>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Title level={1} style={{ textAlign: 'center',  fontFamily: 'Montserrat, sans-serif' }}>{title}</Title>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <Image
              width="80px"
              height="80px"
              style={{ objectFit: 'contain' }}
              src={imageUrl}
            />
          </div>
        </Col>
      </Row>
      <Text style={{textAlign: 'center',  fontSize: '1.25em' }} className="text-sm">
        {description}
      </Text>
      <ul>
        <li>Evita el sentimiento de culpa en el usuario, por haber errado en la respuesta.</li>
      </ul>
    </Card>
  );
};

export default ImportantCard;
