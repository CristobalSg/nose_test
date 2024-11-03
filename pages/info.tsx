import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Typography, Card, List, Row, Col } from 'antd';
import {
  BulbOutlined,
  WindowsOutlined,
  HomeOutlined,
  MessageOutlined,
  ReadOutlined,
  ExperimentOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const cardColors = ['#FFE0E0', '#E0FFE0', '#E0E0FF', '#E0F7FA'];
const cardStyle = (index: number) => ({
  background: cardColors[index % cardColors.length],
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  borderRadius: '8px',
  marginBottom: '24px',
});

// Definir el tipo para los elementos de la lista
type InfoItem = {
  icon: JSX.Element;
  text: string;
};

// Datos para las tarjetas de listas
const listItems = {
  environment: [
    { icon: <BulbOutlined />, text: 'Ajustar la iluminación según la hora del día' },
    { icon: <WindowsOutlined />, text: 'Abrir o cerrar las cortinas para regular la luz natural' },
    { icon: <HomeOutlined />, text: 'Posicionar la cama correctamente para la comodidad del paciente' },
  ],
  stimulation: [
    { icon: <MessageOutlined />, text: 'Mantener conversaciones sobre temas de interés para el paciente' },
    { icon: <ReadOutlined />, text: 'Leer y discutir noticias actuales' },
    { icon: <ExperimentOutlined />, text: 'Realizar ejercicios de memoria y orientación temporal' },
  ],
};

// Datos para los recursos adicionales
const resources = [
  {
    title: 'Ejercicios de Memoria',
    description: 'Actividades para estimular la memoria',
    imgSrc: 'https://lh3.googleusercontent.com/p/AF1QipP5M43_RYJQ7umCxZzgiIw-qo7J9Og4YtndhnuI=s680-w680-h510',
  },
  {
    title: 'Terapia Ocupacional',
    description: 'Actividades diarias terapéuticas',
    imgSrc: 'https://lh3.googleusercontent.com/p/AF1QipP5M43_RYJQ7umCxZzgiIw-qo7J9Og4YtndhnuI=s680-w680-h510',
  },
  {
    title: 'Estimulación Sensorial',
    description: 'Técnicas de estimulación de los sentidos',
    imgSrc: 'https://lh3.googleusercontent.com/p/AF1QipP5M43_RYJQ7umCxZzgiIw-qo7J9Og4YtndhnuI=s680-w680-h510',
  },
];

// Componente para una tarjeta con lista
type InfoCardProps = {
  title: string;
  content: string;
  items: InfoItem[];
  index: number;
};

const InfoCard: React.FC<InfoCardProps> = ({ title, content, items, index }) => (
  <Card style={cardStyle(index)}>
    <Title level={3}>{title}</Title>
    <Paragraph>{content}</Paragraph>
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={item.icon}
            title={<Text style={{ fontSize: '1.25em' }}>{item.text}</Text>}
          />
        </List.Item>
      )}
    />
  </Card>
);

const SalePage = () => {
  return (
    <>
      <Title level={1} style={{ textAlign: 'center', color: '#0d9488', marginBottom: '24px' }}>
        Guía de Cuidado del Paciente
      </Title>

      <Card style={cardStyle(0)}>
        <Title level={3}>¿Qué hacer?</Title>
        <Paragraph style={{ fontSize: '1.25em' }}>
          Esta guía te ayudará a manejar el ambiente del paciente y realizar ejercicios de estimulación.
        </Paragraph>
      </Card>

      <InfoCard
        title="Manejo del Ambiente"
        content="Cómo ajustar el entorno del paciente"
        items={listItems.environment}
        index={1}
      />

      <Card style={cardStyle(2)}>
        <Title level={3}>¿Qué es TOR?</Title>
        <Paragraph style={{ fontSize: '1.25em' }}>
          TOR significa Terapia de Orientación a la Realidad. Es una técnica utilizada para ayudar a los pacientes a mantener la conciencia de su entorno y situación actual, especialmente útil en casos de confusión o deterioro cognitivo.
        </Paragraph>
      </Card>

      <InfoCard
        title="Ejercicios de Estimulación"
        content="Actividades para realizar con el paciente"
        items={listItems.stimulation}
        index={3}
      />

      <Title level={3} style={{ marginTop: '32px', marginBottom: '16px' }}>Recursos Adicionales</Title>
      <Row gutter={[16, 16]}>
        {resources.map((resource, idx) => (
          <Col key={idx} xs={24} sm={12} md={8} lg={8}>
            <Card hoverable cover={<img alt={resource.title} src={resource.imgSrc} />}>
              <Card.Meta title={resource.title} description={resource.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SalePage;
