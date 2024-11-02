import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';

interface DynamicTableProps<T> extends TableProps<T> {
  columns: TableProps<T>['columns'];
  dataSource: T[];
  loading?: boolean;
}

const DynamicTable = <T extends object>({ columns, dataSource, loading = false, ...props }: DynamicTableProps<T>) => {
  return (
    <Table<T>
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={{ pageSize: 5 }}
      {...props}
    />
  );
};

export default DynamicTable;
