import { Tab, Tabs } from '@nextui-org/tabs';
import venusLogo from 'assets/venus.svg';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

const navi = [
  {
    id: 0,
    name: 'Proxies',
    path: '/',
  },
  {
    id: 1,
    name: 'Settings',
    path: '/settings',
  },
  {
    id: 2,
    name: 'Logging',
    path: '/logging',
  },
  {
    id: 3,
    name: 'Editor',
    path: '/editor',
  },
  {
    id: 4,
    name: 'About',
    path: '/about',
  },
];

export default function Sidebar({ className }: { className?: string }) {
  const { pathname } = useLocation();

  return (
    <nav
      className={clsx(
        'min-w-56 flex',
        'py-6 px-5',
        'bg-gray-100 flex-col',
        'dark:bg-rua-gray-800',
        'transition-all',
        'overflow-hidden',
        className,
      )}
    >
      {/* logo */}
      <div className={clsx('flex w-full justify-center')}>
        <img
          className={clsx('object-contain w-28 h-28', 'select-none')}
          alt="Venus"
          src={venusLogo}
        />
      </div>

      {/* navi */}
      <div className={clsx('flex flex-col justify-between', 'felx-1 h-full')}>
        <div className="my-4">
          <Tabs
            aria-label="Tabs"
            isVertical
            selectedKey={pathname}
            classNames={{
              base: 'flex-1',
              tabList: 'w-full',
              cursor: '',
              tab: 'flex-1',
              tabContent: '',
            }}
          >
            {navi.map((n) => (
              <Tab
                key={n.path}
                title={
                  <>
                    <div className="py-1 flex items-center text-lg">
                      {n.name}
                    </div>
                  </>
                }
                href={`#${n.path}`}
              />
            ))}
          </Tabs>
        </div>

        {/* core status */}
        {/* <CoreStatus /> */}
      </div>
    </nav>
  );
}
