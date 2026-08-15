import axios from "axios";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = search ? `/api/products?search=${search}` : "/api/products";

        axios.get(url).then((response) => {
            setProducts(response.data);
        });
    }, [search]);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
            <title>Ecommerce Website</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}
