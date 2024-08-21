import clsx from 'clsx';
import SideBar from 'components/Sidebar';
import { ReactNode } from 'react';

/**
 * Entier App layout
 */
const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main
        className={clsx(
          'flex w-[100vw] h-[100vh]',
          'bg-bluish-gray dark:bg-rua-gray-900',
          'relative',
        )}
      >
        <div
          data-tauri-drag-region
          className={clsx(
            'h-7 bg-transparent fixed',
            'top-0 left-0 right-0 z-[1000]',
          )}
        ></div>

        {/* navi */}
        <SideBar className="max-sm:min-w-0 max-sm:max-w-0 max-sm:p-0" />

        {/* body */}
        <div className="p-8 flex-1 overflow-auto h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
