import ky from 'ky';
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { AllPosts } from '../../components/posts/all-posts';

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

export default AllPostPage;
