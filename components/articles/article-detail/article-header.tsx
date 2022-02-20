import { VFC } from 'react';

type Props = {
  article: NotionPageDetail;
};

export const ArticleHeader: VFC<Props> = (props) => {
  const { article } = props;

  const title = article.properties.title.title[0].plain_text;

  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
    </>
  );
};
