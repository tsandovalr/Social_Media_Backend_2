import {Router} from 'express';

const router = Router();

//User CRUD

//CREATE USER
router.post('/', (req,res)=> {
    res.status(501).json({error:'not implemented'});
});

//LIST USERS
router.get('/', (req,res) =>{
    res.status(501).json({error:'not implemented'});
});

//GET ONE USER
router.get('/:id', (req,res) =>{
    const {id} = req.params;
    res.status(501).json({error:`not implemented: ${id}`});
});

//UPDATE USER
router.put('/:id', (req,res) =>{
    const {id} = req.params;
    res.status(501).json({error:`not implemented: ${id}`});
});

//DELETE USER
router.delete('/:id', (req,res) =>{
    const {id} = req.params;
    res.status(501).json({error:`not implemented: ${id}`});
});

export default router;