import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-gray-500 text-white py-3 px-2 text-2x text-center">
      <CustomLink className="ml-4" to="/">
        Home
      </CustomLink>
      <CustomLink className="ml-4" to="/reviwe">
        Review
      </CustomLink>
      <CustomLink className="ml-4" to="/dashBord">
        Dash-Board
      </CustomLink>
      <CustomLink className="ml-4" to="/blog">
        Blog
      </CustomLink>
    </div>
  );
};

export default Header;
