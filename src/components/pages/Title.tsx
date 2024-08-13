import clsx from 'clsx';
import { ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }) => {
  return <h1 className={clsx('text-4xl dark:text-gray-300')}>{children}</h1>;
};

Title.h1 = ({ children }: { children: ReactNode }) => {
  return <h1 className={clsx('text-4xl dark:text-gray-400')}>{children}</h1>;
};

Title.h2 = ({ children }: { children: ReactNode }) => {
  return <h2 className={clsx('text-xl dark:text-gray-400')}>{children}</h2>;
};

export default Title;
