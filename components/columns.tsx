// columns.ts
import { Space, Tag } from 'antd';
import type { TableProps } from 'antd';
import type { Sale } from './types';

export const columns: TableProps<Sale>['columns'] = [
  {
    title: 'Producto',
    dataIndex: 'producto',
    key: 'producto',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Cantidad Vendida',
    dataIndex: 'cantidadVendida',
    key: 'cantidadVendida',
  },
  {
    title: 'Total de Venta',
    dataIndex: 'totalVenta',
    key: 'totalVenta',
    render: (total) => `$${total.toFixed(2)}`,
  },
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    key: 'fecha',
    render: (fecha) => new Date(fecha).toLocaleDateString(),
  },
  {
    title: 'Tags',
    key: 'tags',
    render: () => (
      <Tag color="green">
        Venta Diaria
      </Tag>
    ),
  },
  {
    title: 'Acción',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Detalles</a>
        <a>Eliminar</a>
      </Space>
    ),
  },
];
