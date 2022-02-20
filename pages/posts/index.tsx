import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';

import { AllPosts } from '../../components/posts/all-posts';
import { getArticles } from '../../lib/api/routes/articles/get-articles';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const AllPostPage: NextPage<Props> = (props) => {
  const { posts } = props.params;

  return (
    <>
      <AllPosts posts={posts} />
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

export default AllPostPage;
