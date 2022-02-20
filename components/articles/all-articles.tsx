import { VFC } from 'react';
import { ArticlesGrid } from './articles-grid';

type Props = {
  articles: NotionPageDetail[];
};

export const AllArticles: VFC<Props> = (props) => {
  const { articles } = props;

  return (
    <>
      <section>
        <h1>All Articles</h1>
        <ArticlesGrid articles={articles} />
      </section>
    </>
  );
};
