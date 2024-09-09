<template>
    <div class="history-products">
        <PageTitle icon="fa fa-history" :main="this.$route.params.dateBuyed"/>
        <ul>
            <li v-for="product in products" :key="product.id">
                <HistoryItem :product="product"/>
            </li>
        </ul>
        <h2>
            Total Gasto: R${{this.price.totalPrice}}
        </h2>
    </div>
    
</template>

<script>

import PageTitle from '../template/PageTitle.vue'
import HistoryItem from './HistoryItem.vue'
import axios from 'axios'
import {baseApiUrl} from '@/global'
import {mapState} from 'vuex'

export default {
    name: 'HistoryProducts',
    components: {PageTitle, HistoryItem},
    computed: mapState(['user']),
    data: function(){
        return{
            products: {},
            price: 0
        }
    },
    methods:{
        getProducts(){
            const url = `${baseApiUrl}/history`
            axios.get(url,{ params:{ dateBuyed: this.$route.params.dateBuyed,
                                     userId: this.user.id
            }}).then(res=>{
                this.products = res.data
            })
        },
        getTotalPrice(){
            const url = `${baseApiUrl}/historyProducts`
            axios.get(url,{params:{ dateBuyed: this.$route.params.dateBuyed,
                                     userId: this.user.id
            }}).then(res=>{
                this.price = res.data
            })
        }
    },
    mounted(){
        this.getProducts()
        this.getTotalPrice()
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