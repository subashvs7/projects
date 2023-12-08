import { useSelector, useDispatch } from "react-redux";
import { products } from "./slices/demoSlice";
import { useEffect } from "react";
import ListItem from "./components/ListItem";

export default function Product() {
  const dispatch = useDispatch();
  const { product1, loading } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(products());
  }, []);
  if (loading) {
    return (
      <p className="font-bold flex items-center justify-center text-3xl uppercase ">
        ...Loading
      </p>
    );
  }
  return (
    <div className=" w-10/12 mx-auto container sm:w-[80%] sm:mx-[auto] bg-lime-50 max-[345px]:w-screen">
      <div
        className="
      2xl:grid 2xl:grid-cols-5 2xl:gap-8 2xl:mt-3 2xl:px-[5px]
      xl:grid xl:grid-cols-4 xl:gap-8 xl:mt-3 xl:px-[5px]
      lg:grid lg:grid-cols-3 lg:gap-8 lg:mt-3 lg:px-[5px]
      md:grid md:grid-cols-2 md:gap-8 md:mt-3 md:px-[5px]
      sm:grid sm:grid-cols-2 sm:gap-8 sm:mt-3 sm:px-[5px]
      sm:text-sm max-sm:grid max-sm:grid-cols-2 max-sm:gap-8
      max-[450px]:grid max-[450px]:grid-cols-1 

      
     
      "
      >
        {product1.map((value) => {
          return (
            <div key={value.id}>
              {
                <ListItem
                  id={value.id}
                  title={value.title}
                  price={value.price}
                  image={value.image}
                  cat={value.category}
                />
              }
            </div>
          );
        })}
      </div>
    
    </div>
  );
}

//https://github.com/sudheerj/reactjs-interview-questions#what-is-react
