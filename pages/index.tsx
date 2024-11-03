import React from 'react';
import MainLayout from '@/components/MainLayout';
import type { NextPage } from 'next';
import { Row, Col, Typography, Button, Card, Image} from 'antd';
import Link from 'next/link';

const {Paragraph } = Typography;

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={16}>
         
              <div style={{ height: '300px', position: 'relative' }}>
                <Image
                width={"100%"}
                height={"100%"}
                style={{ objectFit: 'cover'}}
                  // src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  src="https://lh3.googleusercontent.com/p/AF1QipP5M43_RYJQ7umCxZzgiIw-qo7J9Og4YtndhnuI=s680-w680-h510"
                />
              </div>
            
        </Col>
        <Col xs={24} md={8}>
          
              <div style={{ height: '300px', position: 'relative' }}>
                <Image
                width={"100%"}
                height={"100%"}
                style={{ objectFit: 'cover'}}
                  // src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  src="https://lh3.googleusercontent.com/p/AF1QipP5M43_RYJQ7umCxZzgiIw-qo7J9Og4YtndhnuI=s680-w680-h510"
                  alt="Manual de la Buena Visita Logo"
                />
              </div>
            
          
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} md={16}>
          <Card>
            <Paragraph>
              Esta página es creada con la finalidad de entregar información que guíe a los familiares de los pacientes hospitalizados, en relación a como realizar, una visita enriquecedora para el proceso de rehabilitación del paciente.
            </Paragraph>
            
            <Link href="/info" passHref>
              <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: '#C4B5A6',
                borderColor: '#C4B5A6',
                borderRadius: '9999px',
                marginTop: '16px'
              }}
              onClick={() => console.log('Navegando a la siguiente página')}
            >
              SIGUIENTE
            </Button>
            </Link>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card
                cover={
                  <div style={{ height: '100px', position: 'relative' }}>
                    <img
                  src="https://lh3.googleusercontent.com/p/AF1QipP5M43_RYJQ7umCxZzgiIw-qo7J9Og4YtndhnuI=s680-w680-h510"
                      alt="Profesional médico con paciente"
                      style={{ objectFit: 'cover', width: "100%", height: "100%" }}
                    />
                  </div>
                }
              />
            </Col>
            <Col xs={24} md={12}>
              <Card
                cover={
                  <div style={{ height: '100px', position: 'relative' }}>
                    <img
                  src="https://lh3.googleusercontent.com/p/AF1QipP5M43_RYJQ7umCxZzgiIw-qo7J9Og4YtndhnuI=s680-w680-h510"
                      alt="Manos cuidadoras"
                      style={{ objectFit: 'cover', width: "100%", height: "100%" }}
                    />
                  </div>
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Home;
