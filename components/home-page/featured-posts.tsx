import { VFC } from 'react';
import { PostsGrid } from '../posts/posts-grid';

type Props = {
  posts: NotionPageDetail[];
};

export const FeaturedPosts: VFC<Props> = (props) => {
  const { posts } = props;

  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
