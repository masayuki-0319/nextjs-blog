import Link from 'next/link';
import { VFC } from 'react';

type Props = {
  post: NotionPageDetail;
};

export const PostItem: VFC<Props> = (props) => {
  const { id, url, created_time, last_edited_time, properties } = props.post;

  const title = properties.title.title[0].plain_text;
  const linkPath = `posts/${id}`;

  const formattedDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <li>
      <Link href={linkPath}>
        <a>
          <div>
            <h3>タイトル：{title ?? 'null'}</h3>
            <h4>Notion ID</h4>
            <p>{id}</p>
            <h4>作成日時</h4>
            <time>{formattedDate(created_time)}</time>
            <h4>更新日時</h4>
            <time>{formattedDate(last_edited_time)}</time>
            <h4>Notion Page URL</h4>
            <Link href={url}>Notion へ移動</Link>
          </div>
        </a>
      </Link>
    </li>
  );
};
