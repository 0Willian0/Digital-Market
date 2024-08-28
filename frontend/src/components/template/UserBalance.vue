<template>
    <div class="user-balance">
        <span class="d-none d-sm-block fa fa-money fa-lg"> {{user.balance}}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name:'UserBalance',
    computed: mapState(['user'])
}
</script>

<style>
    .user-balance{
        position: relative;
        color:#FFF;
    }   
</style>