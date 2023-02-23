import { useState } from 'react';
import Button from '../button';

const Display = () => {
  const [display, setDisplay] = useState(false);
  const [color, setColor] = useState(false);

  const onClick = () => {
    setDisplay(!display);
  };

  const changeColor = () => {
    setColor(!color);
  };

  return (
    <section className="mt-20">
      <h2 className="mb-3 text-3xl font-semibold">Display</h2>
      <p className="mb-5 text-lg">
        Element is only visually hidden. The element still occupies space and user can interact with
        it.
      </p>
      <div className="mx-auto w-2/5 rounded-lg py-10 text-center shadow-2xl">
        <button
          onClick={onClick}
          className="mb-5 rounded-md bg-slate-800 px-8 py-5 text-lg text-white"
        >
          Display Value {display ? 'none' : 'block'}
        </button>
        <p className="mb-5 text-center text-lg">
          Changes color on click{' '}
          <span
            className={
              color ? 'inline-block h-3 w-3 bg-blue-400' : 'inline-block h-3 w-3 bg-red-400'
            }
          ></span>
        </p>
        <div className="mx-auto flex w-40 flex-col gap-5">
          <Button>First Button</Button>
          <button
            onClick={changeColor}
            className={`${
              display && 'hidden'
            } inline-block rounded-md bg-blue-400 px-7 py-4 text-base hover:bg-blue-500`}
          >
            Click Me
          </button>
          <Button>Last Button</Button>
        </div>
      </div>
    </section>
  );
};

export default Display;
