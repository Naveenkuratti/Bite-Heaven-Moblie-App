const express =require("express")

const app =express()
const PORT =5000
     

app.get("/",(req,res)=>{
    res.send("hello from root side")
})


app.get("/api",(req,res)=>{
    res.json({
           "employess":[
            {"name" :"naveen"}
            
           ]
    })
})


app.listen(PORT,()=>{
    console.log(`serve started  at port ${PORT}`)
})
