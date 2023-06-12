import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center my-32 font-nunito">
      <img
        className="w-[400px] h-[400px] object-cover rounded-full"
        src='https://i.ibb.co/VC0ysYm/icon-404.gif'
        alt=""
      />
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-6">
          Error Status <span className="font-thin">{status}</span>
        </h2>
        <p>{error?.message}</p>
      </div>
      <Link to='/'><button className="btn-primary my-10">Back To Home Page</button></Link>
    </div>
  );
};

export default ErrorPage;
