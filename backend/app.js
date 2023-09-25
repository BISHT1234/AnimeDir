let  express =require('express')
let cors=require('cors')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

let animemodel;
let array=[],aim,bot,mg
const connectdb=async()=>{
await mongoose.connect('mongodb://127.0.0.1:27017/AnimeDir',{useNewUrlParser:true})
console.log("connected")
const Animeschema=new mongoose.Schema({
    name:String,
    about:String,
    img:String
})
animemodel=mongoose.model("animecharaters",Animeschema)
arrayadd()
}
async function arrayadd(){
  
    await animemodel.find().then((item)=>{
        array=[]
        item.forEach(element => {
            array.push(element)
        });
    })
    
}

connectdb()
app.get('/getdata',async function(req,res){
 arrayadd()

    res.send(array)

})
app.post('/adddata',function(req,res){
    console.log(req.body.about)
    const charater=new animemodel({
        name:req.body.name,
        about:req.body.about,
        img:req.body.img
    })
    charater.save()
 array.push({
    name:req.body.name,
    about:req.body.about,
    img:req.body.img
 })
})
app.post('/getdata/:data',function(req,res){
    console.log(req.body.name)
})
app.post('/deletedata',function(req,res){
    animemodel.deleteOne({name:req.body.name}).then(()=>{
        console.log("data deleted")
     arrayadd()
    }).catch(err=>{
        console.log(err)
    })
    console.log(req.body.name)

})
// })
app.listen(4000)