const { createUserWithEmailAndPassword, signInWithPopup, signOut } = require("firebase/auth");
const { auth} = require("../config/firebase.js");

// const admin = require("firebase-admin")
// const credentials = require("../friendify-b1bea-firebase-adminsdk-aqu5z-c17925718e.json");

// admin.initializeApp({
//     credential: admin.credential.cert(credentials)
// });

// const messaging = admin.messaging();

exports.createUserWithPassword = async (req,res) =>{
    try{
        // console.log(req.body.email, req.body.password);
        const userResponse = await createUserWithEmailAndPassword(auth, 
            req.body.email, req.body.password);
            // console.log("user creation with email and password ",userResponse);
            
            return res.status(200).json({
                success:true,
                message: "User created",
                userResponse,
            });
        }
        catch(err){
            console.error(err);
            return res.status(401).json({
                success:false,
                err: err.code,
                message: err.message,
            });
        }
        
    }
    
    // exports.createUserWithGoogle = async (req,res)=>{
    //     try{
    //         const userResponse = await signInWithPopup(auth, googleProvider);
    //         // console.log(auth.currentUser);
    //         console.log("sign in with google ", userResponse);
    //         return res.status(200).json({
    //             success:true,
    //             message: "User created",
    //             userResponse,
    //         })
    //     }
    //     catch(err){
    //         console.error(err);
    //         return res.status(401).json({
    //             success:false,
    //             message: err.message,
    //         });
    //     }
    // }
    
    // exports.getUserById = async (req,res)=>{
    //     try{
    //         const uid = req.params.id;
    //         const userRecord = await admin.auth().getUser(uid);
    //         console.log(userRecord);
    //         return res.status(200).json({
    //             success:true,
    //             message: "User Found",
    //             userRecord,
    //         })
    //     }catch(err){
    //         console.error(err);
    //         res.error(err.message);
    //         return res.status(401).json({
    //             success:false,
    //             message: err.message,
    //         });
    //     }
    // }
    
    // exports.getUserByEmail = async (req,res)=>{
    //     try{
    //         const uid = req.params.email;
    //         const userRecord = await admin.auth().getUserByEmail(uid);
    //         console.log(userRecord);
    //         return res.status(200).json({
    //             success:true,
    //             message: "User Found",
    //             userRecord,
    //         })
    //     }catch(err){
    //         console.error(err);
    //         res.error(err.message);
    //         return res.status(401).json({
    //             success:false,
    //             message: err.message,
    //         });
    //     }
    // }
    
    // exports.getAllUsers = async (req,res)=>{
    //     try{
            
    //         const userResponse = await admin.auth().listUsers();
    //         console.log(userResponse);
    //         return res.status(200).json({
    //             success: true,
    //             message: "All user found",
    //             userResponse,
    //         });
    //     }catch(err){
    //         console.error(err);
    //         return res.status(401).json({
    //             success:false,
    //             message: err.message,
    //         });
            
    //     }
    // }
    

    // exports.logout = async (req, res)=>{
    //     try{
    //         const userResponse = await signOut(auth);
    //         console.log("log out ",userResponse);
    //         return res.status(200).json({
    //             success: true,
    //             message: "All user found",
    //             userResponse,
    //         }); 
    //     }
    //     catch(err){
    //         console.log(err);
    //         return res.status(401).json({
    //             success:false,
    //             message: err.message,
    //         });
    //     }
    // }
    
    // module.exports = messaging;