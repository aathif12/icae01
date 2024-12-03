import "../assets/CSS/layout.css";

export default function Product(props) {
  return (
    <div className="grid-item">
      {props.flowersp.map((flower) => {
        return (
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
              <button class="card-button">Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
