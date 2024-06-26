import "./store.scss";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CancelIcon from '@mui/icons-material/Cancel';

const Store = () => { // Componente para mostrar la tienda
    const [showCart, setShowCart] = useState(false); // Estado para controlar si se muestra la cesta
    const [cartItems, setCartItems] = useState([]); // Estado para almacenar los elementos de la cesta
    const { currentUser } = useContext(AuthContext); // Obtener el usuario actual del contexto de autenticación

    const fetchUserData = async () => { // Función para obtener los datos del usuario
        try {
            const response = await makeRequest.get(`/users/find/${currentUser.id}`); // Obtener los datos del usuario actual
            setUserData(response.data);
        } catch (error) {
            console.error("Error al recuperar los datos del usuario:", error);
        }
    };

    useEffect(() => { // Obtener los datos del usuario al cargar la página
        fetchUserData();
        cargarElementosDesdeLocalStorage(currentUser.id); // Pasar el ID del usuario
    }, [currentUser.id]); // Asegurar que se recargue cuando cambie el usuario

    const cargarElementosDesdeLocalStorage = (userId) => { // Recibir el ID del usuario
        const storedItems = JSON.parse(localStorage.getItem(`elementos_${userId}`)); // Usar el ID del usuario para almacenar los elementos
        if (storedItems) {
            setCartItems(storedItems);
        }
    };

    const toggleCart = () => { // Función para mostrar u ocultar la cesta
        setShowCart(!showCart);
    };

    const comprarElemento = (id) => { // Función para comprar un elemento
        const elementoExistenteIndex = cartItems.findIndex(item => item.id === id); // Buscar el elemento en la cesta
        if (elementoExistenteIndex !== -1) {
            const updatedCart = [...cartItems];
            updatedCart[elementoExistenteIndex].cantidad += 1;
            setCartItems(updatedCart);
            guardarEnLocalStorage(updatedCart, currentUser.id); // Guardar con el ID del usuario
        } else {
            const elemento = data.find(item => item.id === id); // Buscar el elemento en los datos
            const infoElemento = {
                imagen: elemento.imagen,
                titulo: elemento.titulo,
                precio: elemento.precio,
                id: elemento.id,
                cantidad: 1
            };
            const updatedCart = [...cartItems, infoElemento];
            setCartItems(updatedCart);
            guardarEnLocalStorage(updatedCart, currentUser.id); // Guardar con el ID del usuario
        }
    };

    const eliminarElemento = (id) => { // Función para eliminar un elemento de la cesta
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        guardarEnLocalStorage(updatedCart, currentUser.id); // Guardar con el ID del usuario
    };

    const vaciarCarrito = () => { // Función para vaciar la cesta
        setCartItems([]);
        localStorage.removeItem(`elementos_${currentUser.id}`); // Borrar con el ID del usuario
    };

    const guardarEnLocalStorage = (elementos, userId) => { // Recibir el ID del usuario
        localStorage.setItem(`elementos_${userId}`, JSON.stringify(elementos)); // Guardar con el ID del usuario
    };

    const actualizarCantidadArticulos = () => { // Función para actualizar la cantidad de artículos en la cesta
        const cantidadTotal = cartItems.reduce((total, item) => total + item.cantidad, 0);
        document.getElementById("cartItemCount").textContent = cantidadTotal;
    };

    useEffect(() => { // Actualizar la cantidad de artículos al cargar la página
        actualizarCantidadArticulos();
    }, [cartItems]);

    const data = [ // Datos de los productos
        { id: 1, titulo: "Camiseta Negra Unisex - SportTrail", precio: "14.99 €", imagen: "/store/negra.png" },
        { id: 2, titulo: "Proteínas - 100% Whey Gold Standard", precio: "39.99 €", imagen: "/store/proteina.png" },
        { id: 3, titulo: "Sudadera Verde Unisex - SportTrail", precio: "29.99 €", imagen: "/store/sudaderaV.png" },
        { id: 4, titulo: "Creatina - 100% Creatine Six Star", precio: "19.99 €", imagen: "/store/creatina.png" },
        { id: 5, titulo: "Camiseta Blanca Unisex - SportTrail", precio: "29.99 €", imagen: "/store/blanca.png" },
        { id: 6, titulo: "Camiseta Burdeos Unisex - SportTrail", precio: "39.99 €", imagen: "store/burdeos.png" },
        { id: 7, titulo: "Sudadera Marrón Unisex - SportTrail", precio: "49.99 €", imagen: "/store/sudaderaM.png" },
        { id: 8, titulo: "Sudadera Negra Unisex - SportTrail", precio: "49.99 €", imagen: "/store/sudaderaN.png" },
        { id: 9, titulo: "Multivitamínicos - Caffeine Muscle P.", precio: "9.99 €", imagen: "/store/cafeina.png" },
        { id: 10, titulo: "Aminoácidos - Amino Elite", precio: "29.99 €", imagen: "/store/aminoácidos.png" },
        { id: 11, titulo: "Proteínas - 100% Whey Elite", precio: "19.99 €", imagen: "/store/proteinas2.png" },
        { id: 12, titulo: "Pre-Entreno - Intenze", precio: "19.99 €", imagen: "/store/preentreno.png" }
    ];
    

    return (
        <div className="store">
            <div className="storeContainer">
                <div className="storeInfo">
                    <img src="../src/pages/login/images/store.png" alt="" className="storeLogo"/>
                    <div className="storeLeft">
                        <a href="#lista-1">Descuentos en Productos</a> /
                        <a href="#lista-2">Nuestra Ropa</a> /
                        <a href="#lista-3">Suplementos Nutricionales</a>
                    </div>
                    <div className="shoppingBagContainer">
                        <div className="numeroArticulosContainer">
                            <ul>
                                <li className="submenu">
                                    <div className="numeroArticulos" id="cartItemCount">{cartItems.length}</div>
                                    {/* Utiliza onClick para llamar a la función toggleCart */}
                                    <ShoppingCartIcon className="shoppingBagIcon" id="img-carrito" onClick={toggleCart} style={{cursor: "pointer"}}/>
                                    {/* Muestra la cesta condicionalmente */}
                                    {showCart && (
                                        <div id="carrito">
                                            {cartItems.length > 0 ? (
                                                <>
                                                    <h3 className="h3-compra">Resumen de compra:</h3>
                                                    <table id="lista-carrito">
                                                        <thead>
                                                            <tr>
                                                                <th>Imagen</th>
                                                                <th>Nombre</th>
                                                                <th>Precio</th>
                                                                <th>Cantidad</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {cartItems.map((item, index) => (
                                                                <React.Fragment key={index}>
                                                                    <tr>
                                                                        <td><img src={item.imagen} alt=""/></td>
                                                                        <td>{item.titulo}</td>
                                                                        <td>{item.precio}</td>
                                                                        <td>x {item.cantidad}</td>
                                                                        <td>
                                                                            <a href="#" className="borrar" onClick={() => eliminarElemento(item.id)}>
                                                                                <CancelIcon className="iconBorrar"/>
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan="5"><hr /></td>
                                                                    </tr>
                                                                </React.Fragment>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <a href="#" id="comprar-productos" className="btn-2">Comprar Ahora</a>
                                                    <a href="#" id="vaciar-carrito" className="btn-2" onClick={vaciarCarrito}>Vaciar Carrito</a>
                                                </>
                                            ) : (
                                                <h3 className="h3-vacio">El carrito está vacío.</h3>
                                            )}
                                        </div>
                                    )}
                                </li>
                            </ul>
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
                                    <a href="#" className="agregar-carrito btn-3" onClick={() => comprarElemento(1)}>Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/store/negra.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Proteínas - 100% Whey Gold Standard</h3>
                                    <div className="prices">    
                                        <p className="price-1">59.99 €</p>
                                        <p className="precio">39.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" onClick={() => comprarElemento(2)}>Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/store/proteina.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Sudadera Verde Unisex - SportTrail</h3>
                                    <div className="prices">    
                                        <p className="price-1">49.99 €</p>
                                        <p className="precio">29.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" onClick={() => comprarElemento(3)}>Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/store/sudaderaV.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Creatina - 100% Creatine Six Star</h3>
                                    <div className="prices">    
                                        <p className="price-1">29.99 €</p>
                                        <p className="precio">19.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" onClick={() => comprarElemento(4)}>Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/store/creatina.png" alt=""/>
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
                                    <a href="#" className="agregar-carrito btn-3" onClick={() => comprarElemento(5)}>Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/store/blanca.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Camiseta Buurdeos Unisex - SportTrail</h3>
                                    <div className="prices">
                                        <p className="precio">39.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" onClick={() => comprarElemento(6)}>Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/store/burdeos.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                <h3>Sudadera Marrón Unisex - SportTrail</h3>
                                    <div className="prices">
                                        <p className="precio">49.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" onClick={() => comprarElemento(7)}>Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/store/sudaderaM.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Sudadera Negra Unisex - SportTrail</h3>
                                    <div className="prices">
                                        <p className="precio">49.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" onClick={() => comprarElemento(8)}>Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/store/sudaderaN.png" alt=""/>
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
                                    <a href="#" className="agregar-carrito btn-3" onClick={() => comprarElemento(9)}>Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/store/cafeina.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Aminoácidos - Amino Elite</h3>
                                    <div className="prices">
                                        <p className="precio">29.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" onClick={() => comprarElemento(10)}>Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/store/aminoácidos.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Proteínas - 100% Whey Elite</h3>
                                    <div className="prices">
                                        <p className="precio">19.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" onClick={() => comprarElemento(11)}>Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/store/proteinas2.png" alt=""/>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <h3>Pre-Entreno - Intenze</h3><br />
                                    <div className="prices">
                                        <br />
                                        <p className="precio">19.99 €</p>
                                    </div>
                                    <a href="#" className="agregar-carrito btn-3" onClick={() => comprarElemento(12)}>Comprar</a>
                                </div>
                                <div className="categorie-img">
                                    <img src="/store/preentreno.png" alt=""/>
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
