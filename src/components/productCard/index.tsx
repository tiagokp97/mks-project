import { StyledProductCard } from "./styled"
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useDispatch } from "react-redux";
import { addQuantity, excludeProduct, removeFromCart } from "../../features/counter/cartSlice";
import { useEffect, useState } from "react";
import { ProductCart } from "../../interfaces/product";

export default function ProductCard() {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const resizeW = () => setWindowSize(window.innerWidth);
        window.addEventListener("resize", resizeW)
        return () => window.removeEventListener("resize", resizeW);
    });


    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleAddQuantity = (id: number) => {
        dispatch(addQuantity(id));
    };

    const handleExcludeProduct = (id: number) => {
        dispatch(excludeProduct(id))
    }


    return (
        <StyledProductCard >
            <div className="scrollbar">
                {items.map(({ photo, name, quantity, price, id }: ProductCart) => (
                    <div className="wrapper" key={id}>
                        {windowSize > 1200 ? <span className="qtd">qtd: </span> : null}
                        <div className="container-product-cart">
                            <img src={photo} />
                            <p>{name}</p>
                            <div className="container-elements-cart">
                                <div className="menu">
                                    <button className="menu-buttons minum" onClick={() => handleRemoveFromCart(id)}>-</button>
                                    <span className="menu-buttons dividers">{quantity}</span>
                                    <button className="menu-buttons plus" onClick={() => handleAddQuantity(id)}>+</button>
                                </div>
                                <div className="box-product">
                                    <div>
                                        <span>R${price * quantity}</span>
                                    </div>

                                </div>
                            </div>
                            <button className="close-button" onClick={() => handleExcludeProduct(id)}>X</button>
                        </div>
                    </div>

                ))}
            </div>
        </StyledProductCard>

    )
}
