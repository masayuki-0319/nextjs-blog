import { notionClient } from './notion-client';

type Params = {
  blockId: string;
  pageSize?: number;
};

export const getBlockChildren = async (params: Params) => {
  const { pageSize = 10, blockId } = params;

  let queryParams = {
    block_id: blockId,
    page_size: pageSize,
  };
  let blockChildren: any[] = [];

  const response = await notionClient.blocks.children.list(queryParams);

  const responseResults = response.results;

  blockChildren.push(...responseResults);

  return blockChildren;
};
