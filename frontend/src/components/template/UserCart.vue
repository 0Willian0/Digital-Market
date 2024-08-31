<template>
    <div class="user-cart">
            <router-link to="/cart">
                <i class="fa fa-shopping-cart"></i> Carrinho
            </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name:'UserCart',
    computed: mapState(['user'])
}
</script>

<style>

    .user-cart{
        position: relative;
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 100;
        height: 100%;
    }

    .user-cart:hover{
        background-color: rgba(0, 0, 0, 0.2);
    }   

    .user-cart a{
        padding: 15px;
        color: #FFF;
    }

    .user-cart a:hover{
        text-decoration: none;
        color: #FFF;
    }
</style>