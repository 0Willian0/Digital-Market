<template>
    <div class="product-item">
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
                <button class="btn btn-success fa fa-shopping-cart">
                 Comprar
                </button>
            </div>
            
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: ['product'],
}
</script>

<style>

    .product-item{
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

    .product-item-info h2{
        font-size: 1.7rem;
    }

    .product-item-image{
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid #AAA;
    }

    .product-item-image img{
        border-radius: 10px;
    }

    .product-item-info{
        display: flex;
        align-self: stretch;
        flex-direction: column;
    }

    .product-item-info p{
        flex: 1;
        color: #555;
        font-size: 1.1rem;
    }


</style>