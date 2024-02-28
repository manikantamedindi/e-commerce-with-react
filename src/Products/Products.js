import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import "./Products.css";

function Products() {
  return (
    <>
      <section className="card-container">
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Shoe"
            className="card-image"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <FaStar className="rating-start" />
              <FaStar className="rating-start" />
              <FaStar className="rating-start" />
              <FaStar className="rating-start" />
              <span className="total-reviews">4</span>
            </section>
            <div className="card-price">
              <del>$300</del> $200
            </div>
            <div className="bag">
              <FaShoppingBag className="bag-icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
