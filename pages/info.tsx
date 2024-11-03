import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Layout, Typography, Card, List, Row, Col, ConfigProvider } from 'antd';
import { BulbOutlined, WindowsOutlined, HomeOutlined, MessageOutlined, ReadOutlined, ExperimentOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const tealTheme = {
  token: {
    colorPrimary: '#20B2AA',
    colorLink: '#20B2AA',
  },
};

const cardColors = ['#FFE0E0', '#E0FFE0', '#E0E0FF', '#E0F7FA'];

const cardStyle = (index: number) => ({
  background: cardColors[index % cardColors.length],
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  borderRadius: '8px',
  marginBottom: '24px',
});

const SalePage = () => {
  return (
    <MainLayout>
      <Title level={1} style={{ textAlign: 'center', color: '#0d9488', marginBottom: '24px' }}>
            Guía de Cuidado del Paciente
          </Title>
      {/* <h1 style={{color: "#0d9488"}}>¿Qué hacer?</h1> */}
      {/* <Card style={{width: "full"}}>
        <Card.Meta
          // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Manejo del Ambiente"
          description={
            <>
              <p>Cómo ajustar el entorno del paciente</p>
            </>
          }
        />
        <p>Ajustar la iluminación según la hora del día</p>
      </Card> */}
      <Card style={{background: "#E0F7FA", boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderRadius: '8px', marginBottom: '24px',}}>
              <Title level={3}>¿Qué hacer?</Title>
              <Paragraph>
                Esta guía te ayudará a manejar el ambiente del paciente y realizar ejercicios de estimulación.
              </Paragraph>
            </Card>
      
      <Card style={cardStyle(1)}>
              <Title level={3}>Manejo del Ambiente</Title>
              <Paragraph>Cómo ajustar el entorno del paciente</Paragraph>
              <List
                itemLayout="horizontal"
                dataSource={[
                  {
                    icon: <BulbOutlined />,
                    text: 'Ajustar la iluminación según la hora del día',
                  },
                  {
                    icon: <WindowsOutlined />,
                    text: 'Abrir o cerrar las cortinas para regular la luz natural',
                  },
                  {
                    icon: <HomeOutlined />,
                    text: 'Posicionar la cama correctamente para la comodidad del paciente',
                  },
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={item.icon}
                      title={<Text>{item.text}</Text>}
                    />
                  </List.Item>
                )}
              />
            </Card>

          <Card style={cardStyle(2)}>
              <Title level={3}>¿Qué es TOR?</Title>
              <Paragraph>
                TOR significa Terapia de Orientación a la Realidad. Es una técnica utilizada para ayudar a los pacientes a mantener la conciencia de su entorno y situación actual, especialmente útil en casos de confusión o deterioro cognitivo.
              </Paragraph>
            </Card>

            <Card style={cardStyle(3)}>
              <Title level={3}>Ejercicios de Estimulación</Title>
              <Paragraph>Actividades para realizar con el paciente</Paragraph>
              <List
                itemLayout="horizontal"
                dataSource={[
                  {
                    icon: <MessageOutlined />,
                    text: 'Mantener conversaciones sobre temas de interés para el paciente',
                  },
                  {
                    icon: <ReadOutlined />,
                    text: 'Leer y discutir noticias actuales',
                  },
                  {
                    icon: <ExperimentOutlined />,
                    text: 'Realizar ejercicios de memoria y orientación temporal',
                  },
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={item.icon}
                      title={<Text>{item.text}</Text>}
                    />
                  </List.Item>
                )}
              />
            </Card>

            <Title level={3} style={{ marginTop: '32px', marginBottom: '16px' }}>Recursos Adicionales</Title>
            <Row gutter={[16, 16]}>
  <Col xs={24} sm={12} md={8} lg={8}>
    <Card
      hoverable
      cover={<img alt="Ejercicios de memoria" src="https://lh3.googleusercontent.com/p/AF1QipP5M43_RYJQ7umCxZzgiIw-qo7J9Og4YtndhnuI=s680-w680-h510" />}
    >
      <Card.Meta title="Ejercicios de Memoria" description="Actividades para estimular la memoria" />
    </Card>
  </Col>
  <Col xs={24} sm={12} md={8} lg={8}>
    <Card
      hoverable
      cover={<img alt="Terapia ocupacional" src="https://lh3.googleusercontent.com/p/AF1QipP5M43_RYJQ7umCxZzgiIw-qo7J9Og4YtndhnuI=s680-w680-h510" />}
    >
      <Card.Meta title="Terapia Ocupacional" description="Actividades diarias terapéuticas" />
    </Card>
  </Col>
  <Col xs={24} sm={12} md={8} lg={8}>
    <Card
      hoverable
      cover={<img alt="Estimulación sensorial" src="https://lh3.googleusercontent.com/p/AF1QipP5M43_RYJQ7umCxZzgiIw-qo7J9Og4YtndhnuI=s680-w680-h510" />}
    >
      <Card.Meta title="Estimulación Sensorial" description="Técnicas de estimulación de los sentidos" />
    </Card>
  </Col>
</Row>

    </MainLayout>
  );
};

export default SalePage;
