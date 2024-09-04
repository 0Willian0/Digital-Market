<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        
        <h1 class="title" v-if="!hideUserDropdown">
            <router-link to="/">
            {{title}}
            </router-link>
        </h1>

        <h1 class="title" v-else>
            {{title}}
        </h1>
        <UserCart v-if="!hideUserDropdown"/>
        <UserBalanceComponent v-if="!hideUserDropdown"/>
        <UserDropdownComponent v-if="!hideUserDropdown"/>
    </header>
</template>

<script>
import UserBalanceComponent from './UserBalance.vue'
import UserDropdownComponent from './UserDropdown.vue'
import UserCart from './UserCart.vue'

export default {
    name: 'Header',
    components: {UserDropdownComponent,UserBalanceComponent, UserCart},
    props:{
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    computed: {
        icon(){
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
        }
    },
    methods: {
        toggleMenu(){
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .header{
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title{
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a{
        color: #fff;
        text-decoration: none; /*tira o efeito de link*/ 
    }

    .title:hover a{
        color: #fff;
        text-decoration: none; /*tira o efeito de link*/ 
    }
    
    header.header > a.toggle{
        width: 60px;
        height: 100%;
        color: #fff;
        justify-self: flex-start;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle:hover{
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
    }

</style>