import React from 'react';
import { useLocation } from 'react-router-dom';
import './PizzaDetailPage.css';
import Footer from './Footer';
import Navbar from './Navbar';

function PizzaDetailPage() {
    const location = useLocation();
    const pizza = location.state || {}; // Passed from Homeitems

    return (

        <>
            <Navbar/>
            <div className="pizza-detail-page">
                <div className="pizza-content">
                    <div className="pizza-image-container">
                        <img src={pizza.image} alt={pizza.name} className="pizza-image" />
                    </div>

                    <div className="pizza-details">
                        <h1>{pizza.name?.toUpperCase()}</h1>
                        <h2 className="pizza-price">₹{Math.round(pizza.price * 85)}</h2>

                        <p className="pizza-description">
                            {pizza.details || `Classic marinara sauce, authentic old-world pepperoni, all-natural Italian sausage, slow-roasted ham, hardwood smoked bacon, seasoned pork and beef. Best on our hand-tossed crust.`}
                        </p>

                        <div className="pizza-purchase">
                            <input type="number" min="1" defaultValue="1" className="quantity-input" />
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
            <div className="pizza-detail-page">
                {/* all your main layout code */}
            </div>
            <Footer />
        </>

    );
}

export default PizzaDetailPage;
