import Product from "../Products/data";
import styles from "./Cart.module.css";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as TirIcons from "react-icons/ti";
import { useCart } from "./CartReducer";
import { useSetState } from "./CartReducer";
function Produkty(props) {
  const cart = useCart();
  const setCart = useSetState();
  const increment = (hodnota) => {
    props.handleQuntityChange(props.id, hodnota);
  };

  const removeFromCart = () => {
    setCart(cart.filter((product) => product.id !== props.id));
  };
  const currentProduct = Product.find((value) => value.id === props.id) || {};

  return (
    <>
      <cart className={styles.celek}>
        <div key={currentProduct.id} className={styles.blok}>
          <img
            className={styles.img}
            alt={currentProduct.name}
            src={currentProduct.img}
          />
          <h3 className={styles.name}>{currentProduct.name}</h3>
          <h2 className={styles.price}>{currentProduct.price + ",-"}</h2>
          <div className={styles.buttons}>
            <button
              key={currentProduct.id}
              className={styles.plus}
              onClick={() => increment(+1)}
            >
              <GrIcons.GrAdd />
            </button>

            {<span className={styles.quantity}>{props.quantity}</span>}
            <button
              key={currentProduct.id}
              className={styles.minus}
              onClick={() => increment(-1)}
            >
              <AiIcons.AiOutlineMinus />
            </button>
          </div>
          <button
            onClick={() => removeFromCart(currentProduct)}
            className={styles.bin}
          >
            <TirIcons.TiTimes />
          </button>
          <span className={styles.total}>
            {props.quantity * currentProduct.price + "Kč"}
          </span>
        </div>
      </cart>
    </>
  );
}

export default Produkty;
