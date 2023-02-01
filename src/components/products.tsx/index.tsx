import { ProductCart, ProductInterface } from "../../interfaces/product"
import { StyledProduct } from "./styled"
import { useDispatch } from "react-redux"
import { addToCart } from "../../features/counter/cartSlice"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"

export default function Product(product: ProductInterface) {
    const items = useSelector((state: RootState) => state.cart.items)
    const { photo, name, price, description } = product
    const priceFiltered = price.toString().slice(0, -3)
    const dispatch = useDispatch();


    const handleAddToCart = (item: ProductCart) => {
        let message = 'Produto adicionado ao carrinho.'
        items.length > 1 ? message = 'Produtos adicionados ao carrinho.' : message
        toast(message)
        dispatch(addToCart(item));
    };

    return (
        <>
            <StyledProduct>
                <div className='container-box'>
                    <div>
                        <img src={photo}></img>
                    </div>
                    <div className="box-product">
                        <p>{name}</p>
                        <div>
                            <span>R${priceFiltered}</span>
                        </div>
                    </div>

                    <div className="card-description">
                        <p className="description">{description}</p>
                    </div>

                    <div className="button-product">
                        <button onClick={() => handleAddToCart({ ...product, quantity: 1 })}>
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.737212" d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z" stroke="white" />
                                <path opacity="0.737212" d="M1 4.375H13" stroke="white" />
                                <path opacity="0.737212" d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7" stroke="white" />
                            </svg>
                            COMPRAR
                        </button>
                    </div>
                </div>
            </StyledProduct>
        </>
    )
}
