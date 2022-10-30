const app=require("./app");

const PORT=process.env.PORT || 3000
const connectDB=require(" ./config/db");

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})