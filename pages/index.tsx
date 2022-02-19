import ky from 'ky';
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
  const url = 'http://localhost:3000/api/databases/query';
  const response = await ky.get(url);
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
