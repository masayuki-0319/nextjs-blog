import type { NextApiRequest, NextApiResponse } from 'next';

import { getDatabaseRecord } from './../../../lib/api/notion/get-database-record';

interface DatabasesRequest extends NextApiRequest {}
interface DatabasesResponse extends NextApiResponse {}

const handler = async (req: DatabasesRequest, res: DatabasesResponse) => {
  try {
    if (req.method === 'GET') {
      const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID as string;

      const resonse = await getDatabaseRecord({ databaseId: NOTION_DATABASE_ID });

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
