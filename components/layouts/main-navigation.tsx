import Link from 'next/link';
import { VFC } from 'react';

type Props = {};

export const MainNavigation: VFC<Props> = (props) => {
  const {} = props;

  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <ul>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
