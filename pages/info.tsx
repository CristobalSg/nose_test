import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Layout, Typography, Card, List, ConfigProvider } from 'antd';
// import { BulbOutlined, WindowsOutlined, HomeOutlined, MessageOutlined, ReadOutlined, ExperimentOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const tealTheme = {
  token: {
    colorPrimary: '#20B2AA',
    colorLink: '#20B2AA',
  },
};

const SalePage = () => {
  return (
    <MainLayout>
      <Title level={2} style={{ textAlign: 'center', color: '#006D5B', marginBottom: '24px' }}>
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
      <Card style={{ marginBottom: '24px' }}>
            <Title level={3}>¿Qué hacer?</Title>
            <Paragraph>
              Esta guía te ayudará a manejar el ambiente del paciente y realizar ejercicios de estimulación.
            </Paragraph>
          </Card>
      <Card style={{ marginBottom: '24px' }}>
            <Title level={3}>Manejo del Ambiente</Title>
            <Paragraph>Cómo ajustar el entorno del paciente</Paragraph>
            <List
              itemLayout="horizontal"
              dataSource={[
                {
                  // icon: <BulbOutlined />,
                  text: 'Ajustar la iluminación según la hora del día',
                },
                {
                  // icon: <WindowsOutlined />,
                  text: 'Abrir o cerrar las cortinas para regular la luz natural',
                },
                {
                  // icon: <HomeOutlined />,
                  text: 'Posicionar la cama correctamente para la comodidad del paciente',
                },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    // avatar={item.icon}
                    title={<Text>{item.text}</Text>}
                  />
                </List.Item>
              )}
            />
          </Card>

          <Card style={{ marginBottom: '24px' }}>
            <Title level={3}>¿Qué es TOR?</Title>
            <Paragraph>
              TOR significa Terapia de Orientación a la Realidad. Es una técnica utilizada para ayudar a los pacientes a mantener la conciencia de su entorno y situación actual, especialmente útil en casos de confusión o deterioro cognitivo.
            </Paragraph>
          </Card>

          <Card>
            <Title level={3}>Ejercicios de Estimulación</Title>
            <Paragraph>Actividades para realizar con el paciente</Paragraph>
            <List
              itemLayout="horizontal"
              dataSource={[
                {
                  // icon: <MessageOutlined />,
                  text: 'Mantener conversaciones sobre temas de interés para el paciente',
                },
                {
                  // icon: <ReadOutlined />,
                  text: 'Leer y discutir noticias actuales',
                },
                {
                  // icon: <ExperimentOutlined />,
                  text: 'Realizar ejercicios de memoria y orientación temporal',
                },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    // avatar={item.icon}
                    title={<Text>{item.text}</Text>}
                  />
                </List.Item>
              )}
            />
          </Card>
    </MainLayout>
  );
};

export default SalePage;
