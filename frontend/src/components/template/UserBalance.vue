<template>
    <div class="user-balance">
        <span class="d-none d-sm-block fa fa-money fa-lg"> {{this.users.balance}}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name:'UserBalance',
    computed: mapState(['user']),
    data: function(){
        return{
            users: [],
        }
    },
    methods:{
        getBalance(){
            const url = `${baseApiUrl}/users/${this.user.id}`
            axios.get(url)
            .then(res=>{
                this.users = res.data
            })
        }

    },
    mounted(){
        this.getBalance()
    }
}
</script>

<style>
    .user-balance{
        position: relative;
        color:#FFF;
    }   
</style>