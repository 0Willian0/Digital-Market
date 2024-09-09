<template>
    <div class="history-data">
        <router-link :to="{name: 'historyProducts', params:{dateBuyed: new Date(history.dateBuyed).toLocaleDateString() } }">
            <div class="history-item-info">
                <h2>{{new Date(history.dateBuyed).toLocaleDateString()}}</h2>
            </div> 
        </router-link>
        <div class="total-value">
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'


export default {
    name: 'ProductItem',
    props: ['history'],
    computed: mapState(['user']),
    methods: {

    }
}
</script>

<style>

    .history-data{
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

    .history-data:hover{
        background-color: rgba(0,0,0,0.2);
    }

    .history-data-info h2{
        font-size: 1.7rem;
    }

    .history-data-info{
        display: flex;
        align-self: stretch;
        flex-direction: column;
    }

    .history-data-info p{
        flex: 1;
        color: #555;
        font-size: 1.1rem;
    }

    .history-data a{
        text-decoration: none;
        color: #000;
    }




</style>