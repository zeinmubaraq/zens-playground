import { useState } from 'react';
import Button from '../button';

const Opacity = () => {
  const [opacity, setOpacity] = useState(false);
  const [color, setColor] = useState(false);

  const onClick = () => {
    setOpacity(!opacity);
  };

  const changeColor = () => {
    setColor(!color);
  };

  return (
    <section>
      <h2 className="mb-3 text-3xl font-semibold">Opacity</h2>
      <p className="mb-5 text-lg">
        Element is only visually hidden. The element still occupies space and user can interact with
        it.
      </p>
      <div className="mx-auto w-2/5 rounded-lg py-10 text-center shadow-2xl">
        <button
          onClick={onClick}
          className="mb-5 rounded-md bg-slate-800 px-8 py-5 text-lg text-white"
        >
          Oppacity Value {opacity ? '0' : '1'}
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
              opacity && 'opacity-0'
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

export default Opacity;
