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
            const rowsDeleted = await app.db('carts')
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

    const get = (req, res)=>{
        app.db('carts')
        .select('id', 'carts_id')
        .then(cart => res.json(cart)
        )
        .catch(err=> res.status(500).send(err))
    }

    const getById = (req, res)=>{
        app.db('carts')
        .where({id:req.params.id})
        .first()
        .then(cart => res.json(cart)
        )
        .catch(err=> res.status(500).send(err))
    }

    const getByItems = async(req, res)=>{
        const itemId = req.params.id
        const categories = await app.db.raw(queries.categoryWithChildren, categoryId)
        const ids = categories.rows.map(c=>c.id)

        app.db({p: 'products'})
        .select('p.id', 'p.name', 'p.price', 'p.imageUrl')
        .limit(limit).offset(page * limit - limit)
        .whereIn('categoryId', ids)
        .orderBy('p.id', 'desc')
        .then(products => res.json(products))
        .catch(err => res.status(500).send(err))
    }

    //return {save, remove, get, getById, getByItems, getAll}
}