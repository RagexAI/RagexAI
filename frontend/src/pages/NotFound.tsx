import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../config/route/routes";

const NotFound: FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-6">

      <div className="text-center">

        <h1 className="text-8xl md:text-9xl font-bold text-black tracking-tight">
          404
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-2 text-sm md:text-base text-gray-500 max-w-md mx-auto">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to={ROUTE_PATHS.HOME}
          className="inline-flex items-center justify-center mt-6 px-6 py-3 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          Go back home
        </Link>

      </div>

    </div>
  );
};

export default NotFound;