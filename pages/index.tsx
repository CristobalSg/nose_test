import Link from 'next/link';
import React from 'react';
import { Row, Col, Typography, Button, Card, Image } from 'antd';
import type { NextPage } from 'next';

const { Paragraph } = Typography;

const Home: NextPage = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={16}>
          <div style={{ height: '400px', position: 'relative' }}>
            <Image
              width={"100%"}
              height={"100%"}
              style={{ objectFit: 'cover' }}
              src="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/W7NHXNFA2RCNXHZ7MRS2ZTSICE.jpg"
            />
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div style={{ height: '400px', position: 'relative' }}>
            <Image
              width={"100%"}
              height={"100%"}
              style={{ objectFit: 'cover' }}
              src="https://lh3.googleusercontent.com/p/AF1QipP5M43_RYJQ7umCxZzgiIw-qo7J9Og4YtndhnuI=s680-w680-h510"
              alt="Manual de la Buena Visita Logo"
            />
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} md={16}>
          <Card>
            <Paragraph style={{ fontSize: '1.25em', fontFamily: 'Montserrat, sans-serif'}}>
              Esta página es creada con la finalidad de entregar información que guíe a los familiares de los pacientes hospitalizados, en relación a como realizar, una visita enriquecedora para el proceso de rehabilitación del paciente.
            </Paragraph>
            {/* Contenedor flexible para el botón */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
            </div>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <div style={{ height: '100%', position: 'relative' }}>
                <Image
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: 'cover' }}
                  src="https://media-public.canva.com/MADAoil0KKc/1/thumbnail_large-1.jpg"
                  alt="Profesional médico con paciente"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ height: '100%', position: 'relative' }}>
                <Image
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: 'cover' }}
                  src="https://media-public.canva.com/wEhQo/MAFsYCwEhQo/1/tl.png"
                  alt="Manos cuidadoras"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
