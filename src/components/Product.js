import "../assets/CSS/layout.css";
import { useState } from "react";
export default function Product(props) {
  const [cart, setCart] = useState("");
  return (
    <>
      {props.flowersp.map((flower) => {
        return (
          <div className="grid-item">
            <div class="card">
              <img src={require(`../assets/image/${flower.img}`)} />
              <div class="card-body">
                <h5 class="card-title">
                  {flower.name} Price:{flower.price}
                </h5>
                <div class="quantity-container">
                  <label for="quantity">Quantity:</label>
                  <input type="number" id="quantity" name="quantity" />
                </div>
                <button
                  class="card-button"
                  id={flower.id}
                  onClick={() => {
                    setCart(flower);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
