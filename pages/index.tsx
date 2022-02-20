import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';

import { FeaturedArticles } from '../components/home-page/featured-articles';
import { getArticles } from '../lib/api/routes/articles/get-articles';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = (props) => {
  const { articles } = props.params;

  return (
    <>
      <FeaturedArticles articles={articles} />
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const articles = await getArticles();

  return {
    props: {
      params: {
        articles: articles,
      },
    },
  };
};

export default Home;
