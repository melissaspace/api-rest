const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
       mensagem: 'Retorna todos os pedidos'
    });
 });

 // INSERE UM PEDIDO
 router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido inserido'
    });
 });

 // RETORNA OS DADOS DE UM PEDIDO
 router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id: id
         });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID'
        });
    }
 });

 // ALTERA UM PEDIDO
 router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido alterado'
    });
 });

 // EXCLUI UM PEDIDO
 router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluído'
    });
 });

 module.exports = router;