<template>
    <div class="history">
        <PageTitle icon="fa fa-history"
            main="Historico"/>
        <ul>
            <li v-for="history in histories" :key="history.id">
                <HistoryData :history="history"/>
            </li>
        </ul>
    </div>
</template>

<script>
import {baseApiUrl} from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle.vue'
import {mapState} from 'vuex'
import HistoryData from './HistoryData.vue'

export default {
    name: 'History',
    computed: mapState(['user']),
    components: {PageTitle, HistoryData},
    data: function(){
        return{
            histories: [],
        }
    },
    methods: {
        getHistory(){
             const url = `${baseApiUrl}/history/${this.user.id}`
            axios(url).then(res=>{
                this.histories = res.data
            })
        },
    },
    mounted(){
        this.getHistory()
    }
}
</script>

<style>
    .history ul{
        display: flex;
        flex-direction: row;
        list-style: none;
        flex-wrap: wrap;
        gap: 10px;
        padding: 0px;
        justify-content: left;
    }

    .history li{
        flex-basis: 300px;
        text-align: left;
    }

</style>