import React from 'react';
import './Homeitems.css'
import pizza from '../../assets/pizza.gif'
import pizza3 from '../../assets/Diablo.gif'
import pizza2 from '../../assets/Prosciutto.gif'
import pizza4 from '../../assets/pizza2.gif'
import { useNavigate } from 'react-router-dom';
function Homeitems() {
    const home_items_array = [
        {
            ImageSrc: pizza,
            name: "Carbonara",
            details: "Classic marinara sauce, authentic old-world pepperoni, all-natural Italian…",
            price: "3.80"
        },
        {
            ImageSrc: pizza4,
            name: "Capricciosa",
            details: "Classic marinara sauce, authentic old-world pepperoni, all-natural",
            price: "2.90"
        },
        {
            ImageSrc: pizza3,
            name: "Prosciutto",
            details: "Classic marinara sauce, authentic old-world pepperoni, all-natural",
            price: "2.60"
        },
        {
            ImageSrc: pizza2,
            name: "Saporita",
            details: "Classic marinara sauce, authentic old-world pepperoni, all-natural",
            price: "3.50"
        },
        {
            ImageSrc: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/2.gif",
            name: "Pepperoni",
            details: "Classic marinara sauce, authentic old-world pepperoni, all-natural",
            price: "2.90"
        },

        {
            ImageSrc: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/6.gif",
            name: "Diablo",
            details: "Classic marinara sauce, authentic old-world pepperoni, all-natural",
            price: "2.87"
        },
        {
            ImageSrc: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/11.gif",
            name: "Margherita",
            details: "Classic marinara sauce, authentic old-world pepperoni, all-natural",
            price: "2.60"
        },
        {
            ImageSrc: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/10.gif",
            name: "Vincent",
            details: "Classic marinara sauce, authentic old-world pepperoni, all-natural",
            price: "2.87"
        },
        {
            ImageSrc: "https://imgs.search.brave.com/Xkf-fEb9ufUyHM-trDaFd5elsKzDAxb5N5TEMUGiulk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NS9QaXp6YS1QTkcu/cG5n",
            name: "Vincent",
            details: "Classic marinara sauce, authentic old-world pepperoni, all-natural",
            price: "2.87"
        },

    ]
    const navigate = useNavigate()
    const goToKart = (item) => {
        navigate('/pizza', {
            state: {
                image: item.ImageSrc,
                name: item.name,
                price: item.price,
                details: item.details
            }
        });
    };



    return (
        <div className="home_items_main">
            <div className='home_items_heading'>
                <h2>Hot Sales</h2>
            </div>


            <div className="home_items_row">

                {
                    home_items_array.slice(0, 8).map((items, idx) => (
                        <div className="home_items_col" key={idx}>

                            <div className='home_items_image' onClick={() => goToKart(items)}>
                                <div className='box' title={(items.name).toUpperCase() + ` Order Now`.toUpperCase()}>
                                    <i title={`Add To Kart`.toUpperCase()} className="ri-shopping-cart-2-fill"></i>
                                </div>
                                <img title={(items.name).toUpperCase()} style={{ cursor: "pointer" }} src={items.ImageSrc} alt={items.name} />
                            </div>
                            <div className='home_items_name'>
                                {items.name}
                            </div>
                            <div className='home_items_details'>
                                {(items.details).length > 65 ? (items.details).slice(0, 66) + "..." : items.details}
                            </div>
                            <div className='home_items_price'>
                                <span>₹</span>{Math.round(items.price * 85)}
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    );
}

export default Homeitems;

