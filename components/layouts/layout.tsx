import { ReactNode, VFC } from 'react';
import { MainNavigation } from './main-navigation';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};
