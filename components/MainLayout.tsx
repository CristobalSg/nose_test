import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

const menuItems = [
  { key: '0', label: <Link href="/">Home</Link> },
  { key: '1', label: <Link href="/info">Info</Link> }
];

// Nuevo arreglo para Breadcrumb
const breadcrumbItems = [
  { title: '/' }, // Cambia esto si quieres añadir más elementos en el breadcrumb
];

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', background: "white" }}>
        <div className="demo-logo" />
        <Menu
          theme="light"
          mode="horizontal"
          // defaultSelectedKeys={["0"]} // Cambia según el elemento predeterminado que quieras
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      {/* <Content style={{padding: '0 48px', minHeight: "100vh", background: "#f0fdfa"}}> */}
      <Content style={{padding: '0 48px', minHeight: "100vh", background: '#F0F8FF'}}>
        {/* <Breadcrumb style={{ margin: '16px 0' }} items={breadcrumbItems} /> */}
        <div
          style={{
            marginTop: 24,
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            // borderRadius: borderRadiusLG,
            borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Titulo ©{new Date().getFullYear()} Creado Krishna Pavez Torres
      </Footer>
    </Layout>
  );
};

export default MainLayout;
