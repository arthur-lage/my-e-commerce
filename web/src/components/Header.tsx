import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="py-5 px-10">
      <Link to="/" className="text-2xl text-blue-900 cursor-pointer font-bold">
        My E-Commerce
      </Link>
    </header>
  );
}
