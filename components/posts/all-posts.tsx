import { VFC } from 'react';
import { PostsGrid } from './posts-grid';

type Props = {
  posts: NotionPageDetail[];
};

export const AllPosts: VFC<Props> = (props) => {
  const { posts } = props;

  return (
    <>
      <section>
        <h1>All Posts</h1>
        <PostsGrid posts={posts} />
      </section>
    </>
  );
};
