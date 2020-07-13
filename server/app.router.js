const router = require('express').Router();
const Search = require("./app.model");



// Create
router.post('/create', async (req, res) => {
    const {item} = req.body;
    //save wallet data
    const search = new Search({
        item:req.body.item
    })

    try{
        const savedSearch = await search.save();
        res.send({item_id:savedSearch._id});
    }catch(err){
        res.status(400).send(err)
    }

})

// lists of wallet
router.get('/list/:item', async (req, res) => {
    
    try{
	const item = req.params.item;
	//console.log(item)	
        const listItem = await Search.find({ item: {$regex : "^" + req.params.item}});
	console.log(listItem)
        res.send(listItem);
    }catch(err){
        res.status(400).send(err);
    }
});


module.exports = router;
