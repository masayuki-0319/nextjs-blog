import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';

import { FeaturedPosts } from '../components/home-page/featured-posts';
import { getArticles } from '../lib/api/routes/articles/get-articles';

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
  const posts = await getArticles();

  return {
    props: {
      params: {
        posts: posts,
      },
    },
  };
};

export default Home;
