import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';

interface DatabasesRequest extends NextApiRequest {}
interface DatabasesResponse extends NextApiResponse {}

const handler = async (req: DatabasesRequest, res: DatabasesResponse) => {
  try {
    if (req.method === 'GET') {
      const NOTION_KEY = process.env.NOTION_KEY as string;
      const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID as string;

      const notion = new Client({
        auth: NOTION_KEY,
      });

      const page_size = req.query.page_size ?? '10';

      const databaseDetail = await notion.databases.query({
        database_id: NOTION_DATABASE_ID,
        page_size: Number(page_size),
      });

      const posts = databaseDetail.results;

      const resonse = posts;

      res.status(200).json(resonse);
      return;
    }
  } catch (error) {
    console.error(error);
    const message = 'Unexpected Error';

    res.status(500).json({ errors: [{ message }] });
  }
};

export default handler;
