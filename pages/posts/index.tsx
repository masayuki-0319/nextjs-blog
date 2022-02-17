import { NextPage } from 'next';
import { AllPosts } from '../../components/posts/all-posts';

const dummyPosts: NotionPageDetail[] = [
  {
    object: 'page',
    id: 'd204ba09-91be-4c5a-988f-1400fc13d969',
    created_time: '2022-02-05T23:50:00.000Z',
    last_edited_time: '2022-02-15T03:27:00.000Z',
    archived: false,
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: '8e2773f5-9b16-41ef-97c0-f636ad93ab46',
    },
    properties: {
      status: {
        id: 'Auw%3A',
        type: 'select',
        select: {
          id: 'e808e6aa-679d-4af6-9627-3fa46f14395c',
          name: 'done',
          color: 'green',
        },
      },
      layer: {
        id: 'I%3FdA',
        type: 'select',
        select: {
          id: '373e4bae-c283-4019-8f2c-38b11204cb47',
          name: 'instant_issue',
          color: 'green',
        },
      },
      tags: {
        id: 'NRXC',
        type: 'multi_select',
        multi_select: [
          {
            id: 'f99babc4-4299-4b07-ad7c-38f61ef1efd8',
            name: 'deno',
            color: 'blue',
          },
        ],
      },
      created_time: {
        id: 'Pt%40h',
        type: 'created_time',
        created_time: '2022-02-05T23:50:00.000Z',
      },
      parent_issue_id: {
        id: '%5DoGL',
        type: 'relation',
        relation: [
          {
            id: 'cf92ab44-77d7-43bc-8bec-985e46cf98c0',
          },
        ],
      },
      sprint: {
        id: 'dL%7CM',
        type: 'select',
        select: {
          id: '1e29cc70-e451-4c5a-97e8-4c596cb8df93',
          name: 'done',
          color: 'green',
        },
      },
      description: {
        id: 'hu%5B%3E',
        type: 'rich_text',
        rich_text: [],
      },
      child_issue_id: {
        id: 'll%3Cl',
        type: 'relation',
        relation: [],
      },
      last_edited_time: {
        id: 'pGu%3E',
        type: 'last_edited_time',
        last_edited_time: '2022-02-15T03:27:00.000Z',
      },
      is_published: {
        id: 'zv%5Ej',
        type: 'checkbox',
        checkbox: true,
      },
      title: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'deno で CLI を作りたい',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'deno で CLI を作りたい',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/deno-CLI-d204ba0991be4c5a988f1400fc13d969',
  },
  {
    object: 'page',
    id: 'efedfb0c-dd9b-425f-bfe6-790cd15c23be',
    created_time: '2022-02-15T15:15:00.000Z',
    last_edited_time: '2022-02-16T14:44:00.000Z',
    cover: null,
    icon: null,
    parent: {
      type: 'page_id',
      page_id: 'e1fbc144-83ee-4e09-82a8-3492738f644f',
    },
    archived: false,
    properties: {
      title: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Database の記事を JSON で画面表示',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Database の記事を JSON で画面表示',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Database-JSON-efedfb0cdd9b425fbfe6790cd15c23be',
  },
];

type Props = {};

export const AllPostPage: NextPage<Props> = (props) => {
  const {} = props;

  const posts = dummyPosts;

  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
};

export default AllPostPage;
