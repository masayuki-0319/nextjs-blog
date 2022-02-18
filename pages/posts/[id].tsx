import { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { PostContent } from '../../components/posts/post-detail/post-content';

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
  const id = context.params!.id as string;

  const response = await fetch('http://localhost:3000/api/databases/query?page_size=10', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });

  const posts = (await response.json()) as NotionPageDetail[];

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
  const response = await fetch('http://localhost:3000/api/databases/query?page_size=10', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });

  const posts = (await response.json()) as NotionPageDetail[];

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
