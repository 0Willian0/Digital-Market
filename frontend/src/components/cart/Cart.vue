<template>
    <div class="cart">
        <PageTitle icon="fa fa-shopping-cart"
            main="Carrinho"/>
        <ul>
            <li v-for="product in products" :key="product.id">
                <CartItem :product="product"/>
            </li>
        </ul>
        <div class="cart-total-value">
            Preco Total: R${{this.price.totalPrice}}
        </div>
        <button class="btn btn-success" @click='pay()'>
            Pagar
        </button>
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
    props: ['carts'],
    computed: mapState(['user']),
    components: {PageTitle, CartItem},
    data: function(){
        return{
            products: [],
            users: [],
            price: 0,
        }
    },
    methods: {
        getProducts(){
            const url = `${baseApiUrl}/cart/${this.user.id}`
            axios(url).then(res=>{
                this.products = res.data
            })
        },
        getUser(){
            const url = `${baseApiUrl}/users/${this.user.id}`
            axios(url).then(res=>{
                this.users = res.data
            })
        },
        getTotalPrice(){
            const url = `${baseApiUrl}/cartPrice/${this.user.id}`
            axios(url).then(res=>{
                this.price = res.data
            })
        },
        pay(){
            if(this.users.balance > this.price.totalPrice){
                const newBalance = this.users.balance = this.users.balance - this.price.totalPrice
                const urlPut = `${baseApiUrl}/cartPrice/${this.user.id}`
                const urlDelete = `${baseApiUrl}/cart/${this.user.id}`

                axios.put(urlPut, {"balance": newBalance}).then(()=>{
                    axios.delete(urlDelete).then(()=>{
                        this.$toasted.global.defaultSuccess()
                    })
                })
            }
            else{
                this.$toasted.global.defaultError()
            }
        }
    },
    mounted(){
        this.getUser()
        this.getProducts()
        this.getTotalPrice()
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
        justify-content: left;
    }

    .cart li{
        flex-basis: 300px;
        text-align: left;
    }

</style>