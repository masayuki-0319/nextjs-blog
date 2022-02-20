import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { AllArticles } from '../../components/articles/all-articles';
import { getArticles } from '../../lib/api/routes/articles/get-articles';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const AllArticlesPage: NextPage<Props> = (props) => {
  const { articles } = props.params;

  return (
    <>
      <AllArticles articles={articles} />
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

export default AllArticlesPage;
