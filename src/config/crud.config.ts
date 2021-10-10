import { CrudGlobalConfig } from '@nestjsx/crud';

const crudConfig: CrudGlobalConfig = {
  query: {
    limit: 20,
    alwaysPaginate: true,
  },
  auth: {
    property: 'user',
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
};

export default crudConfig;
