import React from "react";
import { Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import useParams from "../useParams/useParam";

const Home = () => {
  const [reviwe] = useParams();
  return (
    <div>
      <div className="p-20 grid grid-cols-2 justify-center items-center">
        <div className="p-5">
          <h1 className="text-4xl py-4  text-orange-600">
            Playstation Classic Console
          </h1>
          <p>
            Why are you miss describing your product!!!???? this is completely
            unacceptable and fraud! you listing this Console as a Normal Regular
            Classic Play Station 1, which it is NOT, this is a MINI unit, MINI
            Console! which is not stated in the Title! Unlike on eBay i just
            went in after this happened to make sure im not wrong on it, and yes
            they List it well and accordingly how it is!! they say its a MINI
            Console!
          </p>
          <button className=" mt-5 py-3 px-2 bg-cyan-500 text-white rounded-lg hover:bg-red-600 duration-150">
            buy now
          </button>
        </div>
        <div>
          <img
            className="border-2 rounded-lg"
            src="https://m.media-amazon.com/images/I/61bvBCSda0L._SX522_.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="p-10">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 grid-rows-1">
          {reviwe.slice(0, 3).map((pd) => (
            <Reviews pd={pd} key={pd.id}></Reviews>
          ))}
        </div>
        <Link className="mb-10 " to="/reviwe">
          <button className="py-3 px-2  hover:bg-orange-500 duration-300 bg-cyan-500 text-white border-2 rounded-lg text-2xl">
            Reviwes All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
