import { memo, useState } from 'react';
import { Flex } from 'antd';
import {
  InlineEdit,
  Loader,
  LoaderIcon,
  MarkText,
  Edit,
  Show,
  Text,
  PdfDocumentType,
} from '@smart-touch-technologies/uicomponents';

enum FileType {
  DOC = 'doc',
  IMG = 'img',
  PDF = 'pdf'
}

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
  links: unknown;
  tasks: string[];
  has_duplicates: boolean;
}

interface Props {
  name: string;
  operationId: string;
  data: DataType;
  onClick?: () => void;
  isLoading?: boolean;
  withOutEdit?: boolean;
  hasDuplicates?: boolean;
  source?: string;
}

export const NameCell = memo(
  ({
    name,
    operationId,
    data,
    isLoading,
    withOutEdit
  }: Props) => {
    const localName = name;


    // const linkTo = `/documents/${operationId}?${''}`;

    const LinkComponent = (
      // <Link to={linkTo} style={{ color: 'inherit' }} state={{ data }}>
        <Text ellipsis={{ tooltip: localName }} style={{ color: 'inherit' }} size="lg">
          <MarkText value={''}>{localName}</MarkText>
        </Text>
      // </Link>
    );

    return (
      <Flex align="center" gap="8px" style={{ width: '100%' }}>
        <Loader
          indicator={<LoaderIcon fontSize={16} />}
          indicatorStyle={{ height: 16 }}
          style={{ height: 16 }}
          loading={isLoading}>
          <Show className="eye-icon" />
          <div className="file-icon">{<PdfDocumentType />}</div>
        </Loader>
        {withOutEdit ? (
          <div className="name-color name-cell">{LinkComponent}</div>
        ) : (
          <InlineEdit.Input
            icon={<Edit className="suffix-icon" />}
            text={localName}
            textElement={LinkComponent}
            resetOnCancel={true}
            contentEditable={false}
            inlineEditProps={{
              contentEditable: !withOutEdit,
              className: 'name-color name-cell',
              contentEditByStyles: true,
              editTrigger: 'content',
              flexContainerProps: { gap: '10px' },
            }}
          />
        )}
        
      </Flex>
    );
  },
  (prevProps, nextProps) =>
    prevProps.name === nextProps.name && prevProps.isLoading === nextProps.isLoading
);

NameCell.displayName = 'NameCell';
