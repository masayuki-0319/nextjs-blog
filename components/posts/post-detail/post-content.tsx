import { VFC } from 'react';
import { PostHeader } from './post-header';

type Props = {
  post: NotionPageDetail;
};

export const PostContent: VFC<Props> = (props) => {
  const { post } = props;

  return (
    <>
      <article>
        <PostHeader post={post} />
        作成日時: {post.created_time}
      </article>
    </>
  );
};
