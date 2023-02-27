import MainTitle from '@/components/main-title';
import Head from 'next/head';

const Transform = () => {
  return (
    <div className="mx-auto max-w-5xl px-10 pt-20">
      <Head>
        <title>Transform</title>
      </Head>
      <MainTitle>Transform</MainTitle>
      <section className="mb-20 flex items-center justify-start space-x-20">
        <div className="flex h-28 w-28 items-center justify-center bg-red-500 transition-transform ease-in-out hover:scale-125 hover:cursor-pointer">
          Hover Me
        </div>
        <h2 className="text-3xl font-semibold">Scale</h2>
      </section>
      <section className="mb-20 flex items-center justify-start space-x-20">
        <div className="flex h-28 w-28 items-center justify-center bg-red-500 transition-transform ease-in-out hover:origin-top-left hover:scale-125 hover:cursor-pointer">
          Hover Me
        </div>
        <h2 className="text-3xl font-semibold">Scale with transform origin top left</h2>
      </section>
      <section className="mb-20 flex items-center justify-start space-x-20">
        <div className="flex h-28 w-28 items-center justify-center bg-red-500 transition-transform ease-in-out hover:rotate-45 hover:cursor-pointer">
          Hover Me
        </div>
        <h2 className="text-3xl font-semibold">Rotate</h2>
      </section>
      <section className="mb-20 flex items-center justify-start space-x-20">
        <div className="flex h-28 w-28 items-center justify-center bg-red-500 transition-transform ease-in-out hover:translate-x-10 hover:cursor-pointer">
          Hover Me
        </div>
        <h2 className="text-3xl font-semibold">Translate x</h2>
      </section>
      <section className="mb-20 flex items-center justify-start space-x-20">
        <div className="flex h-28 w-28 items-center justify-center bg-red-500 transition-transform ease-in-out hover:-translate-y-10 hover:cursor-pointer">
          Hover Me
        </div>
        <h2 className="text-3xl font-semibold">Translate y</h2>
      </section>
      <section className="mb-20 flex items-center justify-start space-x-20">
        <div className="flex h-28 w-28 items-center justify-center bg-red-500 transition-transform ease-in-out hover:skew-x-12 hover:cursor-pointer">
          Hover Me
        </div>
        <h2 className="text-3xl font-semibold">Skew x</h2>
      </section>
      <section className="mb-20 flex items-center justify-start space-x-20">
        <div className="flex h-28 w-28 items-center justify-center bg-red-500 transition-transform ease-in-out hover:skew-y-12 hover:cursor-pointer">
          Hover Me
        </div>
        <h2 className="text-3xl font-semibold">Skew y</h2>
      </section>
    </div>
  );
};

export default Transform;
