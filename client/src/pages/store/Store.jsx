import "./store.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect } from "react";

const Store = () => {
    
    useEffect(() => {
        // Simula la cantidad de artículos en el carrito
        const cartItems = 5;
        const badge = document.getElementById('cartItemCount');
        badge.innerText = cartItems.toString();
    }, []);

    return (
        <div className="store">
            <div className="storeContainer">
                <div className="storeInfo">
                    <img src="../src/pages/login/images/store.png" alt="" className="storeLogo"/>
                    <div className="storeLeft">
                        <a>Descuentos en Productos</a>
                        <a>Nuestra Ropa</a>
                        <a>Suplementación Alimenticia</a>
                    </div>
                    <div className="shoppingBagContainer">
                        <ShoppingCartIcon className="shoppingBagIcon"/>
                        <div className="numeroArticulosContainer">
                            <div className="numeroArticulos" id="cartItemCount">0</div>
                        </div>
                    </div>
                </div>
                <div className="storeInfo2">
                    <section className="promos container" id="lista-1">
                        <h2>Descuentos en Videojuegos</h2>
                        <div className="categories">
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Marvel's Spider-Man: Miles Morales - PS5</h3>
                                    <div className="prices">    
                                        <p className="price-1">59.99 €</p>
                                        <p className="precio">29.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="1">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/upload/1715119730817senderismo.avif" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Marvel's Spider-Man: Miles Morales - PS5</h3>
                                    <div className="prices">    
                                        <p className="price-1">79.99 €</p>
                                        <p className="precio">49.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="2">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/upload/1715119730817senderismo.avif" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Marvel's Spider-Man: Miles Morales - PS5</h3>
                                    <div className="prices">    
                                        <p className="price-1">79.99 €</p>
                                        <p className="precio">49.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="3">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/upload/1715119730817senderismo.avif" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Marvel's Spider-Man: Miles Morales - PS5</h3>
                                    <div className="prices">    
                                        <p className="price-1">79.99 €</p>
                                        <p className="precio">39.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="4">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/upload/1715119730817senderismo.avif" alt=""/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Store;
