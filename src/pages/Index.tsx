import { Tab, Tabs } from '@nextui-org/tabs';
import clsx from 'clsx';
import Subscription from 'components/home/Subscription';
import Title from 'components/pages/Title';
import { useState } from 'react';

const Index = () => {
  const Children = {
    subscription: <Subscription />,
    nodes: <>Nodes</>,
  };
  const [current, setCurrent] = useState();

  return (
    <>
      <div className={clsx('flex flex-col h-full')}>
        <div className="">
          <div className="mt-1 mb-4">
            <Title>Proxies</Title>
          </div>
        </div>

        <Tabs
          variant="underlined"
          size="lg"
          onSelectionChange={(key) => setCurrent(key)}
        >
          <Tab key="subscription" title="Subscription" />
          <Tab key="nodes" title="Nodes" />
        </Tabs>

        <div className="p-4">{Children[current]}</div>
      </div>
    </>
  );
};

export default Index;
