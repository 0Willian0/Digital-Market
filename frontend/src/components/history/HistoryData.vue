<template>
    <div class="history-item">
        <router-link :to="{name: 'historyProducts', params:{dateBuyed: new Date(history.dateBuyed).toLocaleDateString() } }">
            <div class="history-item-info">
                <h2>{{new Date(history.dateBuyed).toLocaleDateString()}}</h2>
            </div> 
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'ProductItem',
    props: ['history'],
    computed: mapState(['user']),
    methods: {

    }
}
</script>

<style>

    .history-item{
        display: flex;
        flex-direction: row;
        border-radius: 8px;
        margin-bottom: 20px;
        margin-right: 20px;
        background-color: #FFF;
        padding: 30px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }

    .history-item-info h2{
        font-size: 1.7rem;
    }

    .history-item-info{
        display: flex;
        align-self: stretch;
        flex-direction: column;
    }

    .history-item-info p{
        flex: 1;
        color: #555;
        font-size: 1.1rem;
    }


</style>