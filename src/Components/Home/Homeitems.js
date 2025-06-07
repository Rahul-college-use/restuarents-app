import React from 'react';
import './Homeitems.css'
import { useNavigate } from 'react-router-dom';
let after_discount = 0;
function Homeitems() {
    const home_items_array = [
        {
            ImageSrc: 'https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/8-600x600.gif',
            name: "Carbonara",
            details: "Classic marinara sauce, authentic old-world pepperoni, all-natural Italian…",
            price: "3.80",
            discount: 40
        },
        {
            ImageSrc: 'https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/4-600x600.gif',
            name: "Capricciosa",
            details: "Classic marinara sauce, authentic old-world pepperoni, all-natural",
            price: "2.90"
        },
        {
            ImageSrc: 'https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/6-600x600.gif',
            name: "Prosciutto",
            details: "Classic marinara sauce, authentic old-world pepperoni, all-natural",
            price: "2.60"
        },
        {
            ImageSrc: 'https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/7-2-1-600x600.gif',
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
            price: "2.87",
            discount: 52
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
                details: item.details,
                discount: item.discount,
                after_discount : after_discount
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
                            <div className="price_tag">
                                <div className={`home_items_price ${items.discount >=40? 'blink':""}`} 
                                style={
                                    (items.discount)>=40? {textDecoration : "line-through",color:"red"} :{}
                                } 
                                >
                                    <span>₹</span>{Math.round(items.price * 85)}
                                </div>
                                {(items.discount) >= 40 && (items.discount) < 90 ? <div className='home_items_discount'>
                                    <span>
                                        <i class="ri-discount-percent-fill"></i>
                                    </span>
                                    {(items.discount) >= 40 && (items.discount) < 90 ? " Upto " + items.discount + " % " : ""}
                                </div>


                                    : ""}
                                {(items.discount) >= 40 && (items.discount) < 90 ? <div className='home_items_after_discount'>
                                    <span>₹</span> {after_discount = Math.round(((Math.round(items.price * 85)) * (items.discount) / 100))}
                                </div>

                                    : ""}
                            </div>

                        </div>
                    ))
                }


            </div>
        </div>
    );
}

export default Homeitems;

