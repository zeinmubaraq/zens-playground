type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className="inline-block rounded-md bg-blue-400 px-7 py-4 text-base hover:bg-blue-500">
      {children}
    </button>
  );
};

export default Button;
