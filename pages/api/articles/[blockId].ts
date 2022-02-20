import type { NextApiRequest, NextApiResponse } from 'next';

interface BlockChildrenRequest extends NextApiRequest {
  query: {
    blockId: string;
  };
}
interface BlockChildrenResponse extends NextApiResponse {}

const handler = async (req: BlockChildrenRequest, res: BlockChildrenResponse) => {
  try {
    if (req.method === 'GET') {
      const blockId = req.query.blockId;

      const resonse = {
        message: `Block ID is [${blockId}]`,
      };

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
