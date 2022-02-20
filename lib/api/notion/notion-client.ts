import { Client } from '@notionhq/client/build/src';

const NOTION_KEY = process.env.NOTION_KEY;

if (!NOTION_KEY) {
  throw new Error('Set NOTION_KEY for .env file');
}

export const notionClient = new Client({
  auth: NOTION_KEY,
});
