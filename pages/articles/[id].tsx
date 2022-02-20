import { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';

import { ArticleContent } from '../../components/articles/article-detail/article-content';
import { getArticles } from '../../lib/api/routes/articles/get-articles';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const ArticleDetailPage: NextPage<Props> = (props) => {
  const { article } = props.params;

  return (
    <>
      <h1>ArticleDetail Page</h1>
      {article && <ArticleContent article={article} />}
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const articles = await getArticles();

  const id = context.params!.id as string;
  const article = articles.find((article) => article.id === id);

  return {
    props: {
      params: {
        article: article,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const articles = await getArticles();

  const paths = articles.map((article) => {
    return {
      params: {
        id: article.id,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export default ArticleDetailPage;
