import { VFC } from 'react';
import { ArticleItem } from './article-item';

type Props = {
  articles: NotionPageDetail[];
};

export const ArticlesGrid: VFC<Props> = (props) => {
  const { articles } = props;

  return (
    <ul>
      {articles.map((article, index) => (
        <ArticleItem article={article} key={index} />
      ))}
    </ul>
  );
};
