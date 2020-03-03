var express = require('express')
var router = express.Router()
var { DataStore } = require('notarealdb')
var store = new DataStore('./data')
var records = store.collection('records')

router.get('/', (req, res) => {
    res.json(records.list())
})

router.post('/',(req,res)=>{
    let data = req.body
    records.create(data)
    res.json(records.list())
})
router.delete('/:recordsId', (req, res) => {
    var recordsId = req.params.recordsId
    records.delete(recordsId)
    res.json(records.list())
})


module.exports = router