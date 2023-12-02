import React from "react";

function Navbar() {
  return (
    <nav className="flex py-5 bg-orange-600 text-white justify-center">
        <div className="flex items-center ms-3 justify-start">
            <p>My Portofolio</p>
        </div>
        <div className="flex items-center ms-3">
          <a href="https://github.com/dennynr">My Github</a>
        </div>
    </nav>
  );
}

export default Navbar;
