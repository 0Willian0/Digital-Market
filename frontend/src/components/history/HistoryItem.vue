<template>
    <div class="history-item">
            <div class="product-item-image d-none d-sm-block">
                <img v-if="product.imageUrl"
                    :src="product.imageUrl"
                    height="150" width="150" alt="Product">
                <img v-else
                    src="@/assets/product.png"
                    height="150" width="150" alt="Product">
            </div>
            <div class="product-item-info">
                <h2>{{product.name}}</h2>
                <p>R${{product.price}}</p>
                <p>Horario: {{formatTime(product.dateBuyed)}}</p>
            </div>
            
    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    name: 'ProductItem',
    props: ['product'],
    computed: mapState(['user']),
    methods:{
        formatTime(dateBuyed) {
      if (!dateBuyed) return '';  // Caso a data seja nula ou indefinida

      const date = new Date(dateBuyed);  // Converter o timestamp em um objeto Date
      // Converter para o horário de Brasília (GMT-3) e retornar apenas a hora
      return date.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    }
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

    .history-item-image{
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid #AAA;
    }

    .history-item-image img{
        border-radius: 10px;
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