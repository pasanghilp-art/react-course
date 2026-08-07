import dayjs from "dayjs";
import { priceFormater } from "../../utils/money";

export function DeliveryOptions({ deliveryOptions, cartItem }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>

            {deliveryOptions.map((deliveryOption) => {
                let priceString = "FREE Shipping";

                if (deliveryOption.priceCents > 0) {
                    priceString = `${priceFormater(deliveryOption.priceCents)}-Shipping`;
                }
                return (
                    <div key={deliveryOption.id} className="delivery-option">
                        <input
                            type="radio"
                            defaultChecked={
                                deliveryOption.id === cartItem.deliveryOptionId
                            }
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`}
                        />
                        <div>
                            <div className="delivery-option-date"></div>
                            {dayjs(
                                deliveryOption.estimatedDeliveryTimeMs,
                            ).format("dddd, MMMM D")}
                            <div className="delivery-option-price">
                                {priceString}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
