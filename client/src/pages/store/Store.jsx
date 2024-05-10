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
                        <a href="#lista-1">Descuentos en Productos</a>
                        <a href="#lista-2">Nuestra Ropa</a>
                        <a href="#lista-3">Suplementos Nutricionales</a>
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
                        <h2>Descuentos en Productos</h2>
                        <hr />
                        <div className="categories">
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Camiseta Negra Unisex - SportTrail</h3>
                                    <div className="prices">    
                                        <p className="price-1">29.99 €</p>
                                        <p className="precio">14.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="1">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/store/negra.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Proteínas - 100% Whey Gold Standard</h3>
                                    <div className="prices">    
                                        <p className="price-1">59.99 €</p>
                                        <p className="precio">39.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="2">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/store/proteina.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Sudadera Verde Unisex - SportTrail</h3>
                                    <div className="prices">    
                                        <p className="price-1">49.99 €</p>
                                        <p className="precio">29.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="3">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/store/sudaderaV.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Creatina - 100% Creatine Six Star</h3>
                                    <div className="prices">    
                                        <p className="price-1">29.99 €</p>
                                        <p className="precio">19.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="4">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/store/creatina.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr id="lista-2"/>
                    
                    <section className="promos container" >
                        <h2>Nuestra Ropa</h2>
                        <hr />
                        <div className="categories">
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Camiseta Blanca Unisex - SportTrail</h3>
                                    <div className="prices">
                                        <p className="precio">29.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="1">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/store/blanca.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Camiseta Buurdeos Unisex - SportTrail</h3>
                                    <div className="prices">
                                        <p className="precio">39.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="2">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/store/burdeos.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                <h3>Sudadera Marrón Unisex - SportTrail</h3>
                                    <div className="prices">
                                        <p className="precio">49.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="3">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/store/sudaderaM.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Sudadera Negra Unisex - SportTrail</h3>
                                    <div className="prices">
                                        <p className="precio">49.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="4">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/store/sudaderaN.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr id="lista-3"/>

                    <section className="promos container" >
                        <h2>Suplementos Nutricionales</h2>
                        <hr />
                        <div className="categories">
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Multivitamínicos - Caffeine Muscle P.</h3>
                                    <div className="prices">
                                        <p className="precio">9.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="1">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/store/cafeina.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Aminoácidos - Amino Elite</h3>
                                    <div className="prices">
                                        <p className="precio">29.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="2">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/store/aminoácidos.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Proteínas - 100% Whey Elite</h3>
                                    <div className="prices">
                                        <p className="precio">19.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="3">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/store/proteinas2.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Pre-Entreno - Intenze</h3>
                                    <div className="prices">
                                        <p className="precio">19.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" data-id="4">Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/public/store/preentreno.png" alt=""/>
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
