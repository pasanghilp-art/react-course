import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { OrdersGrid } from "./OrdersGrid";
import { Header } from "../../Components/Header";
import BuyAgainIcon from "../../assets/images/icons/buy-again.png";
import "./OrdersPage.css";

export function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrdersData = async () => {
            const response = await axios.get("/api/orders?expand=products");
            setOrders(response.data);
        };
        getOrdersData();
    }, []);
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
            <title>Order</title>

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders} />
            </div>
        </>
    );
}
