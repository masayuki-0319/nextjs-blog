import { VFC } from 'react';

type Props = {
  post: NotionPageDetail;
};

export const PostHeader: VFC<Props> = (props) => {
  const { post } = props;

  const title = post.properties.title.title[0].plain_text;

  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
    </>
  );
};
