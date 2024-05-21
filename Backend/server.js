import express from "express";
import dotenv from "dotenv";
import "./passport/github.auth.js"
import passport from "passport";
import session from "express-session";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.routes.js";
// import cookieParser from "cookie-parser";
import exploreRoutes from "./routes/explore.route.js";
import path from "path"
// import cors from "cors";
import connectMongoDB from "./db/connectMongoDB.js";
dotenv.config();
const app=   express();
const PORT=process.env.PORT || 5000 ;
const __dirname=path.resolve();
// app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());
// app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoutes);
app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});
    app.listen(PORT,()=>{
        console.log(`Server Started on http://localhost:${PORT}`);
        connectMongoDB();
    })

    // sample