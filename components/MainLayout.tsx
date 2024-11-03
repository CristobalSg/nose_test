// import React, { useState } from 'react';
import { Layout, Button, Drawer } from 'antd';
import { HomeOutlined, InfoCircleOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
//   const [drawerVisible, setDrawerVisible] = useState(false);

//   const showDrawer = () => setDrawerVisible(true);
//   const closeDrawer = () => setDrawerVisible(false);

  return (
    <Layout>
      <Header style={{ fontFamily: 'Montserrat, sans-serif', background: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="logo" style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#006D5B', display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://media-public.canva.com/-1js8/MAEq6P-1js8/1/s.svg" 
            alt="Cuidado del paciente" 
            style={{ height: "30px", marginRight: '10px' }}
          />
            <span className="header-title">
                LA BUENA VISITA
            </span>
        </div>
        
        <div className="nav-buttons" style={{ display: 'flex', gap: '10px' }}>
          <Link href="/" passHref>
            <Button type="link" icon={<HomeOutlined />}>INICIO</Button>
          </Link>
          <Link href="/info" passHref>
            <Button type="link" icon={<InfoCircleOutlined />}>INFORMACIÓN</Button>
          </Link>
        </div>

        {/* Botón de menú para pantallas pequeñas */}
        <Button
          type="text"
          icon={<MenuOutlined />}
        //   onClick={showDrawer}
          style={{ display: 'none' }}
          className="menu-button"
        />

        {/* Drawer para navegación en dispositivos móviles */}
        <Drawer
          title="LA BUENA VISITA"
          placement="right"
        //   onClose={closeDrawer}
        //   visible={drawerVisible}
        >
          <Link href="/" passHref>
            <Button type="link" icon={<HomeOutlined />} >INICIO</Button>
          </Link>
          <Link href="/info" passHref>
            <Button type="link" icon={<InfoCircleOutlined />}>INFORMACIÓN</Button>
          </Link>
        </Drawer>
      </Header>

      <Content style={{ padding: '0 48px', minHeight: '100vh', background: '#F0F8FF' }}>
        <div
          style={{
            marginTop: 24,
            background: 'white',
            minHeight: 280,
            padding: 24,
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          }}
        >
          {children}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Titulo ©{new Date().getFullYear()} Creado por Krishna Pavez Torres
      </Footer>
    </Layout>
  );
};

export default MainLayout;
