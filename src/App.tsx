import { useState, useEffect } from "react";
import {
  Button,
  Dropdown,
  PdfDocumentType,
  Table,
  ThemeProvider,
} from "@smart-touch-technologies/uicomponents";
import { DndColumnType } from "@smart-touch-technologies/uicomponents/dist/organisms/Table/DndTable";
import { Flex, Input } from "antd";
import "./App.scss";
import { NameCell } from "./NameCell";



const t = (text: string) => text;



function App() {
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: 1,
    pageSize: 10,
  });

  enum FileType {
    DOC = 'doc',
    IMG = 'img',
    PDF = 'pdf'
  }


  const columns: DndColumnType<DataType>[] = [
    {
      title: t('documentsTableColumnsName'),
      key: 'Name',
      dataIndex: 'name',
      dnd: true,
      render: (text, record) => (
        // <NameCell
        //   withOutEdit={false}
        //   isLoading={false}
        //   name={text}
        //   operationId={record.operation_id}
        //   data={record}
        // />
        <Flex>
          <div className="file-icon">{<PdfDocumentType />}</div>
          <Input value={text}/>
        </Flex>
      ),
      width: '28%'
    },
    {
      title: t('documentsTableColumnsWorkspace'),
      dataIndex: 'workspace',
      key: 'Workspace',
      render: (text) => text,
      dnd: true
    },
    {
      title: t('documentsTableColumnsSource'),
      dataIndex: 'source',
      key: 'Source',
      dnd: true
    },
    {
      title: t('documentsTableColumnsNumberOfPages'),
      dataIndex: 'number_of_pages',
      key: '#-of-Pages',
      dnd: true,
      width: 200
    },
  ];

  const documents = [
      {
          "id": 58918,
          "name": "FURNIZORI A-D-page6.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop",
          "uploaded": "2024-07-04",
          "uploaded_datetime": "2024-07-04T11:21:19",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "6cf7c86a-e35a-42c2-912c-5f6ea5a390d7",
          "links": {
              "pdf_content": "/documents/6cf7c86a-e35a-42c2-912c-5f6ea5a390d7/download-link",
              "preview": "/v1/preview/6cf7c86a-e35a-42c2-912c-5f6ea5a390d7"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 58917,
          "name": "FURNIZORI A-D-page1-07-04-24-11-21-28.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-07-04",
          "uploaded_datetime": "2024-07-04T11:21:19",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "d032c692-404e-4c5b-8f24-4217acba2280",
          "links": {
              "pdf_content": "/documents/d032c692-404e-4c5b-8f24-4217acba2280/download-link",
              "preview": "/v1/preview/d032c692-404e-4c5b-8f24-4217acba2280"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 57594,
          "name": "altex4-07-02-24-11-06-39.pdf",
          "category": "facturi_interne",
          "status": "execution_in_progress",
          "uploaded": "2024-07-02",
          "uploaded_datetime": "2024-07-02T11:06:23",
          "task": 1,
          "workspace": "vs:se_joaca_eugen",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "6e7467d1-c4bd-44c2-96b3-a70b789cd4ed",
          "links": {
              "pdf_content": "/documents/6e7467d1-c4bd-44c2-96b3-a70b789cd4ed/download-link",
              "preview": "/v1/preview/6e7467d1-c4bd-44c2-96b3-a70b789cd4ed"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 57598,
          "name": "altex1_copy.pdf",
          "category": "facturi_interne",
          "status": "hitl_dropped",
          "uploaded": "2024-07-02",
          "uploaded_datetime": "2024-07-02T11:06:23",
          "task": 1,
          "workspace": "vs:se_joaca_eugen",
          "source": "user-upload",
          "number_of_pages": 2,
          "type": FileType.PDF,
          "operation_id": "5fc86e99-1485-4a37-b607-45f89e13d484",
          "links": {
              "pdf_content": "/documents/5fc86e99-1485-4a37-b607-45f89e13d484/download-link",
              "preview": "/v1/preview/5fc86e99-1485-4a37-b607-45f89e13d484"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 57595,
          "name": "Arceda_08042022_106261-07-02-24-11-06-37.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-07-02",
          "uploaded_datetime": "2024-07-02T11:06:23",
          "task": 1,
          "workspace": "vs:se_joaca_eugen",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "d75cdc07-e5e7-42ec-b01d-78623b53475b",
          "links": {
              "pdf_content": "/documents/d75cdc07-e5e7-42ec-b01d-78623b53475b/download-link",
              "preview": "/v1/preview/d75cdc07-e5e7-42ec-b01d-78623b53475b"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 57596,
          "name": "ApaNovaPL_222102636-07-02-24-11-06-39.pdf",
          "category": "facturi_utilitati",
          "status": "execution_finished",
          "uploaded": "2024-07-02",
          "uploaded_datetime": "2024-07-02T11:06:23",
          "task": 0,
          "workspace": "vs:se_joaca_eugen",
          "source": "user-upload",
          "number_of_pages": 2,
          "type": FileType.PDF,
          "operation_id": "720943fb-33ea-4d9b-b43a-8130892a991d",
          "links": {
              "pdf_content": "/documents/720943fb-33ea-4d9b-b43a-8130892a991d/download-link",
              "preview": "/v1/preview/720943fb-33ea-4d9b-b43a-8130892a991d"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 57600,
          "name": "Aleea_15_11_2021_2335.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-07-02",
          "uploaded_datetime": "2024-07-02T11:06:23",
          "task": 1,
          "workspace": "vs:se_joaca_eugen",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "146c24fd-1345-4431-b9e9-ca00beccb8c4",
          "links": {
              "pdf_content": "/documents/146c24fd-1345-4431-b9e9-ca00beccb8c4/download-link",
              "preview": "/v1/preview/146c24fd-1345-4431-b9e9-ca00beccb8c4"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 57599,
          "name": "Aktcom_21102021_2755.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-07-02",
          "uploaded_datetime": "2024-07-02T11:06:23",
          "task": 1,
          "workspace": "vs:se_joaca_eugen",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "24960bce-0d35-4011-b858-84163ef141a5",
          "links": {
              "pdf_content": "/documents/24960bce-0d35-4011-b858-84163ef141a5/download-link",
              "preview": "/v1/preview/24960bce-0d35-4011-b858-84163ef141a5"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 57601,
          "name": "Act_02_06_2022_00184.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-07-02",
          "uploaded_datetime": "2024-07-02T11:06:23",
          "task": 1,
          "workspace": "vs:se_joaca_eugen",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "5e2a0775-7faa-456d-b794-aca31861e7d4",
          "links": {
              "pdf_content": "/documents/5e2a0775-7faa-456d-b794-aca31861e7d4/download-link",
              "preview": "/v1/preview/5e2a0775-7faa-456d-b794-aca31861e7d4"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 57597,
          "name": "Accquickfix_03082022_5473-07-02-24-11-06-38.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-07-02",
          "uploaded_datetime": "2024-07-02T11:06:23",
          "task": 1,
          "workspace": "vs:se_joaca_eugen",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "0cae6a60-6260-4d9a-8b4e-a3c824a21531",
          "links": {
              "pdf_content": "/documents/0cae6a60-6260-4d9a-8b4e-a3c824a21531/download-link",
              "preview": "/v1/preview/0cae6a60-6260-4d9a-8b4e-a3c824a21531"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 57467,
          "name": "elena (1)-27-06-2024_14:56:29.xml",
          "category": "no_category",
          "status": "human_in_the_loop",
          "uploaded": "2024-06-27",
          "uploaded_datetime": "2024-06-27T14:56:30",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "b1081e89-1502-4826-a88a-5c620facda79",
          "links": {
              "pdf_content": "/documents/b1081e89-1502-4826-a88a-5c620facda79/download-link",
              "preview": "/v1/preview/b1081e89-1502-4826-a88a-5c620facda79"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 57255,
          "name": "as tehnic_2211-page2-06-18-24-12-25-22.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-06-18",
          "uploaded_datetime": "2024-06-18T12:25:21",
          "task": 5,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "16386947-6f71-4053-9696-5b9eb28d132c",
          "links": {
              "pdf_content": "/documents/16386947-6f71-4053-9696-5b9eb28d132c/download-link",
              "preview": "/v1/preview/16386947-6f71-4053-9696-5b9eb28d132c"
          },
          "tasks": [
              "Human validation always on.",
              "data_bon - regex mismatch",
              "data_bon - match failed",
              "data_bon - match failed",
              "cui_client - range exceeded"
          ],
          "has_duplicates": false
      },
      {
          "id": 57254,
          "name": "as tehnic_2211-page1-06-18-24-12-25-22.pdf",
          "category": "bonuri_facturi_simplificate",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-06-18",
          "uploaded_datetime": "2024-06-18T12:25:21",
          "task": 4,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "aaef140c-8b5e-436a-b042-83406b7eab9e",
          "links": {
              "pdf_content": "/documents/aaef140c-8b5e-436a-b042-83406b7eab9e/download-link",
              "preview": "/v1/preview/aaef140c-8b5e-436a-b042-83406b7eab9e"
          },
          "tasks": [
              "Human validation always on.",
              "data_bon - regex mismatch",
              "data_bon - match failed",
              "data_bon - match failed"
          ],
          "has_duplicates": false
      },
      {
          "id": 56622,
          "name": "Bonuri_1_Aprilie_pdf-P6_0_png.pdf",
          "category": "bonuri_facturi_simplificate",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-06-03",
          "uploaded_datetime": "2024-06-03T10:46:15",
          "task": 9,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "25c0df87-f145-4566-ad44-c5a269ebc03b",
          "links": {
              "pdf_content": "/documents/25c0df87-f145-4566-ad44-c5a269ebc03b/download-link",
              "preview": "/v1/preview/25c0df87-f145-4566-ad44-c5a269ebc03b"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 56621,
          "name": "SkyTower_23062022_0357-06-03-24-09-51-14.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-06-03",
          "uploaded_datetime": "2024-06-03T09:51:06",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "1cfb4780-d422-4c68-94cf-b9e02206fd27",
          "links": {
              "pdf_content": "/documents/1cfb4780-d422-4c68-94cf-b9e02206fd27/download-link",
              "preview": "/v1/preview/1cfb4780-d422-4c68-94cf-b9e02206fd27"
          },
          "tasks": [
              "Human validation always on.",
              "pret_unitar_articol - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 56365,
          "name": "2024-05-20_GRAND_GSM_TELONLINE_S_R_L__4570_2024-05-20_4286488783-27-05-2024_11:33:27.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:42",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "35c3d682-dadc-4cbd-a306-ee0b8a77506c",
          "links": {
              "pdf_content": "/documents/35c3d682-dadc-4cbd-a306-ee0b8a77506c/download-link",
              "preview": "/v1/preview/35c3d682-dadc-4cbd-a306-ee0b8a77506c"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56364,
          "name": "2024-05-18_DANTE_INTERNATIONAL_SA_259200432010_2024-05-18_4284742713-27-05-2024_11:33:26.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:42",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "20be1475-864f-4440-94c7-020122a5bf4b",
          "links": {
              "pdf_content": "/documents/20be1475-864f-4440-94c7-020122a5bf4b/download-link",
              "preview": "/v1/preview/20be1475-864f-4440-94c7-020122a5bf4b"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56368,
          "name": "2024-05-15_AVANT_BUSINESS___TRAVEL_SOLUTIONS_SRL_5562_2024-05-20_4274325982-27-05-2024_11:33:34.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:42",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "2a811d0a-496f-47e1-b12e-8adaa1f294ca",
          "links": {
              "pdf_content": "/documents/2a811d0a-496f-47e1-b12e-8adaa1f294ca/download-link",
              "preview": "/v1/preview/2a811d0a-496f-47e1-b12e-8adaa1f294ca"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56369,
          "name": "2024-05-13_CUSTOM_ARCHITECTURE_SRL_2279_2024-05-13_4266573712-27-05-2024_11:33:37.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:42",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "fc6a4d17-4f01-4c81-9a91-432d051eaa91",
          "links": {
              "pdf_content": "/documents/fc6a4d17-4f01-4c81-9a91-432d051eaa91/download-link",
              "preview": "/v1/preview/fc6a4d17-4f01-4c81-9a91-432d051eaa91"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56367,
          "name": "2024-05-10_UniCredit_Leasing_Fleet_Management_S_R_L__299551_2024-05-16_4270996102-27-05-2024_11:33:32.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:42",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "18e6546a-d5c9-4b47-a8df-a8f42b0b5f4b",
          "links": {
              "pdf_content": "/documents/18e6546a-d5c9-4b47-a8df-a8f42b0b5f4b/download-link",
              "preview": "/v1/preview/18e6546a-d5c9-4b47-a8df-a8f42b0b5f4b"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56366,
          "name": "2024-05-02_AUTONOM_SERVICES_SA_160036_2024-05-07_4258957236-27-05-2024_11:33:29.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:42",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "b2f7af72-647d-4204-b43a-1463c37b70ca",
          "links": {
              "pdf_content": "/documents/b2f7af72-647d-4204-b43a-1463c37b70ca/download-link",
              "preview": "/v1/preview/b2f7af72-647d-4204-b43a-1463c37b70ca"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56370,
          "name": "2024-05-02_ARVAL_SERVICE_LEASE_ROMANIA_SRL_2002307219_2024-05-22_4277494268-27-05-2024_11:33:38.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:42",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "f17bcb0e-7425-45e6-9f47-a68c40f434f3",
          "links": {
              "pdf_content": "/documents/f17bcb0e-7425-45e6-9f47-a68c40f434f3/download-link",
              "preview": "/v1/preview/f17bcb0e-7425-45e6-9f47-a68c40f434f3"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56363,
          "name": "2024-04-18_DKV_Euro_Service_GmbH_+_Co__KG_24000750362997_2024-05-24_4280701114-27-05-2024_11:33:24.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:42",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "3c4c1fc2-0cbc-47e3-8faa-d2edda4312be",
          "links": {
              "pdf_content": "/documents/3c4c1fc2-0cbc-47e3-8faa-d2edda4312be/download-link",
              "preview": "/v1/preview/3c4c1fc2-0cbc-47e3-8faa-d2edda4312be"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56359,
          "name": "2024-05-24_LA_FANTANA_SRL_16353208_2024-05-24_4292811819-27-05-2024_11:33:13.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "edfa217a-2906-4f5c-8419-ca4cdc50f3c8",
          "links": {
              "pdf_content": "/documents/edfa217a-2906-4f5c-8419-ca4cdc50f3c8/download-link",
              "preview": "/v1/preview/edfa217a-2906-4f5c-8419-ca4cdc50f3c8"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56360,
          "name": "2024-05-24_DANTE_INTERNATIONAL_SA_259901125037_2024-05-24_4279965362-27-05-2024_11:33:16.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "354d43c5-bf71-417c-8c67-2001a38d1955",
          "links": {
              "pdf_content": "/documents/354d43c5-bf71-417c-8c67-2001a38d1955/download-link",
              "preview": "/v1/preview/354d43c5-bf71-417c-8c67-2001a38d1955"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56351,
          "name": "2024-05-16_DANTE_INTERNATIONAL_SA_259200423427_2024-05-16_4270996162-27-05-2024_11:32:59.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "edd2332d-af6d-4e56-814c-d2927ec7fc4c",
          "links": {
              "pdf_content": "/documents/edd2332d-af6d-4e56-814c-d2927ec7fc4c/download-link",
              "preview": "/v1/preview/edd2332d-af6d-4e56-814c-d2927ec7fc4c"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56344,
          "name": "2024-05-16_Automobile_Bavaria_SRL_521060889_2024-05-16_4281736789-27-05-2024_11:32:48.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "39f32ea4-536d-477f-b008-646bff7904ef",
          "links": {
              "pdf_content": "/documents/39f32ea4-536d-477f-b008-646bff7904ef/download-link",
              "preview": "/v1/preview/39f32ea4-536d-477f-b008-646bff7904ef"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56343,
          "name": "2024-05-16_Automobile_Bavaria_SRL_521060889_2024-05-16_4281736789 (1)-27-05-2024_11:32:47.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "a45daeda-7610-4df4-98ed-6b5a626b9b5f",
          "links": {
              "pdf_content": "/documents/a45daeda-7610-4df4-98ed-6b5a626b9b5f/download-link",
              "preview": "/v1/preview/a45daeda-7610-4df4-98ed-6b5a626b9b5f"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56345,
          "name": "2024-05-16_Automobile_Bavaria_SRL_511089385_2024-05-16_4281822837-27-05-2024_11:32:49.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "2a32cfd7-77fd-4bc1-a33a-839055aa635c",
          "links": {
              "pdf_content": "/documents/2a32cfd7-77fd-4bc1-a33a-839055aa635c/download-link",
              "preview": "/v1/preview/2a32cfd7-77fd-4bc1-a33a-839055aa635c"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56350,
          "name": "2024-05-15_ZONE_DEVELOPMENT_SRL_24089_2024-05-16_4270887764-27-05-2024_11:32:58.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "4a57382f-2066-49c3-aced-f4b8c82288ab",
          "links": {
              "pdf_content": "/documents/4a57382f-2066-49c3-aced-f4b8c82288ab/download-link",
              "preview": "/v1/preview/4a57382f-2066-49c3-aced-f4b8c82288ab"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56349,
          "name": "2024-05-15_Centrul_Medical_Unirea_SRL_1458103_2024-05-16_4269607284-27-05-2024_11:32:56.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "ab3bd05f-ac6a-45ca-a484-4a0a023b9764",
          "links": {
              "pdf_content": "/documents/ab3bd05f-ac6a-45ca-a484-4a0a023b9764/download-link",
              "preview": "/v1/preview/ab3bd05f-ac6a-45ca-a484-4a0a023b9764"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56346,
          "name": "2024-05-13_DHL_International_Romania_SRL_001435795_2024-05-16_4282782973-27-05-2024_11:32:50.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "65b6014f-d326-4f83-8405-04ee30443110",
          "links": {
              "pdf_content": "/documents/65b6014f-d326-4f83-8405-04ee30443110/download-link",
              "preview": "/v1/preview/65b6014f-d326-4f83-8405-04ee30443110"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56348,
          "name": "2024-05-10_DORAL_CLEANING_SRL_5736_2024-05-13_4265510970-27-05-2024_11:32:52.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "99192477-fe7d-4527-83bf-ab146122a7a0",
          "links": {
              "pdf_content": "/documents/99192477-fe7d-4527-83bf-ab146122a7a0/download-link",
              "preview": "/v1/preview/99192477-fe7d-4527-83bf-ab146122a7a0"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56342,
          "name": "2024-04-29_TIRE_EXPERT_SRL_24000000599_2024-05-07_4270417373-27-05-2024_11:32:46.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "12810f87-25f0-4053-9969-cf05a4501f54",
          "links": {
              "pdf_content": "/documents/12810f87-25f0-4053-9969-cf05a4501f54/download-link",
              "preview": "/v1/preview/12810f87-25f0-4053-9969-cf05a4501f54"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56341,
          "name": "2024-04-29_METRO_CASH___CARRY_ROMANIA_SRL_4032000012023851_2024-04-30_4266139749-27-05-2024_11:32:45.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "170c7883-5633-446d-861b-21cac68e3cc3",
          "links": {
              "pdf_content": "/documents/170c7883-5633-446d-861b-21cac68e3cc3/download-link",
              "preview": "/v1/preview/170c7883-5633-446d-861b-21cac68e3cc3"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56347,
          "name": "2024-04-15_METRO_CASH___CARRY_ROMANIA_SRL_4032000016013107_2024-04-16_4238878332-27-05-2024_11:32:51.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "6453a675-8d82-4d5e-bfca-a8ad0de6468f",
          "links": {
              "pdf_content": "/documents/6453a675-8d82-4d5e-bfca-a8ad0de6468f/download-link",
              "preview": "/v1/preview/6453a675-8d82-4d5e-bfca-a8ad0de6468f"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56339,
          "name": "2024-04-04_ROMTREAT_S_R_L__00588_2024-04-05_4235499579-27-05-2024_11:32:43.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "26ea3b10-1177-4dd1-8fad-4bea9c497c2c",
          "links": {
              "pdf_content": "/documents/26ea3b10-1177-4dd1-8fad-4bea9c497c2c/download-link",
              "preview": "/v1/preview/26ea3b10-1177-4dd1-8fad-4bea9c497c2c"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56362,
          "name": "2024-04-04_DKV_Euro_Service_GmbH_+_Co__KG_24000742641997_2024-05-24_4280505888-27-05-2024_11:33:22.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "336e9c96-7b63-476b-80c2-ba223b49c13f",
          "links": {
              "pdf_content": "/documents/336e9c96-7b63-476b-80c2-ba223b49c13f/download-link",
              "preview": "/v1/preview/336e9c96-7b63-476b-80c2-ba223b49c13f"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56354,
          "name": "2024-04-01_ARVAL_SERVICE_LEASE_ROMANIA_SRL_2002304936_2024-05-23_4278851458-27-05-2024_11:33:04.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "c36e8f12-5581-44ae-9b92-bfd5867b7c15",
          "links": {
              "pdf_content": "/documents/c36e8f12-5581-44ae-9b92-bfd5867b7c15/download-link",
              "preview": "/v1/preview/c36e8f12-5581-44ae-9b92-bfd5867b7c15"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56353,
          "name": "2024-04-01_ARVAL_SERVICE_LEASE_ROMANIA_SRL_2002304935_2024-05-23_4278851444-27-05-2024_11:33:02.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "7050dc72-636b-4de8-8330-84da087cc5c3",
          "links": {
              "pdf_content": "/documents/7050dc72-636b-4de8-8330-84da087cc5c3/download-link",
              "preview": "/v1/preview/7050dc72-636b-4de8-8330-84da087cc5c3"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56361,
          "name": "2024-03-20_DKV_Euro_Service_GmbH_+_Co__KG_24000734376997_2024-05-24_4280228670-27-05-2024_11:33:19.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "d78f897b-7a20-4bf4-b4dc-9220475236bb",
          "links": {
              "pdf_content": "/documents/d78f897b-7a20-4bf4-b4dc-9220475236bb/download-link",
              "preview": "/v1/preview/d78f897b-7a20-4bf4-b4dc-9220475236bb"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56340,
          "name": "2024-03-15__MIC_SI_ASOCIATII_-_Societate_Profesionala_de_Avocati_cu_Raspundere_Limitata__202428_2024-03-21_4207019602-27-05-2024_11:32:44.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "34175a6b-0572-4d4d-a388-2f26ee7a3b6a",
          "links": {
              "pdf_content": "/documents/34175a6b-0572-4d4d-a388-2f26ee7a3b6a/download-link",
              "preview": "/v1/preview/34175a6b-0572-4d4d-a388-2f26ee7a3b6a"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56338,
          "name": "2024-03-15_ZONE_DEVELOPMENT_SRL_24047_2024-03-19_4212018951-27-05-2024_11:32:42.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "0533ef3d-2d1f-43bc-847f-ddfb6f5392e9",
          "links": {
              "pdf_content": "/documents/0533ef3d-2d1f-43bc-847f-ddfb6f5392e9/download-link",
              "preview": "/v1/preview/0533ef3d-2d1f-43bc-847f-ddfb6f5392e9"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56357,
          "name": "2024-03-05_DKV_Euro_Service_GmbH_+_Co__KG_24000727644997_2024-05-24_4291591819-27-05-2024_11:33:08.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "4d9d30e7-7782-487e-8fbb-f66529435917",
          "links": {
              "pdf_content": "/documents/4d9d30e7-7782-487e-8fbb-f66529435917/download-link",
              "preview": "/v1/preview/4d9d30e7-7782-487e-8fbb-f66529435917"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56358,
          "name": "2024-03-04_Birou_Executor_Judecatoresc_Vint_Adrian_Cosmin_710_2024-05-24_4292340407-27-05-2024_11:33:11.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "ab83a715-1811-4569-9355-6f379c8e33a3",
          "links": {
              "pdf_content": "/documents/ab83a715-1811-4569-9355-6f379c8e33a3/download-link",
              "preview": "/v1/preview/ab83a715-1811-4569-9355-6f379c8e33a3"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56356,
          "name": "2024-02-20_DKV_Euro_Service_GmbH_+_Co__KG_24000723940997_2024-05-24_4291495195-27-05-2024_11:33:07.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "0912d55a-13f5-4c78-9185-ade6aa15a52d",
          "links": {
              "pdf_content": "/documents/0912d55a-13f5-4c78-9185-ade6aa15a52d/download-link",
              "preview": "/v1/preview/0912d55a-13f5-4c78-9185-ade6aa15a52d"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56355,
          "name": "2024-02-05_DKV_Euro_Service_GmbH_+_Co__KG_24000717622997_2024-05-23_4279094804-27-05-2024_11:33:05.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "de4cbb70-475e-4175-900d-7f886ca574cd",
          "links": {
              "pdf_content": "/documents/de4cbb70-475e-4175-900d-7f886ca574cd/download-link",
              "preview": "/v1/preview/de4cbb70-475e-4175-900d-7f886ca574cd"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56352,
          "name": "2024-01-18_DKV_Euro_Service_GmbH_+_Co__KG_24000707731997_2024-05-23_4278849142-27-05-2024_11:33:01.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:41",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "75ab2273-1712-41ba-9fb6-154e2a53dc46",
          "links": {
              "pdf_content": "/documents/75ab2273-1712-41ba-9fb6-154e2a53dc46/download-link",
              "preview": "/v1/preview/75ab2273-1712-41ba-9fb6-154e2a53dc46"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56337,
          "name": "2024-05-07_Arggo_Software_Development___Consulting_2024001350_2024-05-07_4259317958-27-05-2024_11:32:03.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-27",
          "uploaded_datetime": "2024-05-27T11:32:03",
          "task": 1,
          "workspace": "vs:test_workspace2",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "6449be3e-aa82-41b9-bb17-fe7831bb74b8",
          "links": {
              "pdf_content": "/documents/6449be3e-aa82-41b9-bb17-fe7831bb74b8/download-link",
              "preview": "/v1/preview/6449be3e-aa82-41b9-bb17-fe7831bb74b8"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56151,
          "name": "BrandDesign_08_06_2022_3297081.pdf",
          "category": "facturi_interne",
          "status": "hitl_dropped",
          "uploaded": "2024-05-21",
          "uploaded_datetime": "2024-05-21T14:57:36",
          "task": 1,
          "workspace": "vs:test",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "e6f3f990-ce69-4e4d-b325-f895b8539994",
          "links": {
              "pdf_content": "/documents/e6f3f990-ce69-4e4d-b325-f895b8539994/download-link",
              "preview": "/v1/preview/e6f3f990-ce69-4e4d-b325-f895b8539994"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56106,
          "name": "04_04_2022_C_D AQUA TEAM SRL_12790.pdf",
          "category": "facturi_interne",
          "status": "hitl_dropped",
          "uploaded": "2024-05-21",
          "uploaded_datetime": "2024-05-21T09:36:30",
          "task": 1,
          "workspace": "vs:test",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "2764b5e3-9a87-47e5-989b-5e8ad783f89a",
          "links": {
              "pdf_content": "/documents/2764b5e3-9a87-47e5-989b-5e8ad783f89a/download-link",
              "preview": "/v1/preview/2764b5e3-9a87-47e5-989b-5e8ad783f89a"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56105,
          "name": "BrandDesign_08_06_2022_3297081-05-21-24-09-32-31.pdf",
          "category": "facturi_interne",
          "status": "execution_in_progress",
          "uploaded": "2024-05-21",
          "uploaded_datetime": "2024-05-21T09:32:26",
          "task": 1,
          "workspace": "vs:se_mai_joaca_eugen",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "2f094b02-6158-46e5-9471-844f53eb7dfa",
          "links": {
              "pdf_content": "/documents/2f094b02-6158-46e5-9471-844f53eb7dfa/download-link",
              "preview": "/v1/preview/2f094b02-6158-46e5-9471-844f53eb7dfa"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 56100,
          "name": "dee_149-05-21-24-09-12-06.pdf",
          "category": "facturi_interne",
          "status": "hitl_dropped",
          "uploaded": "2024-05-21",
          "uploaded_datetime": "2024-05-21T09:12:00",
          "task": 1,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "1b1ae9b5-84bb-4500-ae25-ac8e2d0d91b3",
          "links": {
              "pdf_content": "/documents/1b1ae9b5-84bb-4500-ae25-ac8e2d0d91b3/download-link",
              "preview": "/v1/preview/1b1ae9b5-84bb-4500-ae25-ac8e2d0d91b3"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 56029,
          "name": "as tehnic_2489-05-20-24-10-35-13.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-05-20",
          "uploaded_datetime": "2024-05-20T10:35:07",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "e6afe8c0-a1a0-4d9d-bae6-09d891fce7b6",
          "links": {
              "pdf_content": "/documents/e6afe8c0-a1a0-4d9d-bae6-09d891fce7b6/download-link",
              "preview": "/v1/preview/e6afe8c0-a1a0-4d9d-bae6-09d891fce7b6"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 56028,
          "name": "as tehnic_2489 - Copy-05-20-24-10-35-06.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-05-20",
          "uploaded_datetime": "2024-05-20T10:35:01",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "abb8c9db-686c-48d2-9ee5-3774bf270a32",
          "links": {
              "pdf_content": "/documents/abb8c9db-686c-48d2-9ee5-3774bf270a32/download-link",
              "preview": "/v1/preview/abb8c9db-686c-48d2-9ee5-3774bf270a32"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 56027,
          "name": "as tehnic_2489-05-20-24-10-32-16.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-05-20",
          "uploaded_datetime": "2024-05-20T10:32:05",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "337516be-6d8c-4943-8b25-5dc0415f82e1",
          "links": {
              "pdf_content": "/documents/337516be-6d8c-4943-8b25-5dc0415f82e1/download-link",
              "preview": "/v1/preview/337516be-6d8c-4943-8b25-5dc0415f82e1"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 55951,
          "name": "Dacora_13122021_7125013-05-17-24-12-57-06.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-05-17",
          "uploaded_datetime": "2024-05-17T12:56:50",
          "task": 0,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "4dc7ef1b-57a9-4a8b-ae79-e7ce0eaec6e1",
          "links": {
              "pdf_content": "/documents/4dc7ef1b-57a9-4a8b-ae79-e7ce0eaec6e1/download-link",
              "preview": "/v1/preview/4dc7ef1b-57a9-4a8b-ae79-e7ce0eaec6e1"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 55950,
          "name": "Craft_02_07_2022_ 93.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-05-17",
          "uploaded_datetime": "2024-05-17T12:56:50",
          "task": 1,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "0d8ee530-6c0e-420c-9f40-a73417a47632",
          "links": {
              "pdf_content": "/documents/0d8ee530-6c0e-420c-9f40-a73417a47632/download-link",
              "preview": "/v1/preview/0d8ee530-6c0e-420c-9f40-a73417a47632"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 55949,
          "name": "CuYgrec_04_08_2022_0060-05-17-24-12-57-00.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-05-17",
          "uploaded_datetime": "2024-05-17T12:56:49",
          "task": 1,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "fb8bc8ec-f2a4-4c83-bb1e-b9964fae96db",
          "links": {
              "pdf_content": "/documents/fb8bc8ec-f2a4-4c83-bb1e-b9964fae96db/download-link",
              "preview": "/v1/preview/fb8bc8ec-f2a4-4c83-bb1e-b9964fae96db"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 55948,
          "name": "CompDeApa_27_06_2022_47664-05-17-24-12-57-02.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-05-17",
          "uploaded_datetime": "2024-05-17T12:56:49",
          "task": 1,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "7ef65e9f-b896-4f47-9a88-16af78b95e49",
          "links": {
              "pdf_content": "/documents/7ef65e9f-b896-4f47-9a88-16af78b95e49/download-link",
              "preview": "/v1/preview/7ef65e9f-b896-4f47-9a88-16af78b95e49"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 55947,
          "name": "Dante_06_07_2022_239200840864-05-17-24-12-57-00.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-05-17",
          "uploaded_datetime": "2024-05-17T12:56:48",
          "task": 0,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "83c2c424-435f-4b05-bd36-4bd03b15eac6",
          "links": {
              "pdf_content": "/documents/83c2c424-435f-4b05-bd36-4bd03b15eac6/download-link",
              "preview": "/v1/preview/83c2c424-435f-4b05-bd36-4bd03b15eac6"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 55946,
          "name": "Ctideal_07_02_2022_0026-05-17-24-12-56-54.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-05-17",
          "uploaded_datetime": "2024-05-17T12:56:48",
          "task": 1,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "cafcf5db-0b44-469a-82e5-0d29fcc0f1e3",
          "links": {
              "pdf_content": "/documents/cafcf5db-0b44-469a-82e5-0d29fcc0f1e3/download-link",
              "preview": "/v1/preview/cafcf5db-0b44-469a-82e5-0d29fcc0f1e3"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 55945,
          "name": "Crisprod_08082022_264268-05-17-24-12-56-55.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-05-17",
          "uploaded_datetime": "2024-05-17T12:56:48",
          "task": 1,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "c0b5027c-748a-4068-9fb1-3a413c661c5b",
          "links": {
              "pdf_content": "/documents/c0b5027c-748a-4068-9fb1-3a413c661c5b/download-link",
              "preview": "/v1/preview/c0b5027c-748a-4068-9fb1-3a413c661c5b"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 55915,
          "name": "dee_149-05-17-24-11-49-08.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-05-17",
          "uploaded_datetime": "2024-05-17T11:49:03",
          "task": 0,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "24af66c1-cb3f-43d9-b03c-dfe5b27a9852",
          "links": {
              "pdf_content": "/documents/24af66c1-cb3f-43d9-b03c-dfe5b27a9852/download-link",
              "preview": "/v1/preview/24af66c1-cb3f-43d9-b03c-dfe5b27a9852"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 55902,
          "name": "Ekonect_03_08_2022_EK0085-05-17-24-10-12-29.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-05-17",
          "uploaded_datetime": "2024-05-17T10:12:22",
          "task": 1,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "7c42f4c0-9f93-4ef6-b9af-bfb0f108db6a",
          "links": {
              "pdf_content": "/documents/7c42f4c0-9f93-4ef6-b9af-bfb0f108db6a/download-link",
              "preview": "/v1/preview/7c42f4c0-9f93-4ef6-b9af-bfb0f108db6a"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 55901,
          "name": "CCIFER_14_07_2022_0000778-05-17-24-10-12-13.pdf",
          "category": "no_category",
          "status": "dropped",
          "uploaded": "2024-05-17",
          "uploaded_datetime": "2024-05-17T10:12:07",
          "task": 0,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "50af0e7c-1eb4-479d-a639-e3f1085ae06f",
          "links": {
              "pdf_content": "/documents/50af0e7c-1eb4-479d-a639-e3f1085ae06f/download-link",
              "preview": "/v1/preview/50af0e7c-1eb4-479d-a639-e3f1085ae06f"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 55899,
          "name": "elena-17-05-2024_09:04:59.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-05-17",
          "uploaded_datetime": "2024-05-17T09:04:59",
          "task": 0,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "619d1899-e500-43b8-83ef-3e5ecf595499",
          "links": {
              "pdf_content": "/documents/619d1899-e500-43b8-83ef-3e5ecf595499/download-link",
              "preview": "/v1/preview/619d1899-e500-43b8-83ef-3e5ecf595499"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 55748,
          "name": "as tehnic_2489 - Copy-05-14-24-11-44-56.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-05-14",
          "uploaded_datetime": "2024-05-14T11:44:51",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "8966565c-0b1c-4692-bcff-dbf021663b8a",
          "links": {
              "pdf_content": "/documents/8966565c-0b1c-4692-bcff-dbf021663b8a/download-link",
              "preview": "/v1/preview/8966565c-0b1c-4692-bcff-dbf021663b8a"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 55746,
          "name": "as tehnic_2489-05-14-24-11-43-09.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-05-14",
          "uploaded_datetime": "2024-05-14T11:43:01",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "8d6c6e6e-dd8a-4fd5-b284-b0cacadba8c1",
          "links": {
              "pdf_content": "/documents/8d6c6e6e-dd8a-4fd5-b284-b0cacadba8c1/download-link",
              "preview": "/v1/preview/8d6c6e6e-dd8a-4fd5-b284-b0cacadba8c1"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 55745,
          "name": "as tehnic_2489 - Copy.pdf",
          "category": "facturi_interne",
          "status": "execution_finished",
          "uploaded": "2024-05-14",
          "uploaded_datetime": "2024-05-14T11:43:01",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "a7dde149-f86b-4d33-b84d-cfc658d49f78",
          "links": {
              "pdf_content": "/documents/a7dde149-f86b-4d33-b84d-cfc658d49f78/download-link",
              "preview": "/v1/preview/a7dde149-f86b-4d33-b84d-cfc658d49f78"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 55747,
          "name": "Dedeman_28012022-05-14-24-11-43-12.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-05-14",
          "uploaded_datetime": "2024-05-14T11:43:01",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "5d2737fa-8d31-4a31-a4ab-2642ec7c25d0",
          "links": {
              "pdf_content": "/documents/5d2737fa-8d31-4a31-a4ab-2642ec7c25d0/download-link",
              "preview": "/v1/preview/5d2737fa-8d31-4a31-a4ab-2642ec7c25d0"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 55744,
          "name": "Dedeman_28012022 - Copy.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-05-14",
          "uploaded_datetime": "2024-05-14T11:43:01",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "2803ed42-5a90-435e-b339-c98a0008df67",
          "links": {
              "pdf_content": "/documents/2803ed42-5a90-435e-b339-c98a0008df67/download-link",
              "preview": "/v1/preview/2803ed42-5a90-435e-b339-c98a0008df67"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 55389,
          "name": "20240430 Stral Big inv 5456+ annex-page2.pdf",
          "category": "proces_verbal",
          "status": "execution_finished",
          "uploaded": "2024-05-07",
          "uploaded_datetime": "2024-05-07T11:31:45",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "469a2cd4-a0ed-479e-be88-020e3703a7a6",
          "links": {
              "pdf_content": "/documents/469a2cd4-a0ed-479e-be88-020e3703a7a6/download-link",
              "preview": "/v1/preview/469a2cd4-a0ed-479e-be88-020e3703a7a6"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 55388,
          "name": "20240430 Stral Big inv 5456+ annex-page1.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-05-07",
          "uploaded_datetime": "2024-05-07T11:31:45",
          "task": 5,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "a73e46af-3537-4f89-a875-56d521d8d34f",
          "links": {
              "pdf_content": "/documents/a73e46af-3537-4f89-a875-56d521d8d34f/download-link",
              "preview": "/v1/preview/a73e46af-3537-4f89-a875-56d521d8d34f"
          },
          "tasks": [
              "Human validation always on.",
              "pret_unitar_articol - missing value",
              "pret_unitar_articol - missing value",
              "cantitate_articol - missing value",
              "cantitate_articol - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 55386,
          "name": "altex4-05-06-24-13-09-27.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-05-06",
          "uploaded_datetime": "2024-05-06T13:09:23",
          "task": 1,
          "workspace": "all",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "ff9fb8be-e740-43cc-a380-2efd4e93440d",
          "links": {
              "pdf_content": "/documents/ff9fb8be-e740-43cc-a380-2efd4e93440d/download-link",
              "preview": "/v1/preview/ff9fb8be-e740-43cc-a380-2efd4e93440d"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 55146,
          "name": "elena (1).xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-04-30",
          "uploaded_datetime": "2024-04-30T05:28:10",
          "task": 1,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "c379b8c1-ef72-4047-8fdf-8ae89d1518a1",
          "links": {
              "pdf_content": "/documents/c379b8c1-ef72-4047-8fdf-8ae89d1518a1/download-link",
              "preview": "/v1/preview/c379b8c1-ef72-4047-8fdf-8ae89d1518a1"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 54997,
          "name": "20221009-160117_p0.jpg.pdf",
          "category": "bonuri_facturi_simplificate",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-25",
          "uploaded_datetime": "2024-04-25T12:54:42",
          "task": 9,
          "workspace": "vs:test SmartPortal",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "3d8c7472-dc61-4486-acbe-4bb2ece0a454",
          "links": {
              "pdf_content": "/documents/3d8c7472-dc61-4486-acbe-4bb2ece0a454/download-link",
              "preview": "/v1/preview/3d8c7472-dc61-4486-acbe-4bb2ece0a454"
          },
          "tasks": [
              "Human validation always on.",
              "categorie_pret - regex mismatch",
              "valoare_articol - regex mismatch",
              "cui_client - wrong type",
              "data_bon - regex mismatch",
              "data_bon - match failed",
              "data_bon - match failed",
              "valoare_articol - regex mismatch",
              "categorie_pret - regex mismatch"
          ],
          "has_duplicates": false
      },
      {
          "id": 54990,
          "name": "2024-02-29_DELIVERY_SOLUTIONS_S_A__240700029443.xml25-04-2024_12:54:08",
          "category": "no_category",
          "status": "execution_finished",
          "uploaded": "2024-04-25",
          "uploaded_datetime": "2024-04-25T12:54:08",
          "task": 0,
          "workspace": "vs:test SmartPortal",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "c1b10d55-bac1-4b39-bac4-793398a7a45d",
          "links": {
              "pdf_content": "/documents/c1b10d55-bac1-4b39-bac4-793398a7a45d/download-link",
              "preview": "/v1/preview/c1b10d55-bac1-4b39-bac4-793398a7a45d"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 54967,
          "name": "20221009-160117_p2.jpg.pdf",
          "category": "bonuri_facturi_simplificate",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-25",
          "uploaded_datetime": "2024-04-25T09:31:44",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "0f430ade-4232-480a-9425-854dc837aef1",
          "links": {
              "pdf_content": "/documents/0f430ade-4232-480a-9425-854dc837aef1/download-link",
              "preview": "/v1/preview/0f430ade-4232-480a-9425-854dc837aef1"
          },
          "tasks": [
              "Block name: bon se deduce tva, message: Articolul \"BENZINA EVO 95\" este invalid. Verificati campul de \"cantitate articol\" din tabel",
              "Block name: bon se deduce tva, message: HTTP server responded with error code 400"
          ],
          "has_duplicates": false
      },
      {
          "id": 54966,
          "name": "elena (1).xml25-04-2024_08:50:40",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-04-25",
          "uploaded_datetime": "2024-04-25T08:50:40",
          "task": 1,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "1280ef54-8ee6-4d6a-a353-8950bf6b2582",
          "links": {
              "pdf_content": "/documents/1280ef54-8ee6-4d6a-a353-8950bf6b2582/download-link",
              "preview": "/v1/preview/1280ef54-8ee6-4d6a-a353-8950bf6b2582"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 54965,
          "name": "elena (1).xml25-04-2024_08:50:20",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-04-25",
          "uploaded_datetime": "2024-04-25T08:50:20",
          "task": 1,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "0cd705d0-2999-4342-9caa-ab6b24d134fa",
          "links": {
              "pdf_content": "/documents/0cd705d0-2999-4342-9caa-ab6b24d134fa/download-link",
              "preview": "/v1/preview/0cd705d0-2999-4342-9caa-ab6b24d134fa"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 54923,
          "name": "as tehnic_2489-04-15-24-11-13-20.pdf-P1_0.png.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-24",
          "uploaded_datetime": "2024-04-24T09:26:42",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "726c9d9a-c5ac-4a2a-bce8-6b6bc68efe11",
          "links": {
              "pdf_content": "/documents/726c9d9a-c5ac-4a2a-bce8-6b6bc68efe11/download-link",
              "preview": "/v1/preview/726c9d9a-c5ac-4a2a-bce8-6b6bc68efe11"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54922,
          "name": "as tehnic_2489-04-15-24-11-13-20.pdf-P0_0.png.pdf",
          "category": "facturi_interne",
          "status": "hitl_dropped",
          "uploaded": "2024-04-24",
          "uploaded_datetime": "2024-04-24T09:26:42",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "e7710af4-ca2a-49dd-b0d6-63812fb29266",
          "links": {
              "pdf_content": "/documents/e7710af4-ca2a-49dd-b0d6-63812fb29266/download-link",
              "preview": "/v1/preview/e7710af4-ca2a-49dd-b0d6-63812fb29266"
          },
          "tasks": [
              "Block name: Human In The Loop , message: exemplu text"
          ],
          "has_duplicates": false
      },
      {
          "id": 54883,
          "name": "charge_as_line.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-04-23",
          "uploaded_datetime": "2024-04-23T09:57:05",
          "task": 1,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "7cc46ea4-6427-465d-b582-836b2149e86f",
          "links": {
              "pdf_content": "/documents/7cc46ea4-6427-465d-b582-836b2149e86f/download-link",
              "preview": "/v1/preview/7cc46ea4-6427-465d-b582-836b2149e86f"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 54882,
          "name": "charge_as_col-17-05-2024_06:40:00.xml",
          "category": "no_category",
          "status": "hitl_dropped",
          "uploaded": "2024-04-23",
          "uploaded_datetime": "2024-04-23T09:57:04",
          "task": 0,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 0,
          "type": FileType.PDF,
          "operation_id": "09f4c488-937f-4324-9f7f-15ba6b5db27d",
          "links": {
              "pdf_content": "/documents/09f4c488-937f-4324-9f7f-15ba6b5db27d/download-link",
              "preview": "/v1/preview/09f4c488-937f-4324-9f7f-15ba6b5db27d"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 54833,
          "name": "373553-acopero serv.pdf",
          "category": "facturi_interne",
          "status": "hitl_dropped",
          "uploaded": "2024-04-22",
          "uploaded_datetime": "2024-04-22T09:41:38",
          "task": 1,
          "workspace": "vs:test SmartPortal",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "1f842e79-3288-4b8a-a011-9ffbed62021d",
          "links": {
              "pdf_content": "/documents/1f842e79-3288-4b8a-a011-9ffbed62021d/download-link",
              "preview": "/v1/preview/1f842e79-3288-4b8a-a011-9ffbed62021d"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 54832,
          "name": "373535-constructii prietenoase.pdf",
          "category": "facturi_interne",
          "status": "hitl_dropped",
          "uploaded": "2024-04-22",
          "uploaded_datetime": "2024-04-22T09:41:38",
          "task": 1,
          "workspace": "vs:test SmartPortal",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "381f149d-2cd9-4b1a-a11c-cbd837825dd1",
          "links": {
              "pdf_content": "/documents/381f149d-2cd9-4b1a-a11c-cbd837825dd1/download-link",
              "preview": "/v1/preview/381f149d-2cd9-4b1a-a11c-cbd837825dd1"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 54835,
          "name": "373534-konver.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-22",
          "uploaded_datetime": "2024-04-22T09:41:38",
          "task": 3,
          "workspace": "vs:test SmartPortal",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "0aba99a2-afbc-46dd-9dba-4cf67157276d",
          "links": {
              "pdf_content": "/documents/0aba99a2-afbc-46dd-9dba-4cf67157276d/download-link",
              "preview": "/v1/preview/0aba99a2-afbc-46dd-9dba-4cf67157276d"
          },
          "tasks": [
              "Human validation always on.",
              "pret_unitar_articol - missing value",
              "cantitate_articol - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54834,
          "name": "373530-bmc.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-22",
          "uploaded_datetime": "2024-04-22T09:41:38",
          "task": 3,
          "workspace": "vs:test SmartPortal",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "2e290915-252c-4b96-ba64-31d2fff5be90",
          "links": {
              "pdf_content": "/documents/2e290915-252c-4b96-ba64-31d2fff5be90/download-link",
              "preview": "/v1/preview/2e290915-252c-4b96-ba64-31d2fff5be90"
          },
          "tasks": [
              "Human validation always on.",
              "pret_unitar_articol - missing value",
              "cantitate_articol - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54831,
          "name": "373541-strong roof.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-22",
          "uploaded_datetime": "2024-04-22T09:41:37",
          "task": 1,
          "workspace": "vs:test SmartPortal",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "bf7ae242-0158-4d02-8b1b-2a7de13cc199",
          "links": {
              "pdf_content": "/documents/bf7ae242-0158-4d02-8b1b-2a7de13cc199/download-link",
              "preview": "/v1/preview/bf7ae242-0158-4d02-8b1b-2a7de13cc199"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 54830,
          "name": "373560-ivebo construct.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-22",
          "uploaded_datetime": "2024-04-22T09:41:36",
          "task": 3,
          "workspace": "vs:test SmartPortal",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "eefb2156-bb75-4c3e-9094-e72d2748e2b2",
          "links": {
              "pdf_content": "/documents/eefb2156-bb75-4c3e-9094-e72d2748e2b2/download-link",
              "preview": "/v1/preview/eefb2156-bb75-4c3e-9094-e72d2748e2b2"
          },
          "tasks": [
              "Human validation always on.",
              "pret_unitar_articol - missing value",
              "cantitate_articol - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54828,
          "name": "373540-konver.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-22",
          "uploaded_datetime": "2024-04-22T09:41:35",
          "task": 1,
          "workspace": "vs:test SmartPortal",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "f0bea6fd-2aa3-4844-afa8-5e80051d4256",
          "links": {
              "pdf_content": "/documents/f0bea6fd-2aa3-4844-afa8-5e80051d4256/download-link",
              "preview": "/v1/preview/f0bea6fd-2aa3-4844-afa8-5e80051d4256"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 54829,
          "name": "373528-dsm .pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-22",
          "uploaded_datetime": "2024-04-22T09:41:35",
          "task": 5,
          "workspace": "vs:test SmartPortal",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "35181b3b-19df-497e-a936-3dc57968fde9",
          "links": {
              "pdf_content": "/documents/35181b3b-19df-497e-a936-3dc57968fde9/download-link",
              "preview": "/v1/preview/35181b3b-19df-497e-a936-3dc57968fde9"
          },
          "tasks": [
              "Human validation always on.",
              "pret_unitar_articol - missing value",
              "pret_unitar_articol - missing value",
              "cantitate_articol - missing value",
              "cantitate_articol - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54826,
          "name": "373532-duramac.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-22",
          "uploaded_datetime": "2024-04-22T09:41:34",
          "task": 3,
          "workspace": "vs:test SmartPortal",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "724e7d14-d558-4c46-9476-3c77f7d282d4",
          "links": {
              "pdf_content": "/documents/724e7d14-d558-4c46-9476-3c77f7d282d4/download-link",
              "preview": "/v1/preview/724e7d14-d558-4c46-9476-3c77f7d282d4"
          },
          "tasks": [
              "Human validation always on.",
              "pret_unitar_articol - missing value",
              "cantitate_articol - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54827,
          "name": "373529-acopero.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-22",
          "uploaded_datetime": "2024-04-22T09:41:34",
          "task": 3,
          "workspace": "vs:test SmartPortal",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "15bcb37d-375b-4ea9-8729-8ba467cad361",
          "links": {
              "pdf_content": "/documents/15bcb37d-375b-4ea9-8729-8ba467cad361/download-link",
              "preview": "/v1/preview/15bcb37d-375b-4ea9-8729-8ba467cad361"
          },
          "tasks": [
              "Human validation always on.",
              "pret_unitar_articol - missing value",
              "cantitate_articol - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54825,
          "name": "373527-sia complete.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-22",
          "uploaded_datetime": "2024-04-22T09:41:27",
          "task": 3,
          "workspace": "vs:test SmartPortal",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "fa2cf21e-9e52-466d-9207-7f59f9fbdfc8",
          "links": {
              "pdf_content": "/documents/fa2cf21e-9e52-466d-9207-7f59f9fbdfc8/download-link",
              "preview": "/v1/preview/fa2cf21e-9e52-466d-9207-7f59f9fbdfc8"
          },
          "tasks": [
              "Human validation always on.",
              "pret_unitar_articol - missing value",
              "cantitate_articol - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54744,
          "name": "BF_00387_28_11_2021.pdf",
          "category": "bonuri_facturi_simplificate",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-19",
          "uploaded_datetime": "2024-04-19T13:31:51",
          "task": 13,
          "workspace": "all",
          "source": "google-drive",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "aebb6e03-1115-4d09-a700-8982b2c3b6c8",
          "links": {
              "pdf_content": "/documents/aebb6e03-1115-4d09-a700-8982b2c3b6c8/download-link",
              "preview": "/v1/preview/aebb6e03-1115-4d09-a700-8982b2c3b6c8"
          },
          "tasks": [
              "Human validation always on.",
              "cantitate - Label |cantitate| should occur once at most, but occurs 2 times.",
              "categorie_pret - regex mismatch",
              "categorie_pret - regex mismatch",
              "categorie_pret - regex mismatch",
              "categorie_pret - regex mismatch",
              "categorie_pret - regex mismatch",
              "categorie_pret - regex mismatch",
              "categorie_pret - regex mismatch",
              "categorie_pret - regex mismatch",
              "categorie_pret - regex mismatch",
              "cui_client - match failed",
              "cui_client - wrong type"
          ],
          "has_duplicates": false
      },
      {
          "id": 54673,
          "name": "bonuri01027_test.pdf",
          "category": "bonuri_facturi_simplificate",
          "status": "execution_finished",
          "uploaded": "2024-04-18",
          "uploaded_datetime": "2024-04-18T11:40:02",
          "task": 7,
          "workspace": "vs:Costel nu atingeti",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "325a76ad-a0f1-422b-8f45-c03600a6517c",
          "links": {
              "pdf_content": "/documents/325a76ad-a0f1-422b-8f45-c03600a6517c/download-link",
              "preview": "/v1/preview/325a76ad-a0f1-422b-8f45-c03600a6517c"
          },
          "tasks": [
              "Human validation always on.",
              "denumire_articol - match failed",
              "cui_client - match failed",
              "cui_client - wrong type",
              "cui_client - regex mismatch",
              "cui_client - match failed",
              "denumire_articol - match failed"
          ],
          "has_duplicates": false
      },
      {
          "id": 54648,
          "name": "BNMotica_12_07_2022_0028-04-16-24-14-20-19.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-16",
          "uploaded_datetime": "2024-04-16T14:20:12",
          "task": 1,
          "workspace": "all",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "1fc7f689-ac52-4414-8f63-642e3459982e",
          "links": {
              "pdf_content": "/documents/1fc7f689-ac52-4414-8f63-642e3459982e/download-link",
              "preview": "/v1/preview/1fc7f689-ac52-4414-8f63-642e3459982e"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 54647,
          "name": "altex1-04-16-24-14-19-59.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-16",
          "uploaded_datetime": "2024-04-16T14:19:53",
          "task": 1,
          "workspace": "all",
          "source": "user-upload",
          "number_of_pages": 2,
          "type": FileType.PDF,
          "operation_id": "05ed0d2e-1fa2-4668-bdf8-7164681e6f67",
          "links": {
              "pdf_content": "/documents/05ed0d2e-1fa2-4668-bdf8-7164681e6f67/download-link",
              "preview": "/v1/preview/05ed0d2e-1fa2-4668-bdf8-7164681e6f67"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 54612,
          "name": "FURNIZORI F-S-page4.pdf",
          "category": "facturi_interne",
          "status": "hitl_dropped",
          "uploaded": "2024-04-16",
          "uploaded_datetime": "2024-04-16T09:33:35",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "d3115fec-87e4-4c01-bb96-dedfa7ccaa86",
          "links": {
              "pdf_content": "/documents/d3115fec-87e4-4c01-bb96-dedfa7ccaa86/download-link",
              "preview": "/v1/preview/d3115fec-87e4-4c01-bb96-dedfa7ccaa86"
          },
          "tasks": [
              "Block name: Human In The Loop , message: exemplu text"
          ],
          "has_duplicates": false
      },
      {
          "id": 54559,
          "name": "document (2).pdf",
          "category": "CIV_nou",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-15",
          "uploaded_datetime": "2024-04-15T11:16:56",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 2,
          "type": FileType.PDF,
          "operation_id": "1412f611-ee43-4c0a-8004-8dfb1d358a86",
          "links": {
              "pdf_content": "/documents/1412f611-ee43-4c0a-8004-8dfb1d358a86/download-link",
              "preview": "/v1/preview/1412f611-ee43-4c0a-8004-8dfb1d358a86"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 54556,
          "name": "SkyTower_23062022_0357-04-15-24-11-13-21.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-15",
          "uploaded_datetime": "2024-04-15T11:13:15",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "ac349b0d-fe13-4a6c-bd4d-6bd687dc77d7",
          "links": {
              "pdf_content": "/documents/ac349b0d-fe13-4a6c-bd4d-6bd687dc77d7/download-link",
              "preview": "/v1/preview/ac349b0d-fe13-4a6c-bd4d-6bd687dc77d7"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54558,
          "name": "Interfinas_03012022-04-15-24-11-13-24.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-15",
          "uploaded_datetime": "2024-04-15T11:13:15",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "170cc0e5-5bf3-44d1-a326-3086e7fc6183",
          "links": {
              "pdf_content": "/documents/170cc0e5-5bf3-44d1-a326-3086e7fc6183/download-link",
              "preview": "/v1/preview/170cc0e5-5bf3-44d1-a326-3086e7fc6183"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 54557,
          "name": "Dedeman_28012022-04-15-24-11-13-21.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-15",
          "uploaded_datetime": "2024-04-15T11:13:15",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "be9943ff-c143-4835-85a3-82780a96418d",
          "links": {
              "pdf_content": "/documents/be9943ff-c143-4835-85a3-82780a96418d/download-link",
              "preview": "/v1/preview/be9943ff-c143-4835-85a3-82780a96418d"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54554,
          "name": "altex2-04-15-24-11-13-18.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-15",
          "uploaded_datetime": "2024-04-15T11:13:13",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "555cd2c7-0a4a-4d70-83a2-02194820ca0c",
          "links": {
              "pdf_content": "/documents/555cd2c7-0a4a-4d70-83a2-02194820ca0c/download-link",
              "preview": "/v1/preview/555cd2c7-0a4a-4d70-83a2-02194820ca0c"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54551,
          "name": "as tehnic_2489-04-15-24-11-11-54.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-15",
          "uploaded_datetime": "2024-04-15T11:11:50",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "a261b0aa-248c-4ffe-bb9c-7e41e23d095c",
          "links": {
              "pdf_content": "/documents/a261b0aa-248c-4ffe-bb9c-7e41e23d095c/download-link",
              "preview": "/v1/preview/a261b0aa-248c-4ffe-bb9c-7e41e23d095c"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54553,
          "name": "Interfinas_03012022-04-15-24-11-12-00.pdf",
          "category": "facturi_interne",
          "status": "hitl_dropped",
          "uploaded": "2024-04-15",
          "uploaded_datetime": "2024-04-15T11:11:50",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "6ca34d89-fba5-47d3-bf18-2b7e856aadcd",
          "links": {
              "pdf_content": "/documents/6ca34d89-fba5-47d3-bf18-2b7e856aadcd/download-link",
              "preview": "/v1/preview/6ca34d89-fba5-47d3-bf18-2b7e856aadcd"
          },
          "tasks": [
              "Completati datele contabile cu privire la articole"
          ],
          "has_duplicates": false
      },
      {
          "id": 54530,
          "name": "altex2-04-15-24-10-26-33.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-15",
          "uploaded_datetime": "2024-04-15T10:26:29",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "045fcac1-2820-48ce-85a2-a25d0c72f667",
          "links": {
              "pdf_content": "/documents/045fcac1-2820-48ce-85a2-a25d0c72f667/download-link",
              "preview": "/v1/preview/045fcac1-2820-48ce-85a2-a25d0c72f667"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 54204,
          "name": "SkyTower_manuit",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T11:02:55",
          "task": 2,
          "workspace": "all",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "5ce2203e-6fb5-4cee-a57b-5e05e900aasdsdasdasd28eb",
          "links": {
              "pdf_content": "/documents/5ce2203e-6fb5-4cee-a57b-5e05e900aasdsdasdasd28eb/download-link",
              "preview": "/v1/preview/5ce2203e-6fb5-4cee-a57b-5e05e900aasdsdasdasd28eb"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54202,
          "name": "Interfinas_03012022-04-12-24-11-02-56.pdf",
          "category": "facturi_interne",
          "status": "hitl_dropped",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T11:02:51",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "af7b2904-5176-43b5-8851-0255b183b2a4",
          "links": {
              "pdf_content": "/documents/af7b2904-5176-43b5-8851-0255b183b2a4/download-link",
              "preview": "/v1/preview/af7b2904-5176-43b5-8851-0255b183b2a4"
          },
          "tasks": [
              "Block name: Verificare nume_furnizor la anaf, message: Campul mariananaanana nu coincide cu ok, scorul de similaritate 0.0 sub pragul 10.0"
          ],
          "has_duplicates": false
      },
      {
          "id": 54201,
          "name": "as tehnic_2489-04-12-24-11-02-52.pdf",
          "category": "facturi_interne",
          "status": "hitl_dropped",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T11:02:48",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "3d0e2dac-185b-404a-bc7d-6793cb557e47",
          "links": {
              "pdf_content": "/documents/3d0e2dac-185b-404a-bc7d-6793cb557e47/download-link",
              "preview": "/v1/preview/3d0e2dac-185b-404a-bc7d-6793cb557e47"
          },
          "tasks": [
              "Block name: Human In The Loop , message: exemplu text"
          ],
          "has_duplicates": false
      },
      {
          "id": 54200,
          "name": "altex2-04-12-24-10-59-45.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T10:59:40",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "9eeafc0f-71db-40a6-a669-b7641c7c53b1",
          "links": {
              "pdf_content": "/documents/9eeafc0f-71db-40a6-a669-b7641c7c53b1/download-link",
              "preview": "/v1/preview/9eeafc0f-71db-40a6-a669-b7641c7c53b1"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 54199,
          "name": "SkyTower_23062022_0357-04-12-24-10-59-40.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T10:59:35",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "b6a8ff02-3953-4be4-830a-714a6884b740",
          "links": {
              "pdf_content": "/documents/b6a8ff02-3953-4be4-830a-714a6884b740/download-link",
              "preview": "/v1/preview/b6a8ff02-3953-4be4-830a-714a6884b740"
          },
          "tasks": [
              "Human validation always on.",
              "pret_unitar_articol - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54198,
          "name": "Interfinas_03012022-04-12-24-10-59-36.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T10:59:32",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "99a3ed36-735f-44ef-b8be-731f681860fe",
          "links": {
              "pdf_content": "/documents/99a3ed36-735f-44ef-b8be-731f681860fe/download-link",
              "preview": "/v1/preview/99a3ed36-735f-44ef-b8be-731f681860fe"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 54197,
          "name": "altex2-04-12-24-10-58-06.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T10:58:01",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "53ee95c3-44a6-4567-ad76-f3d5ba2c3bf8",
          "links": {
              "pdf_content": "/documents/53ee95c3-44a6-4567-ad76-f3d5ba2c3bf8/download-link",
              "preview": "/v1/preview/53ee95c3-44a6-4567-ad76-f3d5ba2c3bf8"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 54174,
          "name": "as tehnic_2489-04-12-24-10-33-04.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T10:32:59",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "39a7a885-08c9-49c8-b1a5-c5c2950b8bc7",
          "links": {
              "pdf_content": "/documents/39a7a885-08c9-49c8-b1a5-c5c2950b8bc7/download-link",
              "preview": "/v1/preview/39a7a885-08c9-49c8-b1a5-c5c2950b8bc7"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 54173,
          "name": "as tehnic_2489-04-12-24-10-32-49.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T10:32:43",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "4f42d7a3-ffc0-47d9-a949-dfde6882c989",
          "links": {
              "pdf_content": "/documents/4f42d7a3-ffc0-47d9-a949-dfde6882c989/download-link",
              "preview": "/v1/preview/4f42d7a3-ffc0-47d9-a949-dfde6882c989"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 54172,
          "name": "as tehnic_2489-04-12-24-10-31-34.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T10:31:28",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "c957e589-0152-4972-988e-c9c2b84ff9cd",
          "links": {
              "pdf_content": "/documents/c957e589-0152-4972-988e-c9c2b84ff9cd/download-link",
              "preview": "/v1/preview/c957e589-0152-4972-988e-c9c2b84ff9cd"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 54171,
          "name": "as tehnic_2489-04-12-24-10-25-44.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T10:25:38",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "04bb4961-6f43-452c-8785-72f0f1daeecb",
          "links": {
              "pdf_content": "/documents/04bb4961-6f43-452c-8785-72f0f1daeecb/download-link",
              "preview": "/v1/preview/04bb4961-6f43-452c-8785-72f0f1daeecb"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54170,
          "name": "as tehnic_2489-04-12-24-10-19-58.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T10:19:52",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "04c06da3-ca97-4ee3-8baf-f4c1db63097c",
          "links": {
              "pdf_content": "/documents/04c06da3-ca97-4ee3-8baf-f4c1db63097c/download-link",
              "preview": "/v1/preview/04c06da3-ca97-4ee3-8baf-f4c1db63097c"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54169,
          "name": "Dedeman_28012022-04-12-24-10-07-05.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T10:06:57",
          "task": 4,
          "workspace": "all",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "3b109730-3470-4436-8157-50eba82eac8e",
          "links": {
              "pdf_content": "/documents/3b109730-3470-4436-8157-50eba82eac8e/download-link",
              "preview": "/v1/preview/3b109730-3470-4436-8157-50eba82eac8e"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value",
              "pret_unitar_articol - missing value",
              "cantitate_articol - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54168,
          "name": "as tehnic_2489-04-12-24-10-04-42.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-12",
          "uploaded_datetime": "2024-04-12T10:04:34",
          "task": 4,
          "workspace": "all",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "0a6e40dd-f17e-47f1-aade-bd80e792f527",
          "links": {
              "pdf_content": "/documents/0a6e40dd-f17e-47f1-aade-bd80e792f527/download-link",
              "preview": "/v1/preview/0a6e40dd-f17e-47f1-aade-bd80e792f527"
          },
          "tasks": [
              "Human validation always on.",
              "cantitate_articol - missing value",
              "cod_tva_furnizor - missing value",
              "pret_unitar_articol - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 54000,
          "name": "FURNIZORI F-G FEBR-page8-04-09-24-11-33-57.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:36",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "d65c8333-245d-4720-ab9e-c479d7c18816",
          "links": {
              "pdf_content": "/documents/d65c8333-245d-4720-ab9e-c479d7c18816/download-link",
              "preview": "/v1/preview/d65c8333-245d-4720-ab9e-c479d7c18816"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53998,
          "name": "FURNIZORI F-G FEBR-page7-04-09-24-11-33-56.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:36",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "d20dc1e1-e88b-4ff2-80bb-6bb818630c39",
          "links": {
              "pdf_content": "/documents/d20dc1e1-e88b-4ff2-80bb-6bb818630c39/download-link",
              "preview": "/v1/preview/d20dc1e1-e88b-4ff2-80bb-6bb818630c39"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53997,
          "name": "FURNIZORI F-G FEBR-page6-04-09-24-11-33-53.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:36",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "e1258796-d124-45b5-9590-61eb1c3d0ab6",
          "links": {
              "pdf_content": "/documents/e1258796-d124-45b5-9590-61eb1c3d0ab6/download-link",
              "preview": "/v1/preview/e1258796-d124-45b5-9590-61eb1c3d0ab6"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53989,
          "name": "FURNIZORI F-G FEBR-page2-04-09-24-11-33-44.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:35",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "4a00738a-d90b-4202-8856-f0fd57ef7479",
          "links": {
              "pdf_content": "/documents/4a00738a-d90b-4202-8856-f0fd57ef7479/download-link",
              "preview": "/v1/preview/4a00738a-d90b-4202-8856-f0fd57ef7479"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53987,
          "name": "FURNIZORI F-G FEBR-page1-04-09-24-11-33-44.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:35",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "22a85468-f558-4d51-91ee-795f2838acaf",
          "links": {
              "pdf_content": "/documents/22a85468-f558-4d51-91ee-795f2838acaf/download-link",
              "preview": "/v1/preview/22a85468-f558-4d51-91ee-795f2838acaf"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53988,
          "name": "FURNIZORI A-C FEBR-page5-04-09-24-11-33-56.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:35",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "4374a6d2-76c8-482e-b539-60b230eaecc6",
          "links": {
              "pdf_content": "/documents/4374a6d2-76c8-482e-b539-60b230eaecc6/download-link",
              "preview": "/v1/preview/4374a6d2-76c8-482e-b539-60b230eaecc6"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53986,
          "name": "FURNIZORI A-C FEBR-page4-04-09-24-11-33-51.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:35",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "0bc122b0-044d-4f9c-9e9a-61db89600a22",
          "links": {
              "pdf_content": "/documents/0bc122b0-044d-4f9c-9e9a-61db89600a22/download-link",
              "preview": "/v1/preview/0bc122b0-044d-4f9c-9e9a-61db89600a22"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53985,
          "name": "FURNIZORI A-C FEBR-page3-04-09-24-11-33-50.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:35",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "d0435114-afe2-4ca0-a46c-e455c57060c5",
          "links": {
              "pdf_content": "/documents/d0435114-afe2-4ca0-a46c-e455c57060c5/download-link",
              "preview": "/v1/preview/d0435114-afe2-4ca0-a46c-e455c57060c5"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53984,
          "name": "FURNIZORI A-C FEBR-page2-04-09-24-11-33-47.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:35",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "bd7fcadd-d505-435a-9359-96b3b5802c3e",
          "links": {
              "pdf_content": "/documents/bd7fcadd-d505-435a-9359-96b3b5802c3e/download-link",
              "preview": "/v1/preview/bd7fcadd-d505-435a-9359-96b3b5802c3e"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53983,
          "name": "FURNIZORI A-C FEBR-page1-04-09-24-11-33-45.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:35",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "d98cee62-ed5b-44af-ad84-7e4810ac0dba",
          "links": {
              "pdf_content": "/documents/d98cee62-ed5b-44af-ad84-7e4810ac0dba/download-link",
              "preview": "/v1/preview/d98cee62-ed5b-44af-ad84-7e4810ac0dba"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53981,
          "name": "FURNIZORI A FEBR-page9-04-09-24-11-33-39.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:32",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "57b42bdd-59b0-42ad-8d30-b291d46fa894",
          "links": {
              "pdf_content": "/documents/57b42bdd-59b0-42ad-8d30-b291d46fa894/download-link",
              "preview": "/v1/preview/57b42bdd-59b0-42ad-8d30-b291d46fa894"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53982,
          "name": "FURNIZORI A FEBR-page10-04-09-24-11-33-41.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:32",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "20153241-7473-468b-bba2-0a77e27fa72e",
          "links": {
              "pdf_content": "/documents/20153241-7473-468b-bba2-0a77e27fa72e/download-link",
              "preview": "/v1/preview/20153241-7473-468b-bba2-0a77e27fa72e"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53980,
          "name": "FURNIZORI A FEBR-page8-04-09-24-11-33-35.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:31",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "0f960f3f-8560-455b-8066-db3ab35271d2",
          "links": {
              "pdf_content": "/documents/0f960f3f-8560-455b-8066-db3ab35271d2/download-link",
              "preview": "/v1/preview/0f960f3f-8560-455b-8066-db3ab35271d2"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53979,
          "name": "FURNIZORI A FEBR-page7-04-09-24-11-33-38.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:31",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "09d17e9c-e079-44dc-80f0-bee9ebbce01e",
          "links": {
              "pdf_content": "/documents/09d17e9c-e079-44dc-80f0-bee9ebbce01e/download-link",
              "preview": "/v1/preview/09d17e9c-e079-44dc-80f0-bee9ebbce01e"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53978,
          "name": "FURNIZORI A FEBR-page6-04-09-24-11-33-38.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:31",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "7cc181e9-cd87-40f2-b814-b841db5b6e89",
          "links": {
              "pdf_content": "/documents/7cc181e9-cd87-40f2-b814-b841db5b6e89/download-link",
              "preview": "/v1/preview/7cc181e9-cd87-40f2-b814-b841db5b6e89"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53977,
          "name": "FURNIZORI A FEBR-page5-04-09-24-11-33-38.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:31",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "331669a6-9363-432d-95c0-a2247e12ffc2",
          "links": {
              "pdf_content": "/documents/331669a6-9363-432d-95c0-a2247e12ffc2/download-link",
              "preview": "/v1/preview/331669a6-9363-432d-95c0-a2247e12ffc2"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53976,
          "name": "FURNIZORI A FEBR-page4-04-09-24-11-33-33.pdf",
          "category": "facturi_interne",
          "status": "dropped",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:31",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "4e797c3a-9743-4747-87c0-0ddd1f90713a",
          "links": {
              "pdf_content": "/documents/4e797c3a-9743-4747-87c0-0ddd1f90713a/download-link",
              "preview": "/v1/preview/4e797c3a-9743-4747-87c0-0ddd1f90713a"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53975,
          "name": "FURNIZORI A FEBR-page3-04-09-24-11-33-33.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:31",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "f76284a8-e7a8-4779-bad8-a162fb2478bd",
          "links": {
              "pdf_content": "/documents/f76284a8-e7a8-4779-bad8-a162fb2478bd/download-link",
              "preview": "/v1/preview/f76284a8-e7a8-4779-bad8-a162fb2478bd"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53974,
          "name": "FURNIZORI A FEBR-page2-04-09-24-11-33-32.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:31",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "80d2debd-47b8-4be3-9cd6-1b9b23c7096a",
          "links": {
              "pdf_content": "/documents/80d2debd-47b8-4be3-9cd6-1b9b23c7096a/download-link",
              "preview": "/v1/preview/80d2debd-47b8-4be3-9cd6-1b9b23c7096a"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53973,
          "name": "FURNIZORI A FEBR-page1-04-09-24-11-33-32.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:33:31",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "08c1234c-5c1d-4c6a-8781-f4c91cfb3971",
          "links": {
              "pdf_content": "/documents/08c1234c-5c1d-4c6a-8781-f4c91cfb3971/download-link",
              "preview": "/v1/preview/08c1234c-5c1d-4c6a-8781-f4c91cfb3971"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53969,
          "name": "FURNIZORI F-G FEBR-page10-04-09-24-11-17-28.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:50",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "67c78745-92c4-4fba-bea9-4b8363d15984",
          "links": {
              "pdf_content": "/documents/67c78745-92c4-4fba-bea9-4b8363d15984/download-link",
              "preview": "/v1/preview/67c78745-92c4-4fba-bea9-4b8363d15984"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53960,
          "name": "FURNIZORI N FEBR-page9-04-09-24-11-17-16.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:49",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "fc86755d-1119-4e7f-ae5a-524753072dce",
          "links": {
              "pdf_content": "/documents/fc86755d-1119-4e7f-ae5a-524753072dce/download-link",
              "preview": "/v1/preview/fc86755d-1119-4e7f-ae5a-524753072dce"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53959,
          "name": "FURNIZORI N FEBR-page8-04-09-24-11-17-15.pdf",
          "category": "proces_verbal",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:49",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "911b9483-2f05-4cb8-8947-101f57559b66",
          "links": {
              "pdf_content": "/documents/911b9483-2f05-4cb8-8947-101f57559b66/download-link",
              "preview": "/v1/preview/911b9483-2f05-4cb8-8947-101f57559b66"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53961,
          "name": "FURNIZORI N FEBR-page10-04-09-24-11-17-16.pdf",
          "category": "proces_verbal",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:49",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "ac8427aa-292d-4b9d-a024-c321a58d858a",
          "links": {
              "pdf_content": "/documents/ac8427aa-292d-4b9d-a024-c321a58d858a/download-link",
              "preview": "/v1/preview/ac8427aa-292d-4b9d-a024-c321a58d858a"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53968,
          "name": "FURNIZORI F-G FEBR-page9-04-09-24-11-17-28.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:49",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "03ecf56f-4c9f-46b9-a6be-50a2d861070f",
          "links": {
              "pdf_content": "/documents/03ecf56f-4c9f-46b9-a6be-50a2d861070f/download-link",
              "preview": "/v1/preview/03ecf56f-4c9f-46b9-a6be-50a2d861070f"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53967,
          "name": "FURNIZORI F-G FEBR-page8-04-09-24-11-17-27.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:49",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "28446c5b-4beb-46a3-8acd-dfa075438bca",
          "links": {
              "pdf_content": "/documents/28446c5b-4beb-46a3-8acd-dfa075438bca/download-link",
              "preview": "/v1/preview/28446c5b-4beb-46a3-8acd-dfa075438bca"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53966,
          "name": "FURNIZORI F-G FEBR-page7-04-09-24-11-17-24.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:49",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "834f9428-7d29-4966-8ffa-7f95aeb77a1e",
          "links": {
              "pdf_content": "/documents/834f9428-7d29-4966-8ffa-7f95aeb77a1e/download-link",
              "preview": "/v1/preview/834f9428-7d29-4966-8ffa-7f95aeb77a1e"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53965,
          "name": "FURNIZORI F-G FEBR-page6-04-09-24-11-17-24.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:49",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "00aa83b5-f754-438a-9a61-f7eb1daff8e2",
          "links": {
              "pdf_content": "/documents/00aa83b5-f754-438a-9a61-f7eb1daff8e2/download-link",
              "preview": "/v1/preview/00aa83b5-f754-438a-9a61-f7eb1daff8e2"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53964,
          "name": "FURNIZORI F-G FEBR-page5-04-09-24-11-17-22.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:49",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "5b0c2ffd-51a3-40b2-94d9-be64aa92c65e",
          "links": {
              "pdf_content": "/documents/5b0c2ffd-51a3-40b2-94d9-be64aa92c65e/download-link",
              "preview": "/v1/preview/5b0c2ffd-51a3-40b2-94d9-be64aa92c65e"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53963,
          "name": "FURNIZORI F-G FEBR-page4-04-09-24-11-17-21.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:49",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "6a866897-b47a-4c0b-99fd-eb745f59eed9",
          "links": {
              "pdf_content": "/documents/6a866897-b47a-4c0b-99fd-eb745f59eed9/download-link",
              "preview": "/v1/preview/6a866897-b47a-4c0b-99fd-eb745f59eed9"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53962,
          "name": "FURNIZORI F-G FEBR-page3-04-09-24-11-17-22.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:49",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "130b5360-9ea7-419d-a56b-b9122d5bc7bb",
          "links": {
              "pdf_content": "/documents/130b5360-9ea7-419d-a56b-b9122d5bc7bb/download-link",
              "preview": "/v1/preview/130b5360-9ea7-419d-a56b-b9122d5bc7bb"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53958,
          "name": "FURNIZORI F-G FEBR-page2-04-09-24-11-17-18.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:49",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "489cc08e-f314-416d-b396-111c3c4a150b",
          "links": {
              "pdf_content": "/documents/489cc08e-f314-416d-b396-111c3c4a150b/download-link",
              "preview": "/v1/preview/489cc08e-f314-416d-b396-111c3c4a150b"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53957,
          "name": "FURNIZORI N FEBR-page7-04-09-24-11-17-12.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:48",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "6a258014-c8ab-4297-b71c-2e421505185a",
          "links": {
              "pdf_content": "/documents/6a258014-c8ab-4297-b71c-2e421505185a/download-link",
              "preview": "/v1/preview/6a258014-c8ab-4297-b71c-2e421505185a"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53956,
          "name": "FURNIZORI N FEBR-page6-04-09-24-11-17-10.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:48",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "bd7b8ff2-a04c-4f5e-b305-8b34fa3bea9b",
          "links": {
              "pdf_content": "/documents/bd7b8ff2-a04c-4f5e-b305-8b34fa3bea9b/download-link",
              "preview": "/v1/preview/bd7b8ff2-a04c-4f5e-b305-8b34fa3bea9b"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53955,
          "name": "FURNIZORI N FEBR-page4-5-04-09-24-11-17-09.pdf",
          "category": "facturi_utilitati",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:48",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 2,
          "type": FileType.PDF,
          "operation_id": "69a5570e-8240-4f37-9446-8ab556fbb660",
          "links": {
              "pdf_content": "/documents/69a5570e-8240-4f37-9446-8ab556fbb660/download-link",
              "preview": "/v1/preview/69a5570e-8240-4f37-9446-8ab556fbb660"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53954,
          "name": "FURNIZORI N FEBR-page2-3-04-09-24-11-17-10.pdf",
          "category": "facturi_utilitati",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:48",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 2,
          "type": FileType.PDF,
          "operation_id": "0cf4aeae-ebf2-4f1c-8a01-f9a38a0ed0f6",
          "links": {
              "pdf_content": "/documents/0cf4aeae-ebf2-4f1c-8a01-f9a38a0ed0f6/download-link",
              "preview": "/v1/preview/0cf4aeae-ebf2-4f1c-8a01-f9a38a0ed0f6"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53953,
          "name": "FURNIZORI N FEBR-page1-04-09-24-11-17-12.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:48",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "65374726-7b4f-4a72-b990-8c369d4999d6",
          "links": {
              "pdf_content": "/documents/65374726-7b4f-4a72-b990-8c369d4999d6/download-link",
              "preview": "/v1/preview/65374726-7b4f-4a72-b990-8c369d4999d6"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53952,
          "name": "FURNIZORI F-G FEBR-page1-04-09-24-11-17-18.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:48",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "98c296e9-8b78-439e-99b6-878e5d0badd2",
          "links": {
              "pdf_content": "/documents/98c296e9-8b78-439e-99b6-878e5d0badd2/download-link",
              "preview": "/v1/preview/98c296e9-8b78-439e-99b6-878e5d0badd2"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53950,
          "name": "FURNIZORI A-C FEBR-page9-04-09-24-11-17-06.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:46",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "b79ab944-73a6-48a6-a71c-e9a4ba85d92c",
          "links": {
              "pdf_content": "/documents/b79ab944-73a6-48a6-a71c-e9a4ba85d92c/download-link",
              "preview": "/v1/preview/b79ab944-73a6-48a6-a71c-e9a4ba85d92c"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53949,
          "name": "FURNIZORI A-C FEBR-page8-04-09-24-11-17-04.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:46",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "cfa45a5e-f85f-4824-aec8-b2c04b7a2072",
          "links": {
              "pdf_content": "/documents/cfa45a5e-f85f-4824-aec8-b2c04b7a2072/download-link",
              "preview": "/v1/preview/cfa45a5e-f85f-4824-aec8-b2c04b7a2072"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53947,
          "name": "FURNIZORI A-C FEBR-page7-04-09-24-11-17-03.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:46",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "e80e2f8e-bcc5-4f95-8a63-db301298714d",
          "links": {
              "pdf_content": "/documents/e80e2f8e-bcc5-4f95-8a63-db301298714d/download-link",
              "preview": "/v1/preview/e80e2f8e-bcc5-4f95-8a63-db301298714d"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53951,
          "name": "FURNIZORI A-C FEBR-page10-04-09-24-11-17-06.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:46",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "60c2de29-3e3c-49db-93c7-4664c304b997",
          "links": {
              "pdf_content": "/documents/60c2de29-3e3c-49db-93c7-4664c304b997/download-link",
              "preview": "/v1/preview/60c2de29-3e3c-49db-93c7-4664c304b997"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53948,
          "name": "FURNIZORI A FEBR-page10-04-09-24-11-17-04.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:46",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "6609cd98-0a87-40b3-b11a-85bc9bc139f5",
          "links": {
              "pdf_content": "/documents/6609cd98-0a87-40b3-b11a-85bc9bc139f5/download-link",
              "preview": "/v1/preview/6609cd98-0a87-40b3-b11a-85bc9bc139f5"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53945,
          "name": "FURNIZORI A-C FEBR-page6-04-09-24-11-17-00.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:45",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "03572c3e-a136-438d-afcd-2bf6e91b0ee0",
          "links": {
              "pdf_content": "/documents/03572c3e-a136-438d-afcd-2bf6e91b0ee0/download-link",
              "preview": "/v1/preview/03572c3e-a136-438d-afcd-2bf6e91b0ee0"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53944,
          "name": "FURNIZORI A-C FEBR-page5-04-09-24-11-16-58.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:45",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "ef0f3f87-71a1-4767-864c-d91b9471aa6f",
          "links": {
              "pdf_content": "/documents/ef0f3f87-71a1-4767-864c-d91b9471aa6f/download-link",
              "preview": "/v1/preview/ef0f3f87-71a1-4767-864c-d91b9471aa6f"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53941,
          "name": "FURNIZORI A-C FEBR-page4-04-09-24-11-16-54.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:45",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "332043bc-409e-478e-bdf2-02781ad73045",
          "links": {
              "pdf_content": "/documents/332043bc-409e-478e-bdf2-02781ad73045/download-link",
              "preview": "/v1/preview/332043bc-409e-478e-bdf2-02781ad73045"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53939,
          "name": "FURNIZORI A-C FEBR-page3-04-09-24-11-16-48.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:45",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "411f85aa-dced-4f7c-84dd-4a8fe8c60e76",
          "links": {
              "pdf_content": "/documents/411f85aa-dced-4f7c-84dd-4a8fe8c60e76/download-link",
              "preview": "/v1/preview/411f85aa-dced-4f7c-84dd-4a8fe8c60e76"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53938,
          "name": "FURNIZORI A-C FEBR-page2-04-09-24-11-16-52.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:45",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "a6214bbc-8a07-4e24-88c8-90f97b34f5a2",
          "links": {
              "pdf_content": "/documents/a6214bbc-8a07-4e24-88c8-90f97b34f5a2/download-link",
              "preview": "/v1/preview/a6214bbc-8a07-4e24-88c8-90f97b34f5a2"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53936,
          "name": "FURNIZORI A-C FEBR-page1-04-09-24-11-16-46.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:45",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "ca3cd9ba-f2ea-4971-bcc1-81784773264e",
          "links": {
              "pdf_content": "/documents/ca3cd9ba-f2ea-4971-bcc1-81784773264e/download-link",
              "preview": "/v1/preview/ca3cd9ba-f2ea-4971-bcc1-81784773264e"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53946,
          "name": "FURNIZORI A FEBR-page9-04-09-24-11-17-00.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:45",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "0b39753b-3590-423a-b94d-9b27a04fc6e6",
          "links": {
              "pdf_content": "/documents/0b39753b-3590-423a-b94d-9b27a04fc6e6/download-link",
              "preview": "/v1/preview/0b39753b-3590-423a-b94d-9b27a04fc6e6"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53943,
          "name": "FURNIZORI A FEBR-page8-04-09-24-11-16-58.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:45",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "1f16ae89-3e48-427e-adc6-4f98f21ca356",
          "links": {
              "pdf_content": "/documents/1f16ae89-3e48-427e-adc6-4f98f21ca356/download-link",
              "preview": "/v1/preview/1f16ae89-3e48-427e-adc6-4f98f21ca356"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53942,
          "name": "FURNIZORI A FEBR-page7-04-09-24-11-16-57.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:45",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "f732e826-36de-4a97-adc6-1eb0f8c3a995",
          "links": {
              "pdf_content": "/documents/f732e826-36de-4a97-adc6-1eb0f8c3a995/download-link",
              "preview": "/v1/preview/f732e826-36de-4a97-adc6-1eb0f8c3a995"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53940,
          "name": "FURNIZORI A FEBR-page6-04-09-24-11-16-54.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:45",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "e0210faf-71b4-4bae-a7de-bd8e4c184d89",
          "links": {
              "pdf_content": "/documents/e0210faf-71b4-4bae-a7de-bd8e4c184d89/download-link",
              "preview": "/v1/preview/e0210faf-71b4-4bae-a7de-bd8e4c184d89"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53937,
          "name": "FURNIZORI A FEBR-page5-04-09-24-11-16-49.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:45",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "269f826b-2704-45e1-a524-4fc39cd1471d",
          "links": {
              "pdf_content": "/documents/269f826b-2704-45e1-a524-4fc39cd1471d/download-link",
              "preview": "/v1/preview/269f826b-2704-45e1-a524-4fc39cd1471d"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53935,
          "name": "FURNIZORI A FEBR-page4-04-09-24-11-16-52.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:44",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "8759782b-3cbe-4f11-b6b2-c7239b8e176b",
          "links": {
              "pdf_content": "/documents/8759782b-3cbe-4f11-b6b2-c7239b8e176b/download-link",
              "preview": "/v1/preview/8759782b-3cbe-4f11-b6b2-c7239b8e176b"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53934,
          "name": "FURNIZORI A FEBR-page3-04-09-24-11-16-51.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:44",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "42c58d26-d8a2-4917-9385-62a094638f27",
          "links": {
              "pdf_content": "/documents/42c58d26-d8a2-4917-9385-62a094638f27/download-link",
              "preview": "/v1/preview/42c58d26-d8a2-4917-9385-62a094638f27"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53933,
          "name": "FURNIZORI A FEBR-page2-04-09-24-11-16-46.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:44",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "fbc5f615-17a9-4db0-817a-dd2bcf20af9d",
          "links": {
              "pdf_content": "/documents/fbc5f615-17a9-4db0-817a-dd2bcf20af9d/download-link",
              "preview": "/v1/preview/fbc5f615-17a9-4db0-817a-dd2bcf20af9d"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53932,
          "name": "FURNIZORI A FEBR-page1-04-09-24-11-16-46.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:16:44",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "b6a69a33-58ee-43a5-ba40-9e412c2c7199",
          "links": {
              "pdf_content": "/documents/b6a69a33-58ee-43a5-ba40-9e412c2c7199/download-link",
              "preview": "/v1/preview/b6a69a33-58ee-43a5-ba40-9e412c2c7199"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53927,
          "name": "FURNIZORI F-G FEBR-page10-04-09-24-11-11-35.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:36",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "84f593e3-8e7d-4eb0-8b69-b5cf209c34d4",
          "links": {
              "pdf_content": "/documents/84f593e3-8e7d-4eb0-8b69-b5cf209c34d4/download-link",
              "preview": "/v1/preview/84f593e3-8e7d-4eb0-8b69-b5cf209c34d4"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53926,
          "name": "FURNIZORI F-G FEBR-page9-04-09-24-11-11-31.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:34",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "6a1820b9-8ccd-42ef-88c9-2993d4e52912",
          "links": {
              "pdf_content": "/documents/6a1820b9-8ccd-42ef-88c9-2993d4e52912/download-link",
              "preview": "/v1/preview/6a1820b9-8ccd-42ef-88c9-2993d4e52912"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53925,
          "name": "FURNIZORI F-G FEBR-page8-04-09-24-11-11-31.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:33",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "2c7e3cd7-2ff2-4674-b8cd-2f2f69f488dd",
          "links": {
              "pdf_content": "/documents/2c7e3cd7-2ff2-4674-b8cd-2f2f69f488dd/download-link",
              "preview": "/v1/preview/2c7e3cd7-2ff2-4674-b8cd-2f2f69f488dd"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53924,
          "name": "FURNIZORI F-G FEBR-page7-04-09-24-11-11-30.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:33",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "c246137f-c44d-45d1-9d6c-d2902cb34205",
          "links": {
              "pdf_content": "/documents/c246137f-c44d-45d1-9d6c-d2902cb34205/download-link",
              "preview": "/v1/preview/c246137f-c44d-45d1-9d6c-d2902cb34205"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53923,
          "name": "FURNIZORI F-G FEBR-page6-04-09-24-11-11-30.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:32",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "beb81605-4ebb-4569-8edf-56d9fe8dedf3",
          "links": {
              "pdf_content": "/documents/beb81605-4ebb-4569-8edf-56d9fe8dedf3/download-link",
              "preview": "/v1/preview/beb81605-4ebb-4569-8edf-56d9fe8dedf3"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53922,
          "name": "FURNIZORI F-G FEBR-page5-04-09-24-11-11-30.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:30",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "9aabebfc-9130-4ee5-91aa-b94b91b55d30",
          "links": {
              "pdf_content": "/documents/9aabebfc-9130-4ee5-91aa-b94b91b55d30/download-link",
              "preview": "/v1/preview/9aabebfc-9130-4ee5-91aa-b94b91b55d30"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53921,
          "name": "FURNIZORI F-G FEBR-page4-04-09-24-11-11-34.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:30",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "b67e3825-1eae-4366-907e-c07c01546c8a",
          "links": {
              "pdf_content": "/documents/b67e3825-1eae-4366-907e-c07c01546c8a/download-link",
              "preview": "/v1/preview/b67e3825-1eae-4366-907e-c07c01546c8a"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53920,
          "name": "FURNIZORI F-G FEBR-page3-04-09-24-11-11-30.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:30",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "c7efdcaa-f008-4586-a7a5-94ac9d6f081e",
          "links": {
              "pdf_content": "/documents/c7efdcaa-f008-4586-a7a5-94ac9d6f081e/download-link",
              "preview": "/v1/preview/c7efdcaa-f008-4586-a7a5-94ac9d6f081e"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53919,
          "name": "FURNIZORI F-G FEBR-page2-04-09-24-11-11-30.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:30",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "d45d226d-c869-48a9-adfd-951d6e7968f3",
          "links": {
              "pdf_content": "/documents/d45d226d-c869-48a9-adfd-951d6e7968f3/download-link",
              "preview": "/v1/preview/d45d226d-c869-48a9-adfd-951d6e7968f3"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53918,
          "name": "FURNIZORI F-G FEBR-page1-04-09-24-11-11-30.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:30",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "5acb6780-d228-4f19-8a23-5521ef9bb4cb",
          "links": {
              "pdf_content": "/documents/5acb6780-d228-4f19-8a23-5521ef9bb4cb/download-link",
              "preview": "/v1/preview/5acb6780-d228-4f19-8a23-5521ef9bb4cb"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53916,
          "name": "FURNIZORI N FEBR-page9-04-09-24-11-11-30.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:29",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "035fdfd4-0f97-4037-850c-a7796bde927e",
          "links": {
              "pdf_content": "/documents/035fdfd4-0f97-4037-850c-a7796bde927e/download-link",
              "preview": "/v1/preview/035fdfd4-0f97-4037-850c-a7796bde927e"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53917,
          "name": "FURNIZORI N FEBR-page10-04-09-24-11-11-30.pdf",
          "category": "proces_verbal",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:29",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "4a4251ca-e3e6-459a-bc07-392157633e68",
          "links": {
              "pdf_content": "/documents/4a4251ca-e3e6-459a-bc07-392157633e68/download-link",
              "preview": "/v1/preview/4a4251ca-e3e6-459a-bc07-392157633e68"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53915,
          "name": "FURNIZORI N FEBR-page8-04-09-24-11-11-29.pdf",
          "category": "proces_verbal",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:27",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "6b1e539c-cd24-4e1d-a966-4b8e2d6f29e5",
          "links": {
              "pdf_content": "/documents/6b1e539c-cd24-4e1d-a966-4b8e2d6f29e5/download-link",
              "preview": "/v1/preview/6b1e539c-cd24-4e1d-a966-4b8e2d6f29e5"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53914,
          "name": "FURNIZORI N FEBR-page7-04-09-24-11-11-29.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:27",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "559729fd-37a3-4da7-9d56-8c1b085f724c",
          "links": {
              "pdf_content": "/documents/559729fd-37a3-4da7-9d56-8c1b085f724c/download-link",
              "preview": "/v1/preview/559729fd-37a3-4da7-9d56-8c1b085f724c"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53913,
          "name": "FURNIZORI N FEBR-page6-04-09-24-11-11-29.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:27",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "1c363e79-427f-4b55-aa2a-46d1579f0e88",
          "links": {
              "pdf_content": "/documents/1c363e79-427f-4b55-aa2a-46d1579f0e88/download-link",
              "preview": "/v1/preview/1c363e79-427f-4b55-aa2a-46d1579f0e88"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53912,
          "name": "FURNIZORI N FEBR-page4-5-04-09-24-11-11-32.pdf",
          "category": "facturi_utilitati",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:27",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 2,
          "type": FileType.PDF,
          "operation_id": "1e853a2b-4004-44c8-b66e-6f4f151a8778",
          "links": {
              "pdf_content": "/documents/1e853a2b-4004-44c8-b66e-6f4f151a8778/download-link",
              "preview": "/v1/preview/1e853a2b-4004-44c8-b66e-6f4f151a8778"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53911,
          "name": "FURNIZORI N FEBR-page2-3-04-09-24-11-11-28.pdf",
          "category": "facturi_utilitati",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:27",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 2,
          "type": FileType.PDF,
          "operation_id": "82270ca0-763b-4d61-85b4-970cef541b8c",
          "links": {
              "pdf_content": "/documents/82270ca0-763b-4d61-85b4-970cef541b8c/download-link",
              "preview": "/v1/preview/82270ca0-763b-4d61-85b4-970cef541b8c"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53910,
          "name": "FURNIZORI N FEBR-page1-04-09-24-11-11-28.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:27",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "60e5ab92-fad4-4ca0-a470-b3ed08daa425",
          "links": {
              "pdf_content": "/documents/60e5ab92-fad4-4ca0-a470-b3ed08daa425/download-link",
              "preview": "/v1/preview/60e5ab92-fad4-4ca0-a470-b3ed08daa425"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53908,
          "name": "FURNIZORI A FEBR-page9-04-09-24-11-11-29.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:27",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "381448b6-aaaf-49a9-8e3e-fbfc916e6438",
          "links": {
              "pdf_content": "/documents/381448b6-aaaf-49a9-8e3e-fbfc916e6438/download-link",
              "preview": "/v1/preview/381448b6-aaaf-49a9-8e3e-fbfc916e6438"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53909,
          "name": "FURNIZORI A FEBR-page10-04-09-24-11-11-29.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:27",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "598702ba-e8d1-4bc2-95ae-1cff341408cc",
          "links": {
              "pdf_content": "/documents/598702ba-e8d1-4bc2-95ae-1cff341408cc/download-link",
              "preview": "/v1/preview/598702ba-e8d1-4bc2-95ae-1cff341408cc"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53902,
          "name": "FURNIZORI A-C FEBR-page9-04-09-24-11-11-32.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:26",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "f1317b0a-c1d9-4635-be5b-d752602decf8",
          "links": {
              "pdf_content": "/documents/f1317b0a-c1d9-4635-be5b-d752602decf8/download-link",
              "preview": "/v1/preview/f1317b0a-c1d9-4635-be5b-d752602decf8"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53900,
          "name": "FURNIZORI A-C FEBR-page8-04-09-24-11-11-28.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:26",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "c4931347-b857-4f19-86ae-1edd6ead0e9a",
          "links": {
              "pdf_content": "/documents/c4931347-b857-4f19-86ae-1edd6ead0e9a/download-link",
              "preview": "/v1/preview/c4931347-b857-4f19-86ae-1edd6ead0e9a"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53898,
          "name": "FURNIZORI A-C FEBR-page7-04-09-24-11-11-28.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:26",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "3e476c6d-ce37-4ad2-be8a-c44fc3ddc03c",
          "links": {
              "pdf_content": "/documents/3e476c6d-ce37-4ad2-be8a-c44fc3ddc03c/download-link",
              "preview": "/v1/preview/3e476c6d-ce37-4ad2-be8a-c44fc3ddc03c"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53904,
          "name": "FURNIZORI A-C FEBR-page10-04-09-24-11-11-32.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:26",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "8d127b6f-bf0c-407e-b214-084b1ba6fa59",
          "links": {
              "pdf_content": "/documents/8d127b6f-bf0c-407e-b214-084b1ba6fa59/download-link",
              "preview": "/v1/preview/8d127b6f-bf0c-407e-b214-084b1ba6fa59"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53907,
          "name": "FURNIZORI A FEBR-page8-04-09-24-11-11-28.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:26",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "4c413e3a-205c-455a-9d4b-26341b45b257",
          "links": {
              "pdf_content": "/documents/4c413e3a-205c-455a-9d4b-26341b45b257/download-link",
              "preview": "/v1/preview/4c413e3a-205c-455a-9d4b-26341b45b257"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53906,
          "name": "FURNIZORI A FEBR-page7-04-09-24-11-11-29.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:26",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "3f0896a9-568c-49dc-8746-7e4669198c44",
          "links": {
              "pdf_content": "/documents/3f0896a9-568c-49dc-8746-7e4669198c44/download-link",
              "preview": "/v1/preview/3f0896a9-568c-49dc-8746-7e4669198c44"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53905,
          "name": "FURNIZORI A FEBR-page6-04-09-24-11-11-28.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:26",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "2bb70101-8d46-40fc-b009-6960bcf36bab",
          "links": {
              "pdf_content": "/documents/2bb70101-8d46-40fc-b009-6960bcf36bab/download-link",
              "preview": "/v1/preview/2bb70101-8d46-40fc-b009-6960bcf36bab"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53903,
          "name": "FURNIZORI A FEBR-page5-04-09-24-11-11-28.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:26",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "c7ed3e15-90d3-4c5f-9e6b-56e368001aef",
          "links": {
              "pdf_content": "/documents/c7ed3e15-90d3-4c5f-9e6b-56e368001aef/download-link",
              "preview": "/v1/preview/c7ed3e15-90d3-4c5f-9e6b-56e368001aef"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53901,
          "name": "FURNIZORI A FEBR-page4-04-09-24-11-11-28.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:26",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "96d5d79b-c105-40a6-906f-30fb3c57e68f",
          "links": {
              "pdf_content": "/documents/96d5d79b-c105-40a6-906f-30fb3c57e68f/download-link",
              "preview": "/v1/preview/96d5d79b-c105-40a6-906f-30fb3c57e68f"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53899,
          "name": "FURNIZORI A FEBR-page3-04-09-24-11-11-28.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:26",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "08257c35-1dd5-4ac2-a672-1d595f8be853",
          "links": {
              "pdf_content": "/documents/08257c35-1dd5-4ac2-a672-1d595f8be853/download-link",
              "preview": "/v1/preview/08257c35-1dd5-4ac2-a672-1d595f8be853"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53897,
          "name": "FURNIZORI A FEBR-page2-04-09-24-11-11-27.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:26",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "862e2c70-dc5a-4f72-94eb-030a6f3ab05d",
          "links": {
              "pdf_content": "/documents/862e2c70-dc5a-4f72-94eb-030a6f3ab05d/download-link",
              "preview": "/v1/preview/862e2c70-dc5a-4f72-94eb-030a6f3ab05d"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53895,
          "name": "FURNIZORI A-C FEBR-page6-04-09-24-11-11-28.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:25",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "40823d1a-b346-4372-923a-dddf5e6311c6",
          "links": {
              "pdf_content": "/documents/40823d1a-b346-4372-923a-dddf5e6311c6/download-link",
              "preview": "/v1/preview/40823d1a-b346-4372-923a-dddf5e6311c6"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53894,
          "name": "FURNIZORI A-C FEBR-page5-04-09-24-11-11-28.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:25",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "8c892967-6f7f-481a-aff4-c1a0c3b3fff9",
          "links": {
              "pdf_content": "/documents/8c892967-6f7f-481a-aff4-c1a0c3b3fff9/download-link",
              "preview": "/v1/preview/8c892967-6f7f-481a-aff4-c1a0c3b3fff9"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53893,
          "name": "FURNIZORI A-C FEBR-page4-04-09-24-11-11-28.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:25",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "92fcded7-ba61-4255-9177-73a2b431f803",
          "links": {
              "pdf_content": "/documents/92fcded7-ba61-4255-9177-73a2b431f803/download-link",
              "preview": "/v1/preview/92fcded7-ba61-4255-9177-73a2b431f803"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53892,
          "name": "FURNIZORI A-C FEBR-page3-04-09-24-11-11-27.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:25",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "ec0ff004-30f2-4ae6-9b06-9eca0a08a5be",
          "links": {
              "pdf_content": "/documents/ec0ff004-30f2-4ae6-9b06-9eca0a08a5be/download-link",
              "preview": "/v1/preview/ec0ff004-30f2-4ae6-9b06-9eca0a08a5be"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53891,
          "name": "FURNIZORI A-C FEBR-page2-04-09-24-11-11-27.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:25",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "3963e6ff-4260-44cf-a1e4-999c61cb2de6",
          "links": {
              "pdf_content": "/documents/3963e6ff-4260-44cf-a1e4-999c61cb2de6/download-link",
              "preview": "/v1/preview/3963e6ff-4260-44cf-a1e4-999c61cb2de6"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53890,
          "name": "FURNIZORI A-C FEBR-page1-04-09-24-11-11-26.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:25",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "adfc38eb-115f-4431-a039-4099b4ecd04f",
          "links": {
              "pdf_content": "/documents/adfc38eb-115f-4431-a039-4099b4ecd04f/download-link",
              "preview": "/v1/preview/adfc38eb-115f-4431-a039-4099b4ecd04f"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53896,
          "name": "FURNIZORI A FEBR-page1-04-09-24-11-11-26.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:11:25",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "b9d1cdf3-e593-4667-9894-6770d89a960d",
          "links": {
              "pdf_content": "/documents/b9d1cdf3-e593-4667-9894-6770d89a960d/download-link",
              "preview": "/v1/preview/b9d1cdf3-e593-4667-9894-6770d89a960d"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53884,
          "name": "FURNIZORI F-G FEBR-page9-04-09-24-11-06-44.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:14",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "bae219dc-abc0-49ff-b9ce-044b5c8db5fe",
          "links": {
              "pdf_content": "/documents/bae219dc-abc0-49ff-b9ce-044b5c8db5fe/download-link",
              "preview": "/v1/preview/bae219dc-abc0-49ff-b9ce-044b5c8db5fe"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53883,
          "name": "FURNIZORI F-G FEBR-page8-04-09-24-11-06-42.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:14",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "79f3b677-c860-4a2b-95e7-d5140d1c99d0",
          "links": {
              "pdf_content": "/documents/79f3b677-c860-4a2b-95e7-d5140d1c99d0/download-link",
              "preview": "/v1/preview/79f3b677-c860-4a2b-95e7-d5140d1c99d0"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53882,
          "name": "FURNIZORI F-G FEBR-page7-04-09-24-11-06-42.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:14",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "4fa95694-2138-4b4b-8bc9-561efd9552c2",
          "links": {
              "pdf_content": "/documents/4fa95694-2138-4b4b-8bc9-561efd9552c2/download-link",
              "preview": "/v1/preview/4fa95694-2138-4b4b-8bc9-561efd9552c2"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53885,
          "name": "FURNIZORI F-G FEBR-page10-04-09-24-11-06-44.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:14",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "ae60c435-b24c-48e2-83d7-6366f8f13982",
          "links": {
              "pdf_content": "/documents/ae60c435-b24c-48e2-83d7-6366f8f13982/download-link",
              "preview": "/v1/preview/ae60c435-b24c-48e2-83d7-6366f8f13982"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53881,
          "name": "FURNIZORI F-G FEBR-page6-04-09-24-11-06-41.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:13",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "7a918203-dce1-4627-b025-5ed5fd8f1a0b",
          "links": {
              "pdf_content": "/documents/7a918203-dce1-4627-b025-5ed5fd8f1a0b/download-link",
              "preview": "/v1/preview/7a918203-dce1-4627-b025-5ed5fd8f1a0b"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53880,
          "name": "FURNIZORI F-G FEBR-page5-04-09-24-11-06-38.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:13",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "f206ab5e-b8dd-42cc-bf37-4172fe23efd0",
          "links": {
              "pdf_content": "/documents/f206ab5e-b8dd-42cc-bf37-4172fe23efd0/download-link",
              "preview": "/v1/preview/f206ab5e-b8dd-42cc-bf37-4172fe23efd0"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53879,
          "name": "FURNIZORI F-G FEBR-page4-04-09-24-11-06-38.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:13",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "3595dffb-ca43-42d8-83ee-a6338e25df1a",
          "links": {
              "pdf_content": "/documents/3595dffb-ca43-42d8-83ee-a6338e25df1a/download-link",
              "preview": "/v1/preview/3595dffb-ca43-42d8-83ee-a6338e25df1a"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53878,
          "name": "FURNIZORI F-G FEBR-page3-04-09-24-11-06-36.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:13",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "33669aa8-6a5e-4657-8119-0ef9791c2fb3",
          "links": {
              "pdf_content": "/documents/33669aa8-6a5e-4657-8119-0ef9791c2fb3/download-link",
              "preview": "/v1/preview/33669aa8-6a5e-4657-8119-0ef9791c2fb3"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53877,
          "name": "FURNIZORI F-G FEBR-page2-04-09-24-11-06-35.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:13",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "ecacc3e2-16b8-460e-bc1c-c493d1d4b146",
          "links": {
              "pdf_content": "/documents/ecacc3e2-16b8-460e-bc1c-c493d1d4b146/download-link",
              "preview": "/v1/preview/ecacc3e2-16b8-460e-bc1c-c493d1d4b146"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53876,
          "name": "FURNIZORI F-G FEBR-page1-04-09-24-11-06-36.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:13",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "ef9f5bdb-6834-4cfd-8b9c-36915c633a86",
          "links": {
              "pdf_content": "/documents/ef9f5bdb-6834-4cfd-8b9c-36915c633a86/download-link",
              "preview": "/v1/preview/ef9f5bdb-6834-4cfd-8b9c-36915c633a86"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53874,
          "name": "FURNIZORI A-C FEBR-page10-04-09-24-11-06-30.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:09",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "55729b80-76f9-4cdb-8b27-7cc0e41f2a56",
          "links": {
              "pdf_content": "/documents/55729b80-76f9-4cdb-8b27-7cc0e41f2a56/download-link",
              "preview": "/v1/preview/55729b80-76f9-4cdb-8b27-7cc0e41f2a56"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53875,
          "name": "FURNIZORI A FEBR-page10-04-09-24-11-06-32.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:09",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "96414c95-8289-40e3-a89f-afd90b71b8bb",
          "links": {
              "pdf_content": "/documents/96414c95-8289-40e3-a89f-afd90b71b8bb/download-link",
              "preview": "/v1/preview/96414c95-8289-40e3-a89f-afd90b71b8bb"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53873,
          "name": "FURNIZORI A-C FEBR-page9-04-09-24-11-06-29.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:08",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "a6db679e-2a78-4e91-8338-8379066df2e8",
          "links": {
              "pdf_content": "/documents/a6db679e-2a78-4e91-8338-8379066df2e8/download-link",
              "preview": "/v1/preview/a6db679e-2a78-4e91-8338-8379066df2e8"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53871,
          "name": "FURNIZORI A-C FEBR-page8-04-09-24-11-06-24.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:08",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "178c6ac7-dcdf-483a-952a-98c2d2982b1d",
          "links": {
              "pdf_content": "/documents/178c6ac7-dcdf-483a-952a-98c2d2982b1d/download-link",
              "preview": "/v1/preview/178c6ac7-dcdf-483a-952a-98c2d2982b1d"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53869,
          "name": "FURNIZORI A-C FEBR-page7-04-09-24-11-06-26.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:08",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "27db1471-37cb-46ee-9d1a-4656c0818c98",
          "links": {
              "pdf_content": "/documents/27db1471-37cb-46ee-9d1a-4656c0818c98/download-link",
              "preview": "/v1/preview/27db1471-37cb-46ee-9d1a-4656c0818c98"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53868,
          "name": "FURNIZORI A-C FEBR-page6-04-09-24-11-06-23.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:08",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "45611be9-030f-48ae-b716-c008604cd10f",
          "links": {
              "pdf_content": "/documents/45611be9-030f-48ae-b716-c008604cd10f/download-link",
              "preview": "/v1/preview/45611be9-030f-48ae-b716-c008604cd10f"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53865,
          "name": "FURNIZORI A-C FEBR-page5-04-09-24-11-06-20.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:08",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "c4b66259-e4e2-463c-996c-46eb65fc8ca7",
          "links": {
              "pdf_content": "/documents/c4b66259-e4e2-463c-996c-46eb65fc8ca7/download-link",
              "preview": "/v1/preview/c4b66259-e4e2-463c-996c-46eb65fc8ca7"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53872,
          "name": "FURNIZORI A FEBR-page9-04-09-24-11-06-32.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:08",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "c9cb9467-af55-4635-9094-7ce16ccb1642",
          "links": {
              "pdf_content": "/documents/c9cb9467-af55-4635-9094-7ce16ccb1642/download-link",
              "preview": "/v1/preview/c9cb9467-af55-4635-9094-7ce16ccb1642"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53870,
          "name": "FURNIZORI A FEBR-page8-04-09-24-11-06-30.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:08",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "d54816f7-308c-4c7a-a539-683157c68de7",
          "links": {
              "pdf_content": "/documents/d54816f7-308c-4c7a-a539-683157c68de7/download-link",
              "preview": "/v1/preview/d54816f7-308c-4c7a-a539-683157c68de7"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53867,
          "name": "FURNIZORI A FEBR-page7-04-09-24-11-06-26.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:08",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "f2534a97-fa48-4988-827b-89aa0f869a48",
          "links": {
              "pdf_content": "/documents/f2534a97-fa48-4988-827b-89aa0f869a48/download-link",
              "preview": "/v1/preview/f2534a97-fa48-4988-827b-89aa0f869a48"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53866,
          "name": "FURNIZORI A FEBR-page6-04-09-24-11-06-24.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:08",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "914a3caa-3d24-4e64-979a-5bfda241a7b7",
          "links": {
              "pdf_content": "/documents/914a3caa-3d24-4e64-979a-5bfda241a7b7/download-link",
              "preview": "/v1/preview/914a3caa-3d24-4e64-979a-5bfda241a7b7"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53863,
          "name": "FURNIZORI A-C FEBR-page4-04-09-24-11-06-17.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:07",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "6ebd2f25-aeb5-4c66-8079-15894fd9262f",
          "links": {
              "pdf_content": "/documents/6ebd2f25-aeb5-4c66-8079-15894fd9262f/download-link",
              "preview": "/v1/preview/6ebd2f25-aeb5-4c66-8079-15894fd9262f"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53862,
          "name": "FURNIZORI A-C FEBR-page3-04-09-24-11-06-12.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:07",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "5a50f16e-0ce9-4fde-8375-41814c76ef07",
          "links": {
              "pdf_content": "/documents/5a50f16e-0ce9-4fde-8375-41814c76ef07/download-link",
              "preview": "/v1/preview/5a50f16e-0ce9-4fde-8375-41814c76ef07"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53859,
          "name": "FURNIZORI A-C FEBR-page2-04-09-24-11-06-08.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:07",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "c40d8021-b4e4-483e-9759-4c46221cdf25",
          "links": {
              "pdf_content": "/documents/c40d8021-b4e4-483e-9759-4c46221cdf25/download-link",
              "preview": "/v1/preview/c40d8021-b4e4-483e-9759-4c46221cdf25"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53857,
          "name": "FURNIZORI A-C FEBR-page1-04-09-24-11-06-08.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:07",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "9d3a10ac-2672-455b-86d7-5876b072beb1",
          "links": {
              "pdf_content": "/documents/9d3a10ac-2672-455b-86d7-5876b072beb1/download-link",
              "preview": "/v1/preview/9d3a10ac-2672-455b-86d7-5876b072beb1"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53864,
          "name": "FURNIZORI A FEBR-page5-04-09-24-11-06-20.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:07",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "f8065211-8a2f-4137-9600-ada79720cd9c",
          "links": {
              "pdf_content": "/documents/f8065211-8a2f-4137-9600-ada79720cd9c/download-link",
              "preview": "/v1/preview/f8065211-8a2f-4137-9600-ada79720cd9c"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53861,
          "name": "FURNIZORI A FEBR-page4-04-09-24-11-06-18.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:07",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "f32d3e17-487f-4b19-b226-7eaf2b99fb93",
          "links": {
              "pdf_content": "/documents/f32d3e17-487f-4b19-b226-7eaf2b99fb93/download-link",
              "preview": "/v1/preview/f32d3e17-487f-4b19-b226-7eaf2b99fb93"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53860,
          "name": "FURNIZORI A FEBR-page3-04-09-24-11-06-08.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:07",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "fb83f2dc-bfac-4216-8461-15b2b48b52b8",
          "links": {
              "pdf_content": "/documents/fb83f2dc-bfac-4216-8461-15b2b48b52b8/download-link",
              "preview": "/v1/preview/fb83f2dc-bfac-4216-8461-15b2b48b52b8"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53858,
          "name": "FURNIZORI A FEBR-page2-04-09-24-11-06-08.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:07",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "8cb8c8c4-8d6c-4974-86a7-8839ee71a99b",
          "links": {
              "pdf_content": "/documents/8cb8c8c4-8d6c-4974-86a7-8839ee71a99b/download-link",
              "preview": "/v1/preview/8cb8c8c4-8d6c-4974-86a7-8839ee71a99b"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53856,
          "name": "FURNIZORI A FEBR-page1-04-09-24-11-06-08.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:06:07",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "a70d81f6-ca74-4178-b90b-23f96dc05f45",
          "links": {
              "pdf_content": "/documents/a70d81f6-ca74-4178-b90b-23f96dc05f45/download-link",
              "preview": "/v1/preview/a70d81f6-ca74-4178-b90b-23f96dc05f45"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53851,
          "name": "FURNIZORI N FEBR-page9-04-09-24-11-02-31.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:29",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "4527e03c-81e1-40b5-b860-e9b2b878474e",
          "links": {
              "pdf_content": "/documents/4527e03c-81e1-40b5-b860-e9b2b878474e/download-link",
              "preview": "/v1/preview/4527e03c-81e1-40b5-b860-e9b2b878474e"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53850,
          "name": "FURNIZORI N FEBR-page8-04-09-24-11-02-29.pdf",
          "category": "proces_verbal",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:29",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "75ac9e68-36ef-422f-8017-e5fc5604d085",
          "links": {
              "pdf_content": "/documents/75ac9e68-36ef-422f-8017-e5fc5604d085/download-link",
              "preview": "/v1/preview/75ac9e68-36ef-422f-8017-e5fc5604d085"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53849,
          "name": "FURNIZORI N FEBR-page7-04-09-24-11-02-29.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:29",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "c1cd8356-22b6-4e09-bf7e-b16f42f3afcb",
          "links": {
              "pdf_content": "/documents/c1cd8356-22b6-4e09-bf7e-b16f42f3afcb/download-link",
              "preview": "/v1/preview/c1cd8356-22b6-4e09-bf7e-b16f42f3afcb"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53852,
          "name": "FURNIZORI N FEBR-page10-04-09-24-11-02-31.pdf",
          "category": "proces_verbal",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:29",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "e46dd677-87ad-4e24-8380-08626a83ad14",
          "links": {
              "pdf_content": "/documents/e46dd677-87ad-4e24-8380-08626a83ad14/download-link",
              "preview": "/v1/preview/e46dd677-87ad-4e24-8380-08626a83ad14"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53848,
          "name": "FURNIZORI N FEBR-page6-04-09-24-11-02-28.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:28",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "ef5b1e98-3223-410b-a80d-e8b15aa5dcbe",
          "links": {
              "pdf_content": "/documents/ef5b1e98-3223-410b-a80d-e8b15aa5dcbe/download-link",
              "preview": "/v1/preview/ef5b1e98-3223-410b-a80d-e8b15aa5dcbe"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53847,
          "name": "FURNIZORI N FEBR-page4-5-04-09-24-11-02-28.pdf",
          "category": "facturi_utilitati",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:28",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 2,
          "type": FileType.PDF,
          "operation_id": "d4bbf861-9e1c-4298-bab8-c7743d61996e",
          "links": {
              "pdf_content": "/documents/d4bbf861-9e1c-4298-bab8-c7743d61996e/download-link",
              "preview": "/v1/preview/d4bbf861-9e1c-4298-bab8-c7743d61996e"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53846,
          "name": "FURNIZORI N FEBR-page2-3-04-09-24-11-02-28.pdf",
          "category": "facturi_utilitati",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:28",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 2,
          "type": FileType.PDF,
          "operation_id": "832680ee-a5a3-4f73-8877-f792b46e264b",
          "links": {
              "pdf_content": "/documents/832680ee-a5a3-4f73-8877-f792b46e264b/download-link",
              "preview": "/v1/preview/832680ee-a5a3-4f73-8877-f792b46e264b"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53845,
          "name": "FURNIZORI N FEBR-page1-04-09-24-11-02-28.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:28",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "f4820ffb-e11c-4cad-ba19-edca84b4db64",
          "links": {
              "pdf_content": "/documents/f4820ffb-e11c-4cad-ba19-edca84b4db64/download-link",
              "preview": "/v1/preview/f4820ffb-e11c-4cad-ba19-edca84b4db64"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53841,
          "name": "FF ACROSALE FEBR-page9.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:25",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "fe4ab83c-51a7-45ff-801f-b757c8e6bf2c",
          "links": {
              "pdf_content": "/documents/fe4ab83c-51a7-45ff-801f-b757c8e6bf2c/download-link",
              "preview": "/v1/preview/fe4ab83c-51a7-45ff-801f-b757c8e6bf2c"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53840,
          "name": "FF ACROSALE FEBR-page8.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:25",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "39e89305-b6df-485f-b168-11d95b3d47b9",
          "links": {
              "pdf_content": "/documents/39e89305-b6df-485f-b168-11d95b3d47b9/download-link",
              "preview": "/v1/preview/39e89305-b6df-485f-b168-11d95b3d47b9"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53844,
          "name": "FF ACROSALE FEBR-page12.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:25",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "a621ec10-a10e-4d57-9f3b-00817bccc914",
          "links": {
              "pdf_content": "/documents/a621ec10-a10e-4d57-9f3b-00817bccc914/download-link",
              "preview": "/v1/preview/a621ec10-a10e-4d57-9f3b-00817bccc914"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53843,
          "name": "FF ACROSALE FEBR-page11.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:25",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "fd5a83d1-8162-43cf-b8e1-443f0a21bdee",
          "links": {
              "pdf_content": "/documents/fd5a83d1-8162-43cf-b8e1-443f0a21bdee/download-link",
              "preview": "/v1/preview/fd5a83d1-8162-43cf-b8e1-443f0a21bdee"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53842,
          "name": "FF ACROSALE FEBR-page10.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:25",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "d9d88c23-1c29-43e9-8613-17a8ce3128b0",
          "links": {
              "pdf_content": "/documents/d9d88c23-1c29-43e9-8613-17a8ce3128b0/download-link",
              "preview": "/v1/preview/d9d88c23-1c29-43e9-8613-17a8ce3128b0"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53839,
          "name": "FF ACROSALE FEBR-page7.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:24",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "99ad4b25-ed55-47a0-b1c1-be37aca20323",
          "links": {
              "pdf_content": "/documents/99ad4b25-ed55-47a0-b1c1-be37aca20323/download-link",
              "preview": "/v1/preview/99ad4b25-ed55-47a0-b1c1-be37aca20323"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53838,
          "name": "FF ACROSALE FEBR-page6.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:24",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "8bff807b-30d0-4819-b16f-f91ca40bb52e",
          "links": {
              "pdf_content": "/documents/8bff807b-30d0-4819-b16f-f91ca40bb52e/download-link",
              "preview": "/v1/preview/8bff807b-30d0-4819-b16f-f91ca40bb52e"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53837,
          "name": "FF ACROSALE FEBR-page5.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:24",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "c4adfbb4-1ce3-49c7-a630-a62d40a03235",
          "links": {
              "pdf_content": "/documents/c4adfbb4-1ce3-49c7-a630-a62d40a03235/download-link",
              "preview": "/v1/preview/c4adfbb4-1ce3-49c7-a630-a62d40a03235"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53836,
          "name": "FF ACROSALE FEBR-page4.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:24",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "652a1906-b25b-42a7-a212-3528bfe2708b",
          "links": {
              "pdf_content": "/documents/652a1906-b25b-42a7-a212-3528bfe2708b/download-link",
              "preview": "/v1/preview/652a1906-b25b-42a7-a212-3528bfe2708b"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53835,
          "name": "FF ACROSALE FEBR-page3.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:24",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "fd59c5e4-de8f-4f9d-ae11-977b27e596dc",
          "links": {
              "pdf_content": "/documents/fd59c5e4-de8f-4f9d-ae11-977b27e596dc/download-link",
              "preview": "/v1/preview/fd59c5e4-de8f-4f9d-ae11-977b27e596dc"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53834,
          "name": "FF ACROSALE FEBR-page2.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:24",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "6af7a6f2-4076-4aa9-aabc-223bc1604eb7",
          "links": {
              "pdf_content": "/documents/6af7a6f2-4076-4aa9-aabc-223bc1604eb7/download-link",
              "preview": "/v1/preview/6af7a6f2-4076-4aa9-aabc-223bc1604eb7"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53833,
          "name": "FF ACROSALE FEBR-page1.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T11:02:24",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "8a891240-f124-45cc-aec5-2302ee3fe218",
          "links": {
              "pdf_content": "/documents/8a891240-f124-45cc-aec5-2302ee3fe218/download-link",
              "preview": "/v1/preview/8a891240-f124-45cc-aec5-2302ee3fe218"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53830,
          "name": "FURNIZORI N FEBR-page10.pdf",
          "category": "proces_verbal",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:42",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "a7349350-eb52-464d-b7ab-92d319948ed1",
          "links": {
              "pdf_content": "/documents/a7349350-eb52-464d-b7ab-92d319948ed1/download-link",
              "preview": "/v1/preview/a7349350-eb52-464d-b7ab-92d319948ed1"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53829,
          "name": "FURNIZORI N FEBR-page9.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:41",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "a747763b-7f0e-44f7-b9da-1f8fa7a73f13",
          "links": {
              "pdf_content": "/documents/a747763b-7f0e-44f7-b9da-1f8fa7a73f13/download-link",
              "preview": "/v1/preview/a747763b-7f0e-44f7-b9da-1f8fa7a73f13"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53828,
          "name": "FURNIZORI N FEBR-page8.pdf",
          "category": "proces_verbal",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:41",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "c1cc07f8-c649-408f-a891-26c0fc002fb5",
          "links": {
              "pdf_content": "/documents/c1cc07f8-c649-408f-a891-26c0fc002fb5/download-link",
              "preview": "/v1/preview/c1cc07f8-c649-408f-a891-26c0fc002fb5"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53827,
          "name": "FURNIZORI N FEBR-page7.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:41",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "a91c793c-fd71-4b57-893b-d028f2148ae5",
          "links": {
              "pdf_content": "/documents/a91c793c-fd71-4b57-893b-d028f2148ae5/download-link",
              "preview": "/v1/preview/a91c793c-fd71-4b57-893b-d028f2148ae5"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53826,
          "name": "FURNIZORI N FEBR-page6.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:40",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "19f31d1a-22c3-439f-ab32-819e6b1b63e1",
          "links": {
              "pdf_content": "/documents/19f31d1a-22c3-439f-ab32-819e6b1b63e1/download-link",
              "preview": "/v1/preview/19f31d1a-22c3-439f-ab32-819e6b1b63e1"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53825,
          "name": "FURNIZORI N FEBR-page4-5.pdf",
          "category": "facturi_utilitati",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:40",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 2,
          "type": FileType.PDF,
          "operation_id": "62575a44-a831-4a8c-8a91-af3315849aef",
          "links": {
              "pdf_content": "/documents/62575a44-a831-4a8c-8a91-af3315849aef/download-link",
              "preview": "/v1/preview/62575a44-a831-4a8c-8a91-af3315849aef"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53824,
          "name": "FURNIZORI N FEBR-page2-3.pdf",
          "category": "facturi_utilitati",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:40",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 2,
          "type": FileType.PDF,
          "operation_id": "5200cece-afea-4070-bf02-0653f662491c",
          "links": {
              "pdf_content": "/documents/5200cece-afea-4070-bf02-0653f662491c/download-link",
              "preview": "/v1/preview/5200cece-afea-4070-bf02-0653f662491c"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53823,
          "name": "FURNIZORI N FEBR-page1.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:40",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "9ca43a7d-b080-4270-99ae-e7c29d6871a8",
          "links": {
              "pdf_content": "/documents/9ca43a7d-b080-4270-99ae-e7c29d6871a8/download-link",
              "preview": "/v1/preview/9ca43a7d-b080-4270-99ae-e7c29d6871a8"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53821,
          "name": "FURNIZORI F-G FEBR-page9.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:36",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "0a4fe8d1-2ec7-443d-8c92-62eaf289aa14",
          "links": {
              "pdf_content": "/documents/0a4fe8d1-2ec7-443d-8c92-62eaf289aa14/download-link",
              "preview": "/v1/preview/0a4fe8d1-2ec7-443d-8c92-62eaf289aa14"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53820,
          "name": "FURNIZORI F-G FEBR-page8.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:36",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "9691251e-a68a-4815-a6c5-4ac56ec3579f",
          "links": {
              "pdf_content": "/documents/9691251e-a68a-4815-a6c5-4ac56ec3579f/download-link",
              "preview": "/v1/preview/9691251e-a68a-4815-a6c5-4ac56ec3579f"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53819,
          "name": "FURNIZORI F-G FEBR-page7.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:36",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "dd83c96d-068c-410b-8231-92a419ea2c8e",
          "links": {
              "pdf_content": "/documents/dd83c96d-068c-410b-8231-92a419ea2c8e/download-link",
              "preview": "/v1/preview/dd83c96d-068c-410b-8231-92a419ea2c8e"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53818,
          "name": "FURNIZORI F-G FEBR-page6.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:36",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "0e47dd4d-6a4d-4bfc-98a8-cb1614eef2b0",
          "links": {
              "pdf_content": "/documents/0e47dd4d-6a4d-4bfc-98a8-cb1614eef2b0/download-link",
              "preview": "/v1/preview/0e47dd4d-6a4d-4bfc-98a8-cb1614eef2b0"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53817,
          "name": "FURNIZORI F-G FEBR-page5.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:36",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "e862e13b-dae0-4f74-b5c9-e67cd1f4deab",
          "links": {
              "pdf_content": "/documents/e862e13b-dae0-4f74-b5c9-e67cd1f4deab/download-link",
              "preview": "/v1/preview/e862e13b-dae0-4f74-b5c9-e67cd1f4deab"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53822,
          "name": "FURNIZORI F-G FEBR-page10.pdf",
          "category": "raport_service",
          "status": "execution_finished",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:36",
          "task": 0,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "61317a51-1a6b-439a-ade5-8a1f35f67339",
          "links": {
              "pdf_content": "/documents/61317a51-1a6b-439a-ade5-8a1f35f67339/download-link",
              "preview": "/v1/preview/61317a51-1a6b-439a-ade5-8a1f35f67339"
          },
          "tasks": [],
          "has_duplicates": false
      },
      {
          "id": 53816,
          "name": "FURNIZORI F-G FEBR-page4.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:35",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "67c72c80-0267-48f4-b837-3584e5972d93",
          "links": {
              "pdf_content": "/documents/67c72c80-0267-48f4-b837-3584e5972d93/download-link",
              "preview": "/v1/preview/67c72c80-0267-48f4-b837-3584e5972d93"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53815,
          "name": "FURNIZORI F-G FEBR-page3.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:35",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "ffbe5858-071f-443c-a334-77576f61bf44",
          "links": {
              "pdf_content": "/documents/ffbe5858-071f-443c-a334-77576f61bf44/download-link",
              "preview": "/v1/preview/ffbe5858-071f-443c-a334-77576f61bf44"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53814,
          "name": "FURNIZORI F-G FEBR-page2.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:35",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "e6801537-3ed0-4773-b98e-dadb6736b303",
          "links": {
              "pdf_content": "/documents/e6801537-3ed0-4773-b98e-dadb6736b303/download-link",
              "preview": "/v1/preview/e6801537-3ed0-4773-b98e-dadb6736b303"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53813,
          "name": "FURNIZORI F-G FEBR-page1.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:35",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "854ca5a5-ce73-44f6-8d2f-5e6212396de1",
          "links": {
              "pdf_content": "/documents/854ca5a5-ce73-44f6-8d2f-5e6212396de1/download-link",
              "preview": "/v1/preview/854ca5a5-ce73-44f6-8d2f-5e6212396de1"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53811,
          "name": "FURNIZORI A-C FEBR-page9.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:35",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "e601b9d0-5d4d-408b-b0e7-96cd780c2e2e",
          "links": {
              "pdf_content": "/documents/e601b9d0-5d4d-408b-b0e7-96cd780c2e2e/download-link",
              "preview": "/v1/preview/e601b9d0-5d4d-408b-b0e7-96cd780c2e2e"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53810,
          "name": "FURNIZORI A-C FEBR-page8.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:35",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "a79d04e9-deec-4e3e-a930-05e1aad93bf0",
          "links": {
              "pdf_content": "/documents/a79d04e9-deec-4e3e-a930-05e1aad93bf0/download-link",
              "preview": "/v1/preview/a79d04e9-deec-4e3e-a930-05e1aad93bf0"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53809,
          "name": "FURNIZORI A-C FEBR-page7.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:35",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "5a61d6a0-e35c-4aba-9716-9d3adf7fed89",
          "links": {
              "pdf_content": "/documents/5a61d6a0-e35c-4aba-9716-9d3adf7fed89/download-link",
              "preview": "/v1/preview/5a61d6a0-e35c-4aba-9716-9d3adf7fed89"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53808,
          "name": "FURNIZORI A-C FEBR-page6.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:35",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "4c956d7d-7e53-447f-a2ad-d75a6291514f",
          "links": {
              "pdf_content": "/documents/4c956d7d-7e53-447f-a2ad-d75a6291514f/download-link",
              "preview": "/v1/preview/4c956d7d-7e53-447f-a2ad-d75a6291514f"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53807,
          "name": "FURNIZORI A-C FEBR-page5.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:35",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "be6c84dc-0f6b-4afe-9fe3-9230185e9cc7",
          "links": {
              "pdf_content": "/documents/be6c84dc-0f6b-4afe-9fe3-9230185e9cc7/download-link",
              "preview": "/v1/preview/be6c84dc-0f6b-4afe-9fe3-9230185e9cc7"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53806,
          "name": "FURNIZORI A-C FEBR-page4.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:35",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "83b39eb5-3bef-4199-868c-b9ca23653c44",
          "links": {
              "pdf_content": "/documents/83b39eb5-3bef-4199-868c-b9ca23653c44/download-link",
              "preview": "/v1/preview/83b39eb5-3bef-4199-868c-b9ca23653c44"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53805,
          "name": "FURNIZORI A-C FEBR-page3.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:35",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "e04540cf-f961-4d22-aad7-79765d1e6e1d",
          "links": {
              "pdf_content": "/documents/e04540cf-f961-4d22-aad7-79765d1e6e1d/download-link",
              "preview": "/v1/preview/e04540cf-f961-4d22-aad7-79765d1e6e1d"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53812,
          "name": "FURNIZORI A-C FEBR-page10.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:35",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "c3076950-d949-4899-a5e3-2fa13dbdb7f2",
          "links": {
              "pdf_content": "/documents/c3076950-d949-4899-a5e3-2fa13dbdb7f2/download-link",
              "preview": "/v1/preview/c3076950-d949-4899-a5e3-2fa13dbdb7f2"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53804,
          "name": "FURNIZORI A-C FEBR-page2.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:34",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "d72fbb1a-6999-41fe-8689-a7895bcc6da4",
          "links": {
              "pdf_content": "/documents/d72fbb1a-6999-41fe-8689-a7895bcc6da4/download-link",
              "preview": "/v1/preview/d72fbb1a-6999-41fe-8689-a7895bcc6da4"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53803,
          "name": "FURNIZORI A-C FEBR-page1.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:34",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "a444dae9-caaf-4c02-b361-f20ea1f685c4",
          "links": {
              "pdf_content": "/documents/a444dae9-caaf-4c02-b361-f20ea1f685c4/download-link",
              "preview": "/v1/preview/a444dae9-caaf-4c02-b361-f20ea1f685c4"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53801,
          "name": "FURNIZORI A FEBR-page9.pdf",
          "category": "anexe",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:34",
          "task": 1,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "b3415a46-486a-4cdd-8cc5-e2adde6d5a28",
          "links": {
              "pdf_content": "/documents/b3415a46-486a-4cdd-8cc5-e2adde6d5a28/download-link",
              "preview": "/v1/preview/b3415a46-486a-4cdd-8cc5-e2adde6d5a28"
          },
          "tasks": [
              "Human validation always on."
          ],
          "has_duplicates": false
      },
      {
          "id": 53802,
          "name": "FURNIZORI A FEBR-page10.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:34",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "a44adf8e-4087-4915-9743-e272cf3dffea",
          "links": {
              "pdf_content": "/documents/a44adf8e-4087-4915-9743-e272cf3dffea/download-link",
              "preview": "/v1/preview/a44adf8e-4087-4915-9743-e272cf3dffea"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      },
      {
          "id": 53800,
          "name": "FURNIZORI A FEBR-page8.pdf",
          "category": "facturi_interne",
          "status": "human_in_the_loop_validation",
          "uploaded": "2024-04-09",
          "uploaded_datetime": "2024-04-09T10:59:33",
          "task": 2,
          "workspace": "vs:nu intra nu atinge nu nimic",
          "source": "user-upload",
          "number_of_pages": 1,
          "type": FileType.PDF,
          "operation_id": "d6e07029-8e55-4caa-b591-6a173ca6fcdb",
          "links": {
              "pdf_content": "/documents/d6e07029-8e55-4caa-b591-6a173ca6fcdb/download-link",
              "preview": "/v1/preview/d6e07029-8e55-4caa-b591-6a173ca6fcdb"
          },
          "tasks": [
              "Human validation always on.",
              "cod_tva_furnizor - missing value"
          ],
          "has_duplicates": false
      }
  ] as DataType[];

  type DocumentLinks = {
    preview: string;
    pdf_content: string;
  };

  interface DataType {
    id: number;
    name: string;
    category: string;
    status: string;
    uploaded: string;
    uploaded_datetime: string;
    task: number;
    workspace: string;
    source: string;
    number_of_pages: number;
    type: FileType;
    operation_id: string;
    links: DocumentLinks;
    tasks: string[];
    has_duplicates: boolean;
  }

  return (
    <ThemeProvider>
      <div style={{ height: "100vh" }}>
        <Table.DndTable
          columns={columns}
          dataSource={documents.slice(0, 300)}
          rowSelection={{
            type: "checkbox",
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(selectedRowKeys, selectedRows);
            },
          }}
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
