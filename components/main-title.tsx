type Props = {
  children: React.ReactNode;
};

const MainTitle = ({ children }: Props) => {
  return <h1 className="mb-8 text-5xl font-bold">{children}</h1>;
};

export default MainTitle;
