const express = require("express");
const app = express();

const userRoutes = require("./routes/user");
require("dotenv").config();

const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 4000;

app.use(
    cors({
        origin: "*",
    })
);
app.use(
    express.urlencoded({ extended: true})
);

// middlewares
app.use(express.json());
app.use(cookieParser());

app.use("/api",userRoutes);

app.get("/", (req,res)=>{
    return res.json({
		success:true,
		message:'Your server is up and running....'
	});
})
app.listen(PORT, ()=>{
    console.log(`Server is up and running at port ${PORT}`);
})