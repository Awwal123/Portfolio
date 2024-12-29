export const LoadingPage: React.FC = () => {
  return (
    <div className="wrapper absolute z- top-0 w-screen left-0  bg-black h-screen flex items-center justify-center">
      <div className="container w-24 rotate-45 grid grid-cols-3 gap-x-1 gap-y-1">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="box w-7 h-7 bg-[#65cdef]"></div>
        ))}
      </div>
    </div>
  );
};
