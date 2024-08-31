<template>
    <div class="cart">
        <PageTitle icon="fa fa-shopping-cart"
            main="Carrinho"/>
        <ul>
            <li v-for="product in products" :key="product.id">
                <CartItem :product="product"/>
            </li>
        </ul>
    </div>
</template>

<script>
import {baseApiUrl} from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle.vue'
import {mapState} from 'vuex'
import CartItem from './CartItem.vue'

export default {
    name: 'Cart',
    computed: mapState(['user']),
    components: {PageTitle, CartItem},
    data: function(){
        return{
            products: [],
        }
    },
    methods: {
        getProducts(){
            const url = `${baseApiUrl}/cart/${this.user.id}`
            axios(url).then(res=>{
                this.products = res.data
            })
        }
    },
    mounted(){
        this.getProducts()
    }
}
</script>

<style>
    .cart ul{
        display: flex;
        flex-direction: row;
        list-style: none;
        flex-wrap: wrap;
        gap: 10px;
        padding: 0px;
    }

</style>