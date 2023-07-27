import LoadingPublication from "./LoadingPublication";

const LoadingProfile = () => (
  <div className="flex items-center flex-col w-1/2 mt-5 animate-pulse">
    <div className="flex flex-col w-full items-center">
      <div className="flex justify-center flex-col items-center pt-5 pb-2 gap-6 w-full">
        <div className="w-24 h-24 bg-purple-300 rounded-full"></div>
        <div className="flex gap-1 w-full justify-center items-end ">
          <div className="h-7 bg-purple-300 rounded w-40"></div>
          <div className="w-10 h-10 bg-purple-300 rounded-full"></div>
        </div>
      </div>
      <div className="flex justify-between w-full gap-2 mt-7">
        <div className="flex flex-col items-start pr-10 w-full">
          <div className="h-6 bg-purple-300 rounded w-1/5 mb-4"></div>
          <div className="h-8 bg-purple-300 rounded w-11/12"></div>
        </div>
      </div>
    </div>

    <div className="flex w-full flex-col mt-5">
      <div className="h-6 bg-purple-300 rounded w-1/5 mb-4"></div>
      <LoadingPublication />
    </div>
  </div>
);
export default LoadingProfile;
