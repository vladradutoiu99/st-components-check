import { useState } from "react";
import {
  Button,
  Dropdown,
  Table,
  ThemeProvider,
} from "@smart-touch-technologies/uicomponents";
import { DndColumnType } from "@smart-touch-technologies/uicomponents/dist/organisms/Table/DndTable";

import "./App.scss";

const data = {
  id: 202,
  documents_count: 0,
  color: null,
  storage_limit: 10000000000,
  storage_sum: 0,
  domain_prefix: "test",
  last_login: "2024-03-12T12:39:16Z",
  is_superuser: false,
  is_staff: false,
  modified_at: "2024-07-13T03:00:03Z",
  created_at: "2024-03-12T11:36:51Z",
  name: "Test 1",
  email: "danielcuznetov04+01@gmail.com",
  deleted_at: null,
  state: "active",
  logo: null,
  requested_reset_password: false,
  language: "us",
  storage_used_limit_email_sent: null,
  department: null,
  cif: null,
  external_e_factura_id: null,
  external_e_factura_updated_at: null,
  storage_used: 0,
  organization: 2,
  client: 5,
  access_level: 207,
};

const dataSource: any[] = Array.from({ length: 100 }).map((_, index) => ({
  ...data,
  id: index,
  name: `Test ${++index}`,
}));

function App() {
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: 1,
    pageSize: 10,
  });

  const columns: DndColumnType[] = [
    { title: "Email", dataIndex: "email", key: "email", dnd: true },
    { title: "Name", dataIndex: "name", key: "name", dnd: true },
    {
      title: "Categories",
      render: () => {
        return (
          <Dropdown
            trigger={["click"]}
            menu={{
              items: dataSource.map((value) => ({
                key: value.id,
                label: value.name,
              })),
            }}
          >
            <Button>OPEN</Button>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <ThemeProvider>
      <div style={{ height: "100vh" }}>
        <Table.DndTable
          columns={columns}
          dataSource={Array.from({ length: pagination.pageSize }).map(
            (_, index) => ({
              ...data,
              id: index,
              name: `Test ${++index}`,
            })
          )}
          pagination={{
            pageSize: pagination.pageSize,
            current: pagination.page,
            total: 500,
            pageSizeOptions: [10, 20, 30, 80, 120],
            onChange: (page, pageSize) => setPagination({ page, pageSize }),
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
