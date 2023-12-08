import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Header() {
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="h-40 flex justify-around items-center sticky top-w-full bg-gradient-to-r from-green-300 to-lime-300 max-md:flex max-md:flex-col max-lg:flex max-lg:flex-col">
      <div>
        <h1 className="font-bold text-6xl uppercase max-sm:text-4xl">
          subash-e-com
        </h1>
        <p className="text-center">buy more🛒 pay less💰</p>
      </div>

      <div className="flex gap-5 uppercase ">
        <Link className="hover:underline" to="/home">
          home
        </Link>
        <Link
          className="hover:underline hover:transition-all hover:duration-500"
          to="./"
        >
          contact
        </Link>
        <Link className="hover:underline" to="./help">
          help
        </Link>
        <Link className="hover:underline" to="/about us">
          about us
        </Link>
        <Link to="/yourcart">
          your cart
          <span className="ml-2 bg-yellow-500 p-2">{items.length}</span>
        </Link>
      </div>
    </div>
  );
}
