<template>
    <div class="admin-pages">
        <PageTitleComponent icon="fa -fa-cogs" 
        main="Administração do Sistema"
        sub="Cadastro & Cia"/>
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Produtos" active>
                        <ProductAdminComponent/>
                    </b-tab>
                    <b-tab title="Categorias">
                        <CategoryAdminComponent/>
                    </b-tab>
                    <b-tab title="Usuarios">
                        <UserAdminComponent/>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitleComponent from '../template/PageTitle'
import ProductAdminComponent from './ProductAdmin.vue'
import CategoryAdminComponent from './CategoryAdmin.vue'
import UserAdminComponent from './UserAdmin.vue'


export default {
    name:'AdminPages',
    components: {PageTitleComponent, 
    ProductAdminComponent,
    CategoryAdminComponent,
    UserAdminComponent}
}
</script>

<style>

</style>