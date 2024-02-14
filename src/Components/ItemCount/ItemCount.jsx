import "./ItemCount.css"
import PropTypes from "prop-types"
import Button from "../Button/Button"
import {useCount} from "../../Hooks/useCount/useCount"
import { Link } from "react-router-dom"

const ItemCount = ({stock,onAddToCart}) => {
  const handleAddToCart = () => {
    onAddToCart(count); 
    reset(); 
  };
  const {count,increment,decrement,reset} = useCount(1,stock,1);
  return (
    <>
    <div className="containerCarts">
      <div className="buttonsCart">
        <div className="divItemCount">
        <button className="buttonItemCount" onClick={decrement}>
          -
        </button>
        </div>
        <p className="count">{count}</p>
        <div className="divItemCount"> 
        <button className="buttonItemCount" onClick={increment}>
          +
        </button>
          </div>
      </div>
      <div className="divAddToCart"> 
          <Link to={"/cart"} className="link">
          <Button detail={"Agregar al carrito"} onClick={handleAddToCart} className="buttonAddToCart"/>
          </Link>
      </div>
    </div>

    </>

  )
}

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired
}
export default ItemCount
