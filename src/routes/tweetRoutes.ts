import {Router} from 'express';

const router = Router();

//Tweet CRUD

//CREATE TWEET
router.post('/', (req,res)=> {
    res.status(501).json({error:'not implemented'});
});

//LIST TWEETS
router.get('/', (req,res) =>{
    res.status(501).json({error:'not implemented'});
});

//GET ONE TWEET
router.get('/:id', (req,res) =>{
    const {id} = req.params;
    res.status(501).json({error:`not implemented: ${id}`});
});

//UPDATE TWEET
router.put('/:id', (req,res) =>{
    const {id} = req.params;
    res.status(501).json({error:`not implemented: ${id}`});
});

//DELETE TWEET
router.delete('/:id', (req,res) =>{
    const {id} = req.params;
    res.status(501).json({error:`not implemented: ${id}`});
});

export default router;