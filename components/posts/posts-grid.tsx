import { VFC } from 'react';
import { PostItem } from './post-item';

type Props = {
  posts: NotionPageDetail[];
};

export const PostsGrid: VFC<Props> = (props) => {
  const { posts } = props;

  return (
    <ul>
      {posts.map((post, index) => (
        <PostItem post={post} key={index} />
      ))}
    </ul>
  );
};
