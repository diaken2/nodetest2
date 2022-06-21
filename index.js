let express=require("express")
let path=require("path")
let app=express()
let fs=require("fs")
let body=require("body-parser")

let PORT=process.env.PORT || 80
app.set('view engine','ejs')
app.set("views", path.resolve(__dirname,"ejs"))
app.listen(PORT,()=>{
    console.log("Server has been launched!")
})
app.get("/",(req,res)=>{
    res.render("index",{text:"Konbanwa!"})
})

app.use('/form', body.urlencoded({
    extended: true
}));
app.post('/form', function(req, res, next) {
    // Объект req.body содержит данные из переданной формы
    console.dir(req.body);
    // fs.appendFile(path.join(__dirname,"index.js"),'\nconsole.log("hello")',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     else{
    //         console.log("Успешно")
    //     }
    // })
    filePath=path.join(__dirname,"ejs",req.body.folder_name+".ejs")
    fs.writeFile(filePath,req.body.text,(err)=>{
   if(err){
       throw err
   }
   else{
       console.log("файл успешно создан")
       fs.appendFile(path.join(__dirname,"index.js"),`\napp.get("/${req.body.folder_name}",(req,res)=>{
        res.render("${req.body.folder_name}")
    })`,(err)=>{
        if(err){
            throw err
        }
        else{
            console.log("Успешно")
        }
    })
   }
    })
})

app.get("/uma1",(req,res)=>{
        res.render("uma1")
    })
app.get("/uma1",(req,res)=>{
        res.render("uma1")
    })
app.get("/uma2",(req,res)=>{
        res.render("uma2")
    })
app.get("/uma3",(req,res)=>{
        res.render("uma3")
    })
app.get("/uma3",(req,res)=>{
        res.render("uma3")
    })
app.get("/uma7",(req,res)=>{
        res.render("uma7")
    })
app.get("/sd",(req,res)=>{
        res.render("sd")
    })