import { useSelector } from "react-redux";

function Cart() {
  const { items } = useSelector((state) => state.cart);
  const { product1 } = useSelector((state) => state.product);
  // console.log(product1);

  return (
    <div
      className="
    2xl:grid 2xl:grid-cols-1
    
    "
    >
      {items.map((items) => {
        const [item] = product1.filter((val) => val.id === items.id);
        console.log(item);
        return (
          <div
            key={item.id}
            className="h-[300px] p-5  shadow-2xl grid grid-cols-2 w-10/12 mx-auto gap-5 2xl:h-[400px]
            xl:h-[400px]
            lg:h-[400px]
            md:h-[400px] 
            sm:h-[400px] 
            
            "
          >
            <div className="p-5">
              <img
                className="w-52 mx-auto h-52"
                src={item.image}
                alt={item.category}
              />
            </div>
            <div className="gap-y-0.5 mt-3 ml-5">
              <h3 className="leading-4 mt-3 h-[30px]">
                <strong className="font-bold mr-1">
                  <span className="uppercase">title: </span>
                </strong>
                {item.title}
              </h3>
              <p className="mt-[6px] h-[20px] leading-3 2xl:mt-[20px]">
                <strong className="uppercase mr-1">category: </strong>{" "}
                {item.category}
              </p>
              <h3 className="h-[20px] mt-1">
                <strong className="uppercase mr-1"> price:</strong>
                <span className="text-2xl font-bold">${item.price}</span>
              </h3>
              <p className="mt-5 h-[120px] 2xl:h-[200px]">{item.description}</p>
              <button className="bg-gradient-to-r from-green-400 to-lime-400 rounded-lg p-1  font-bold uppercase h-18 w-36 mb-2 hover:scale-105 transition-all duration-300 text-center cursor-pointer ">
                remove ❌
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
