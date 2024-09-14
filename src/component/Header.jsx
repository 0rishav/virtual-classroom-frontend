import { FaRegUserCircle } from "react-icons/fa";
import SignUp from "../pages/signup/SignUp";
import { useState } from "react";

const Header = () => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };
  return (
    <div>
      <div className="header">
        <div className="icon">
          <h1>Virtual Classroom</h1>
        </div>
        <div className="list">
          <li>Home</li>
          <FaRegUserCircle onClick={toggleForm} className="user-icon"/>
        </div>
      </div>
      <SignUp isVisible={formVisible} toggleForm={toggleForm}/>

    </div>
  );
};

export default Header;
