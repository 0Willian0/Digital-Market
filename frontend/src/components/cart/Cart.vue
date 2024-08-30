<template>
    <div class="cart">
        <PageTitle icon="fa fa-shopping-cart"
            main="Carrinho"/>
        <ul>
            <li v-for="product in products" :key="product.id">
                <ProductItem :product="product"/>
            </li>
        </ul>
    </div>
</template>

<script>
import {baseApiUrl} from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle.vue'
import {mapState} from 'vuex'
import ProductItem from '../product/ProductItem.vue'

export default {
    name: 'Cart',
    computed: mapState(['user']),
    components: {PageTitle, ProductItem},
    data: function(){
        return{
            products: [],
        }
    },
    methods: {
        getProducts(){
            const url = `${baseApiUrl}/cart/${this.user.id}`
            axios(url).then(res=>{
                this.products = this.products.concat(res.data)
            })
        }
    },
    watch:{
        $route(to){
            this.category.id = to.params.id
            this.products = []
            this.page = 1
            this.loadMore = true

            this.getProducts()
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