import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', () => {
    /* STATE */
    const products = ref([]);
    const cart = ref({});

    /* MUTATIONS */
    function setProducts(arrayProducts) {
        products.value = arrayProducts;
    }
    function setCart(objProduct) {
        cart.value[objProduct.id] = objProduct;
    }
    function resetCart() {
        cart.value = {};
    }
    function subtractQuantity(idProduct) {
        cart.value[idProduct].amount = cart.value[idProduct].amount - 1;
        if(cart.value[idProduct].amount === 0) {
            delete cart.value[idProduct];
        }
    }
    function setProduct(idProduct) {

    }

    /* ACTIONS */
    async function fetchProducts() {
        try {
            const res = await fetch('https://fakestoreapi.com/products'); // @todo Cambiar a 'api.json' si deja de estar disponible!
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    function addToCart(objProduct) {
        cart.value.hasOwnProperty(objProduct.id)
            ? objProduct.amount = cart.value[objProduct.id].amount + 1
            : objProduct.amount = 1;
        setCart(objProduct);
    }

    /* GETTERS */
    const totalProductsAmount = computed(() => Object.values(cart.value).reduce((count,{amount}) => count + amount, 0));
    const totalPrice = computed(() => Object.values(cart.value).reduce((count,{amount, price}) => count + (amount * price), 0));

    return { products, fetchProducts, cart, addToCart, totalProductsAmount, totalPrice, resetCart, subtractQuantity }
})