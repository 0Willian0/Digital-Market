<template>
    <div class="history-products">
        <PageTitle icon="fa fa-history" :main="this.$route.params.dateBuyed"/>
        <ul>
            <li v-for="product in products" :key="product.id">
                <HistoryItem :product="product"/>
            </li>
        </ul>
    </div>
    
</template>

<script>

import PageTitle from '../template/PageTitle.vue'
import HistoryItem from './HistoryItem.vue'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'HistoryProducts',
    components: {PageTitle, HistoryItem},
    data: function(){
        return{
            products: {}
        }
    },
    methods:{
         getProducts(){
            const url = `${baseApiUrl}/history`
            axios.get(url,{ params:{ dateBuyed: this.$route.params.dateBuyed}}).then(res=>{
                this.products = res.data
            })
        },
    },
    mounted(){
        this.getProducts()
    }

}
</script>

<style>
    .history-products ul{
        display: flex;
        flex-direction: row;
        list-style: none;
        flex-wrap: wrap;
        gap: 10px;
        padding: 0px;
        justify-content: left;
    }

    .history-products li{
        flex-basis: 300px;
        text-align: left;
    }

    .history-products h3{
        text-align: center;
    }
</style>