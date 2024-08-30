const queries = require('./queries')

module.exports = app =>{
    const  {existsOrError, notExistsOrError} = app.api.validation

    const save = (req, res) =>{
        const cart = { ...req.body}
        if(req.params.id) cart.id = req.params.id

        if(cart.id){
            app.db('carts')
            .update(cart)
            .where({id: cart.id})
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
        }else{
            app.db('carts')
            .insert(cart)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res)=>{
        try{
            const rowsDeleted = await app.db('cart')
            .where({id: req.params.id}).del()
            
            try{
                existsOrError(rowsDeleted, 'Carrinho nao foi encontrado')
            }catch(msg){
                res.status(400).send(msg)
            }

            res.status(204).send()
        }catch(msg){
            res.status(500).send(msg)
        }
    }

    const getUserCart = async(req, res)=>{

        const userId = req.params.id; // ID do usuário passado na requisição

        app.db('carts as c')
        .select('p.id', 'p.name', 'p.imageUrl', 'p.price')
        .join('products as p', 'c.product_id', '=', 'p.id')
        .then(result => res.json(result))
        .catch(err => {
        console.error('Database query error:', err);
        res.status(500).send('An error occurred');
    });
    }


    return {save, remove, getUserCart}
}