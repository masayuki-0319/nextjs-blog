import { notionClient } from './notion-client';

type Params = {
  blockId: string;
  pageSize?: number;
};

export const getBlockChildren = async (params: Params) => {
  const { pageSize = 50, blockId } = params;

  let blockChildren: any[] = [];

  let queryParams = {
    block_id: blockId,
    page_size: pageSize,
  };

  while (true) {
    const response = await notionClient.blocks.children.list(queryParams);

    const { results, next_cursor, has_more } = response;

    blockChildren.push(...results);

    if (has_more && next_cursor) {
      queryParams = { ...queryParams, ...{ start_cursor: next_cursor } };
    } else {
      break;
    }
  }

  return blockChildren;
};
