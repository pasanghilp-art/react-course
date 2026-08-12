import axios from "axios";
import { useState } from "react";
import { priceFormater } from "../../utils/money";

export function CartItemDetails({ cartItem, loadCart }) {
    const [textInput, setTextInput] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const updateCartItem = async () => {
        if (textInput) {
            await axios.put(`/api/cart-items/${cartItem.product.id}`, {
                quantity: Number(quantity),
            });
            await loadCart();
            setTextInput(false);
        } else {
            setTextInput(true);
        }
    };

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    const textUpdater = (event) => {
        setQuantity(event.target.value);
    };
    return (
        <>
            <img className="product-image" src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">{cartItem.product.name}</div>
                <div className="product-price">
                    {priceFormater(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity:
                        {textInput ? (
                            <input
                                type="text"
                                className="textBox"
                                value={quantity}
                                onChange={textUpdater}
                            />
                        ) : (
                            <span className="quantity-label">
                                {cartItem.quantity}
                            </span>
                        )}
                    </span>
                    <span
                        className="update-quantity-link link-primary"
                        onClick={updateCartItem}
                    >
                        Update
                    </span>
                    <span
                        className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}
                    >
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}
