import { useEffect, useState } from 'react'
import { useGetProductByNameQuery } from "../../features/counter/productsApiSlice"
import { ProductInterface } from "../../interfaces/product"
import Product from "../products.tsx"
import { StyledFilter, StyledList } from "./styled"
import Skeleton from "../skeleton"

export default function ProductsList() {
    const [query, setQuery] = useState({
        page: '1',
        rows: '6',
        sortBy: 'name',
        orderBy: 'DESC'
    })
    const { data } = useGetProductByNameQuery(query)
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [loading, setLoading] = useState(true)
    const [asc, setAsc] = useState(true)

    useEffect(() => {
        if (data) {
            setProducts(data.products);
            setLoading(false)
        }
    }, [data])

    const handleIncrement = () => {
        const maxPage = 3;
        let pageToNumber = Number(query.page)
        pageToNumber += 1
        let result = pageToNumber.toString()
        if (pageToNumber < maxPage) {
            setQuery({ ...query, page: result })
        }
    };

    const handleDecrement = () => {
        const minPage = 0;
        let pageToNumber = Number(query.page)
        pageToNumber -= 1
        let result = pageToNumber.toString()
        if (pageToNumber > minPage) {
            setQuery({ ...query, page: result })

        }
    };

    const handleASC = () => {
        setAsc(!asc)
        if (asc === true) {
            setQuery({ ...query, orderBy: 'ASC' })
            return
        }
        setQuery({ ...query, orderBy: 'DESC' })
    };

    return (
        <>
            <StyledFilter>
                <button onClick={() => handleIncrement()}>Próxima página</button>
                <button onClick={() => handleDecrement()}>Voltar página</button>
                <button onClick={() => handleASC()}>{asc ? "Maior para o Menor" : "Menor para o maior"}</button>

            </StyledFilter>
            <StyledList>
                <div className="container-cards">
                    {loading ?
                        Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton key={i} />
                        )) : null
                    }
                    {products && products.map(product => (
                        <Product key={product.id} {...product} />
                    ))}
                </div>
            </StyledList>
        </>
    )
}
