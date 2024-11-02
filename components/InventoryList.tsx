import React, { useEffect, useState } from 'react';
import DynamicTable from './DynamicTable'; // Asegúrate de importar tu DynamicTable
import { ROUTES } from '@/utils/routes';
import type { TableProps } from 'antd';

interface InventoryItem {
  id: string;
  producto: string;
  cantidad: number;
  v_costo: number;
  v_venta: number;
  datos: {
    ganancia: number;
    invertido: number;
  };
  fecha: Date;
}

const InventoryList: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Configuración de columnas
  const columns: TableProps<InventoryItem>['columns'] = [
    {
      title: 'Producto',
      dataIndex: 'producto',
      key: 'producto',
    },
    {
      title: 'Cantidad',
      dataIndex: 'cantidad',
      key: 'cantidad',
    },
    {
      title: 'Costo',
      dataIndex: 'v_costo',
      key: 'v_costo',
      render: (value) => `$${value}`,
    },
    {
      title: 'Venta',
      dataIndex: 'v_venta',
      key: 'v_venta',
      render: (value) => `$${value}`,
    },
    {
      title: 'Ganancia',
      dataIndex: ['datos', 'ganancia'],
      key: 'ganancia',
      render: (value) => `$${value}`,
    },
    {
      title: 'Invertido',
      dataIndex: ['datos', 'invertido'],
      key: 'invertido',
      render: (value) => `$${value}`,
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
      render: (fecha) => new Date(fecha).toLocaleDateString(),
    },
  ];

  // Cargar el inventario
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch(ROUTES.INVENTORY);
        if (!response.ok) {
          throw new Error('Error al cargar el inventario');
        }
        const data = await response.json();
        setInventory(data.values);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Inventario</h1>
      <DynamicTable<InventoryItem>
        columns={columns}
        dataSource={inventory.map((item) => ({ ...item, key: item.id }))}
        loading={loading}
      />
    </div>
  );
};

export default InventoryList;
