import React from "react";
import { SiEpicgames } from "react-icons/si";
import { AiFillCamera } from "react-icons/ai";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { MdSportsBaseball } from "react-icons/md";

const Hobbies = () => {
  return <>

    <div className="hobbies">
      <span>
        <div>
          <SiEpicgames/>
          GAMING
        </div>
        <div>
          <AiFillCamera/>
          PHOTOGRAPHY
        </div>
      </span>
      <span>
        <div>
          <BiSolidPlaneAlt/>
          TRAVELLING
        </div>
        <div>
          <MdSportsBaseball/>
          SPORTS
        </div>
      </span>
    </div>
  
  </>;
};

export default Hobbies;
