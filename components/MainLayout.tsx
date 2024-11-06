"use client";

import React, { useState, useEffect } from 'react';
import { Layout, Button, Drawer, Row, Col } from 'antd';
import { HomeOutlined, InfoCircleOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [selected, setSelected] = useState('');
  const [isDrawerVisible, setIsDrawerVisible] = useState(false); // Estado para el Drawer

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  const handleDrawerOpen = () => setIsDrawerVisible(true);
  const handleDrawerClose = () => setIsDrawerVisible(false);

  return (
    <Layout>
      <Header style={headerStyle}>
        <div className="logo" style={logoStyle}>
          <img src="https://media-public.canva.com/-1js8/MAEq6P-1js8/1/s.svg" alt="Cuidado del paciente" style={logoImageStyle} />
          <span className="header-title">LA BUENA VISITA</span>
        </div>

        <nav className="nav-buttons" style={navStyle}>
            <Link href="/" passHref>
              <Button
                type="link"
                style={{
                  fontWeight: selected === 'home' ? 'bold' : 'normal',
                  textDecoration: selected === 'home' ? 'underline' : 'none',
                  color: 'black',
                  fontSize: '1.25em',
                }}
                onClick={() => handleSelect('home')}
              >
                INICIO
              </Button>
            </Link>
            <Link href="/quehacer" passHref>
              <Button
                type="link"
                style={{
                  fontWeight: selected === 'quehacer' ? 'bold' : 'normal',
                  textDecoration: selected === 'quehacer' ? 'underline' : 'none',
                  color: 'black',
                  fontSize: '1.25em',
                }}
                onClick={() => handleSelect('quehacer')}
              >
                ¿QUÉ HACER?
              </Button>
            </Link>
            <Link href="/info" passHref>
              <Button
                type="link"
                style={{
                  fontWeight: selected === 'info' ? 'bold' : 'normal',
                  textDecoration: selected === 'info' ? 'underline' : 'none',
                  color: 'black',
                  fontSize: '1.25em',
                }}
                onClick={() => handleSelect('info')}
              >
                INFO
              </Button>
            </Link>
          </nav>

        <Button type="text" icon={<MenuOutlined />} className="menu-button" onClick={handleDrawerOpen} /> {/* Menú hamburguesa */}
        
        <Drawer title="LA BUENA VISITA" placement="right" onClose={handleDrawerClose} open={isDrawerVisible}>
          <Link href="/" passHref><Button type="link" icon={<HomeOutlined />} onClick={handleDrawerClose}>INICIO</Button></Link>
          <Link href="/quehacer" passHref><Button type="link" icon={<InfoCircleOutlined />} onClick={handleDrawerClose}>¿QUÉ HACER?</Button></Link>
          <Link href="/info" passHref><Button type="link" icon={<InfoCircleOutlined />}onClick={handleDrawerClose}>INFO</Button></Link>
        </Drawer>
      </Header>

      <Content style={{ ...contentStyle}}>
        <div className="cont-style" style={contentContainerStyle}>
          {children}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        <Row>
          <Col xs={12} md={12} sm={12}>
            <p>Complejo Asistencial Padre Las Casas</p>
            <p>(CAPLC) {new Date().getFullYear()}</p>
          </Col>
          <Col xs={12} md={12} sm={12}>
            <p style={{ fontWeight: 'bold' }}>Creado por:</p>
            <p>Krishna Pavez T.</p>
            <p>Pia Maldonado B.</p>
            <p>Natalia Fuentealba S.</p>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

// Estilos en variables para mayor claridad
const headerStyle = {
  fontFamily: 'Montserrat, sans-serif',
  background: '#fff',
  padding: '0 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const logoStyle = {
  fontSize: '1.5em',
  fontWeight: 'bold',
  color: '#006D5B',
  display: 'flex',
  alignItems: 'center',
};

const logoImageStyle = {
  height: "30px",
  marginRight: '10px',
};

const navStyle = {
  // display: 'flex',
  gap: '10px',
};

const contentStyle = {
  minHeight: '100vh',
  background: '#F0F8FF',
  fontSize: '1.25em',
  // padding: "0 40px"
};

const contentContainerStyle = {
  marginTop: 20,
  background: 'white',
  minHeight: 280,
  padding: 24,
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
};

export default MainLayout;
