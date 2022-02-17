import { VFC } from 'react';

type Props = {
  post: NotionPageDetail;
};

export const PostHeader: VFC<Props> = (props) => {
  const { post } = props;

  return (
    <>
      <header>
        <h1>{post.id}</h1>
      </header>
    </>
  );
};
