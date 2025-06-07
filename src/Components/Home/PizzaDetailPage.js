import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PizzaDetailPage.css';
import Footer from './Footer';
import Navbar from './Navbar';

function PizzaDetailPage() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const location = useLocation();
    const pizza = location.state || {};

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value) || 1;
        setQuantity(value);
    };

    const convertedPrice = Math.round(pizza.price * 85);
    const totalPrice = convertedPrice * quantity;
    const dis_price = pizza.after_discount * quantity;

    return (
        <>
            <Navbar />
            <div className="pizza-detail-page">
                <div className="pizza-content">
                    <div className="pizza-image-container">
                        <img src={pizza.image} title={pizza.name} alt={pizza.name} className="pizza-image" />
                    </div>

                    <div className="pizza-details">
                        <h1>{pizza.name?.toUpperCase()}</h1>


                        <div className='pizza-details_amount'>
                            <h2 className={`pizza-price ${pizza.discount >= 40 ? 'blink' : ""}`} style={
                                (pizza.discount) >= 40 ? { textDecoration: "line-through", color: "red" } : {}
                            }>₹{totalPrice}</h2>

                            {(pizza.discount) >= 40 && (pizza.discount) < 90 ?

                                <>
                                    <span>
                                        <i class="ri-discount-percent-fill"></i>
                                    </span>
                                    <p>  {`Upto  ${pizza.discount} %`}</p>

                                    <h2 className='pizza-price'> {`₹${dis_price}`}</h2>

                                </>

                                : ""}


                        </div>

                        <p className="pizza-description">
                            {pizza.details + `Classic marinara sauce, authentic old-world pepperoni, all-natural Italian sausage, slow-roasted ham, hardwood smoked bacon, seasoned pork and beef. Best on our hand-tossed crust.`}
                        </p>

                        <div className="pizza-purchase">
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="quantity-input"
                            />
                            <button className="add-to-cart-btn">Add to Cart</button>
                        </div>

                        <ul className="pizza-meta">
                            <li><strong>SKU:</strong> A987-C</li>
                            <li><strong>Category:</strong> Pizzas</li>
                            <li><strong>Tag:</strong> Pizza</li>
                        </ul>
                    </div>
                </div>

                <div className="pizza-sidebar">
                    <div className="menu-categories">
                        <h3>Menu Categories</h3>
                        <ul>
                            {['Burgers', 'Desserts', 'Drinks', 'Pasta', 'Pizzas', 'Salads', 'Uncategorized'].map((cat) => (
                                <li key={cat}>{cat}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="tags">
                        <h3>Tags</h3>
                        <div className="tag-buttons">
                            {['Burger', 'Dessert', 'Drinks', 'Pasta', 'Pizza', 'Salad'].map((tag) => (
                                <button key={tag} className="tag">{tag}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PizzaDetailPage;
