import { VFC } from 'react';
import { ArticleHeader } from './article-header';

type Props = {
  article: NotionPageDetail;
};

export const ArticleContent: VFC<Props> = (props) => {
  const { article } = props;

  return (
    <>
      <article>
        <ArticleHeader article={article} />
        作成日時: {article.created_time}
      </article>
    </>
  );
};
