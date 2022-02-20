import ky from 'ky';

export const getArticles = async () => {
  const url = 'http://localhost:3000/api/articles';

  const response = await ky.get(url);
  const articles = (await response.json()) as NotionPageDetail[];

  return articles;
};
