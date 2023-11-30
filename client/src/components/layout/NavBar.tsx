import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex m-4 bg-slate-300 rounded-xl [&>a]:p-4 [&>a]:rounded-xl">
        <Link to="/" className=" hover:bg-slate-500">
          Home
        </Link>
        <Link to="/quiz/create" className=" hover:bg-slate-500">
          Create Quiz
        </Link>
        <Link to="/" className="ml-auto hover:bg-slate-500">
          Login
        </Link>
        <Link to="/" className="hover:bg-slate-500">
          Sign Up
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
