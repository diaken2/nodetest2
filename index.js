let express=require("express")
let path=require("path")
let app=express()
let fs=require("fs")
let body=require("body-parser")

let PORT=process.env.PORT || 80

app.listen(PORT,()=>{
    console.log("Server has been launched!")
})
app.use(express.static(path.resolve(__dirname,"static")))

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
    filePath=path.join(__dirname,"static",req.body.folder_name+".html")
    fs.writeFile(filePath,req.body.text,(err)=>{
   if(err){
       throw err
   }
   else{
       console.log("файл успешно создан")
    //    fs.appendFile(path.join(__dirname,"index.js"),`\napp.get("/${req.body.folder_name}",(req,res)=>{
    //     res.render("${req.body.folder_name}")
    // })`,(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     else{
    //         console.log("Успешно")
    //     }
    // })
   }
    })
})

