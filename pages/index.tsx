import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { FeaturedPosts } from '../components/home-page/featured-posts';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = (props) => {
  const { posts } = props.params;

  return (
    <>
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const response = await fetch('http://localhost:3000/api/databases/query?page_size=10', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });

  const posts = (await response.json()) as NotionPageDetail[];

  return {
    props: {
      params: {
        posts: posts,
      },
    },
  };
};

export default Home;
