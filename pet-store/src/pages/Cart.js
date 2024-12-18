import React from 'react';

const Cart = () => {
    return (
        <div className="container">
            <section className="payment-section">
                <div className="contacts-section">
                    <h2>Ваши данные</h2>
                    <form className="contact-form">
                        <label htmlFor="name">Имя:</label>
                        <input type="text" id="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required />
                        <label htmlFor="address">Адрес доставки:</label>
                        <textarea id="address" required></textarea>
                        <label htmlFor="paymentMethod">Способ оплаты:</label>
                        <select id="paymentMethod" required>
                            <option elected disabled>Выберите способ оплаты</option>
                            <option value="cardOnline">Картой онлайн</option>
                            <option value="cardUponDelivery">Картой при получении</option>
                            <option value="cash">Наличными</option>
                        </select>
                        <button type="submit">Заказать</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Cart;