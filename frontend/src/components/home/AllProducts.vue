<template>
    <div class="all-products">
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
import ProductItem from '../product/ProductItem.vue'

export default {
    name: 'AllProducts',
    components: {ProductItem},
    data: function(){
        return {
            products: []    
        }
        
    },
    methods:{
        getProducts() {
            const url = `${baseApiUrl}/allproducts`
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
    .all-products ul{
        display: flex;
        flex-direction: row;
        list-style: none;
        flex-wrap: wrap;
        gap: 10px;
        padding: 0px;
        justify-content: left;
    }

    .all-products li{
        flex-basis: 300px;
        text-align: left;
    }


    
</style>