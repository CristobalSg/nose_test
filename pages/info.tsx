import React from 'react';
import { Typography, Card, Row, Col, Image } from 'antd';
import DynamicTitle from '@/components/TitleWithLinesStyle';

const { Title } = Typography;

const cardColors = ['#FFE0E0', '#E0FFE0', '#E0E0FF', '#E0F7FA'];
const cardStyle = (index: number) => ({
  background: cardColors[index % cardColors.length],
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  borderRadius: '8px',
  marginBottom: '24px',
  height: '350px', // Establece una altura fija para las tarjetas
});

// Datos para los recursos adicionales
const resources = [
  {
    title: 'Ejercicios de movilidad',
    imgSrc: 'https://media-public.canva.com/qaBcU/MAF-OUqaBcU/1/tl.png',
  },
  {
    title: 'Estimulación cognitiva',
    imgSrc: 'https://media-public.canva.com/YOF4c/MAGLwaYOF4c/1/tl.png',
  },
  {
    title: 'Actividades básicas de la vida diaria',
    imgSrc: 'https://media-public.canva.com/WTBu0/MAFHpMWTBu0/1/tl.png',
  },
  {
    title: 'Estimulación polisensorial',
    imgSrc: 'https://media-public.canva.com/oIBOU/MAGMeooIBOU/1/tl.png',
  },
];

const SalePage = () => {
  return (
    <>
      <DynamicTitle
        mainTitle="¿Qué ejercicios y actividades puedo hacer con mi familiar durante la visita?"
        subtitle="Según indicación médica, puedes realizar ejercicios de movilidad en cama, completar cuadernillos de estimulación cognitiva, o alguna otra actividad."
        paragraphText="A continuación ¡te enseñamos cuáles!"
      />
      <Row gutter={[16, 16]} justify="center">
        {resources.map((resource, idx) => (
          <Col key={idx} xs={24} sm={12} md={8} lg={6}>
            <Card style={{ ...cardStyle(idx), height: '100%' }} hoverable>
              {/* Contenedor de la imagen con altura fija */}
              <div style={{ height: '200px', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <Image
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: 'contain' }}
                  src={resource.imgSrc}
                />
              </div>
              <Title level={3} style={{ textAlign: 'center', textTransform: 'uppercase', textDecoration: 'underline' }}>
                {resource.title}
              </Title>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SalePage;
