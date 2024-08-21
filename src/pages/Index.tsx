import { Tab, Tabs } from '@nextui-org/tabs';
import clsx from 'clsx';
import Title from 'components/pages/Title';

const Index = () => {
  return (
    <>
      <div className={clsx('flex flex-col h-full')}>
        <div className="">
          <div className="mt-1 mb-4">
            <Title>Proxies</Title>
          </div>
        </div>

        <Tabs variant="underlined" size="lg">
          <Tab title="Subscription" />
          <Tab title="Nodes" />
        </Tabs>
      </div>
    </>
  );
};

export default Index;
