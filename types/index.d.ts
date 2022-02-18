// ref: https://github.com/makenotion/notion-sdk-js/blob/main/src/Client.ts
type NotionDatabaseDetail = {
  object: 'database';
  id: string;
  [k: string]: any;
};

type NotionPageDetail = {
  object: 'page';
  id: string;
  created_time: string;
  last_edited_time: string;
  archived: boolean;
  url: string;
  properties: {
    title: {
      id: string;
      type: string;
      title: {
        text: {
          content: string;
          link: any;
        };
        plain_text: string;
      }[];
    };
  };
  [k: string]: any;
};

type NotionBlock = {
  object: 'block';
  id: string;
  created_time: string;
  last_edited_time: string;
  has_children: boolean;
  type: string;
  [k: string]: any;
};
