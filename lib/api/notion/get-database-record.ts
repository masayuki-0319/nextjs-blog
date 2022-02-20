import { notionClient } from './notion-client';

type Params = {
  databaseId: string;
  pageSize?: number;
};

export const getDatabaseRecord = async (params: Params) => {
  const { pageSize = 10, databaseId } = params;

  const response = await notionClient.databases.query({
    database_id: databaseId,
    page_size: pageSize,
  });

  const getDatabaseRecord = response.results;

  return getDatabaseRecord;
};
