import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { TiUserAdd } from "react-icons/ti";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes"
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart class="nav-icons" />
        </a>

        <a href="#">
          <CiShoppingCart class="nav-icons" />
        </a>

        <a href="#">
          <TiUserAdd class="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
