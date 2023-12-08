import { useDispatch } from "react-redux";
import { AddToCart } from "../slices/cartSlice";


export default function ItemList({ id, title, image, cat, price }) {
  const dispatch = useDispatch();
  function handleClick() {
    let temp = {
      id: id,
    };
    dispatch(AddToCart(temp));
  }
  return (
    <div
      key={id}
      className=" h-[330px] p-3 hover:scale-105 transition-all duration-300 shadow-2xl "
    >
      <img className="w-11/12 mx-auto h-2/5" src={image} alt={cat} />
      <div className=" gap-y-0.5 mt-3 ">
        <h3 className="leading-4 mt-3 h-[65px] ">
          <strong className="font-bold mr-1">
            <span className="uppercase">title: </span>
          </strong>
          {title}
        </h3>
        <p className="mt-3 h-[20px] leading-3">
          <strong className="uppercase mr-1 ">category: </strong> {cat}
        </p>
        <h3 className="h-[20px] mt-1">
          <strong className="uppercase mr-1"> price:</strong>
          <span className="text-2xl font-bold">${price}</span>
        </h3>
      </div>
      <div className="flex justify-center items-center p-4 mt-2">
        <button
          className="bg-gradient-to-r from-green-400 to-lime-400 rounded-lg p-1  font-mediam uppercase "
          onClick={handleClick}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
