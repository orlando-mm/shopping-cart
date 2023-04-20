import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', () => {
    /* STATE */
    const products = ref([]);
    const cart = ref({});

    /* MUTATIONS */
    const setProducts = (arrayProducts)=> {
        products.value = arrayProducts;
    }
    const storeCart = ()=> {
        localStorage.cart = JSON.stringify(cart.value);
    }
    const resetStoreCart = () => {
        localStorage.removeItem('cart');
    }
    const loadStoreCart = () => {
        if (!Object.keys(cart.value).length && localStorage.getItem('cart')) {
            cart.value = JSON.parse(localStorage.cart);
        }
    }
    const setCart = (objProduct) => {
        cart.value[objProduct.id] = objProduct;
        storeCart();
    }
    const resetCart = () => {
        cart.value = {};
        resetStoreCart();
    }
    const subtractQuantity = (idProduct) => {
        cart.value[idProduct].amount = cart.value[idProduct].amount - 1;
        if(cart.value[idProduct].amount === 0) {
            delete cart.value[idProduct];
        }
        storeCart();
    }

    /* ACTIONS */
    const fetchProducts = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products'); // @todo Cambiar a 'api.json' si deja de estar disponible!
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    const addToCart = (objProduct) => {
        cart.value.hasOwnProperty(objProduct.id)
            ? objProduct.amount = cart.value[objProduct.id].amount + 1
            : objProduct.amount = 1;
        setCart(objProduct);
    }

    /* GETTERS */
    const totalProductsAmount = computed(() => Object.values(cart.value).reduce((count,{amount}) => count + amount, 0));
    const totalPrice = computed(() => Object.values(cart.value).reduce((count,{amount, price}) => count + (amount * price), 0));

    return { products, fetchProducts,loadStoreCart, cart, addToCart, totalProductsAmount, totalPrice, resetCart, subtractQuantity }
})