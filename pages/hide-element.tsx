import Head from 'next/head';
import Opacity from '@/components/hide-element/opacity';
import Visibility from '@/components/hide-element/visibility';
import Display from '@/components/hide-element/display';
import MainTitle from '@/components/main-title';

const HideElement = () => {
  return (
    <div className="mx-auto max-w-5xl px-10 pt-20">
      <Head>
        <title>Hide Element</title>
      </Head>
      <MainTitle>Hide Element</MainTitle>
      <p className="mb-8 text-lg">
        Three techniques to hide elements in CSS which have slightly different behaviour! Hope this
        visualization helped you understand the differences between setting opacity, visibility and
        display propertis.
      </p>

      <Opacity />

      <Visibility />

      <Display />
    </div>
  );
};

export default HideElement;
