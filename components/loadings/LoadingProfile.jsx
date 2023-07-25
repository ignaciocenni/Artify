import LoadingPublication from "./LoadingPublication";

const LoadingProfile = () => (
  <div className="flex items-center flex-col w-1/2 mt-5 animate-pulse">
    <div className="flex flex-col w-full items-center">
      <div className="flex justify-center flex-col items-center pt-5 pb-2 gap-5">
        <div className="w-24 h-24 bg-purple-300 rounded-full"></div>
        <div className="h-7 bg-purple-300 rounded w-full"></div>
      </div>
      <div className="flex justify-between p-6 w-full">
        <div className="flex flex-col items-start pr-10 w-full">
          <div className="h-4 bg-purple-300 rounded w-1/5 mb-2"></div>
          <div className="h-4 bg-purple-300 rounded w-full"></div>
        </div>
        <div className="flex flex-col justify-center items-center h-full gap-5">
          <div className="w-10 h-10 bg-purple-300 rounded-full"></div>
          <div className="w-10 h-10 bg-purple-300 rounded-full"></div>
          <div className="w-10 h-10 bg-purple-300 rounded-full"></div>
        </div>
      </div>
    </div>

    <div className="flex w-full flex-col mt-5">
      <div className="h-4 bg-purple-300 rounded w-1/5 mb-2"></div>
      <LoadingPublication />
    </div>
  </div>
);
export default LoadingProfile;
