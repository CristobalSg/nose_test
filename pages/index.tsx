import React from 'react';
import MainLayout from '@/components/MainLayout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Bienvenido a tu aplicación Next.js</h1>
    </MainLayout>
  );
};

export default Home;
