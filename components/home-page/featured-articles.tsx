import { VFC } from 'react';
import { ArticlesGrid } from '../articles/articles-grid';

type Props = {
  articles: NotionPageDetail[];
};

export const FeaturedArticles: VFC<Props> = (props) => {
  const { articles } = props;

  return (
    <section>
      <h2>Featured Articles</h2>
      <ArticlesGrid articles={articles} />
    </section>
  );
};
