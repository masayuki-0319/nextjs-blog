import { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';

import { PostContent } from '../../components/articles/article-detail/post-content';
import { getArticles } from '../../lib/api/routes/articles/get-articles';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const PostDetailPage: NextPage<Props> = (props) => {
  const { post } = props.params;

  return (
    <>
      <h1>PostDetail Page</h1>
      {post && <PostContent post={post} />}
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const posts = await getArticles();

  const id = context.params!.id as string;
  const post = posts.find((post) => post.id === id);

  return {
    props: {
      params: {
        post: post,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getArticles();

  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export default PostDetailPage;
