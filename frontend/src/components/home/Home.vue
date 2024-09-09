<template>
    <div class="home">
        <PageTitleComponent icon="fa fa-home" main="Pagina Inicial"
        sub="Digital Market"/>
        <AllProducts/>

    </div>
    
</template>

<script>
import PageTitleComponent from '../template/PageTitle'
import AllProducts from './AllProducts.vue'
import Stat from './Stat'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'Home',
    components: {PageTitleComponent, Stat, AllProducts},
    data: function(){
        return{
            category: {},
            products: [],
            page: 1,
            loadMore: true
        }
    },

}
</script>

<style>

</style>