import React from 'react';
import { useState } from 'react';
import { Layout, Button, Drawer } from 'antd';
import { HomeOutlined, InfoCircleOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [selected, setSelected] = useState('');

  const handleSelect = (value: string) => {
    setSelected(value);
  };
  return (
    <Layout>
      <Header style={headerStyle}>
        <div className="logo" style={logoStyle}>
          <img
            src="https://media-public.canva.com/-1js8/MAEq6P-1js8/1/s.svg" 
            alt="Cuidado del paciente" 
            style={logoImageStyle}
          />
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
                INFORMACIÓN
                </Button>
            </Link>
        </nav>

        {/* Botón de menú para pantallas pequeñas */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          style={{ display: 'none' }}
          className="menu-button"
        />
        
        {/* Drawer para navegación en dispositivos móviles */}
        <Drawer title="LA BUENA VISITA" placement="right">
          <Link href="/" passHref>
            <Button type="link" icon={<HomeOutlined />}>INICIO</Button>
          </Link>
          <Link href="/info" passHref>
            <Button type="link" icon={<InfoCircleOutlined />}>INFORMACIÓN</Button>
          </Link>
        </Drawer>
      </Header>

      <Content style={contentStyle}>
        <div style={contentContainerStyle}>
          {children}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Titulo ©{new Date().getFullYear()} Creado por Krishna Pavez Torres
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
  display: 'flex',
  gap: '10px',
};

const contentStyle = {
  padding: '0 48px',
  minHeight: '100vh',
  background: '#F0F8FF',
  fontSize: '1.25em'
};

const contentContainerStyle = {
    marginTop: 24,
    background: 'white',
    minHeight: 280,
    padding: 24,
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
};

export default MainLayout;
