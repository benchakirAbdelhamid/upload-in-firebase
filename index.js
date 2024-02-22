// const express = require('express')
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const app = express()
// require("dotenv").config();

// const multer = require('multer')
// const firebase = require('firebase/app')
// const {getStorage , ref , uploadBytes ,getDownloadURL} = require('firebase/storage')

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAHWXg4IaYbcP5GFvMsCpRBINowYbWPlNY",
//   authDomain: "firbaseupload-875a4.firebaseapp.com",
//   projectId: "firbaseupload-875a4",
//   storageBucket: "firbaseupload-875a4.appspot.com",
//   messagingSenderId: "857578320530",
//   appId: "1:857578320530:web:1bec2b8ce154fd0bad6c4b"
// };
// firebase.initializeApp(firebaseConfig)
// const storage = getStorage()

// const upload = multer({Storage : multer.memoryStorage()})

// //Middlewares ==>json body
// app.use(bodyParser.json());

// async function startServer() {
//     // try {
//     //   await mongoose.connect(process.env.DATABASE, { dbName: "DBimages" });
//     //   console.log("Successfully connected to MongoDB");
//     // } catch (err) {
//     //   console.error("Failed to connect to MongoDB:", err);
//     //   return;
//     // }

//     const port = process.env.PORT || 5005;
//     app.listen(port, () => console.log(`App is running on port ${port}`));
//   }

//   startServer();

// app.get('/',(req , res)=>{
//     res.json('Firebase storage in cloud')
// })

// app.post('/',upload.single('filename'),async(req, res)=>{
//   // const storageRef = ref(storage,req.file.originalname);
//   const storageRef = ref(storage,`files/${req.file.originalname}`);

//   uploadBytes(storageRef , req.file.buffer).then(async(snapshot)=>{
//     const imageURL = await getDownloadURL(storageRef);
//     console.log('file uploaded')
//     console.log('Image URL:', imageURL);
//   })

//     // console.log('===> ',req.file)
// })

// // // ===============stock image in firebase and show code binary image=================

// const express = require('express')
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const app = express()
// require("dotenv").config();

// const multer = require('multer')
// const firebase = require('firebase/app')
// const {getStorage , uploadBytesResumable , ref , uploadBytes ,getDownloadURL } = require('firebase/storage')

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBwZXW6-8xzDNrzKLT3e_wPBY6-Qw2-Cpc",
//   authDomain: "upload-files-7e3b2.firebaseapp.com",
//   projectId: "upload-files-7e3b2",
//   storageBucket: "upload-files-7e3b2.appspot.com",
//   messagingSenderId: "1018741061383",
//   appId: "1:1018741061383:web:0f2f80e12a0178a3acf7a2"
// };
// firebase.initializeApp(firebaseConfig)
// const storage = getStorage()

// const upload = multer({Storage : multer.memoryStorage()})

// //Middlewares ==>json body
// app.use(bodyParser.json());

// async function startServer() {
//     // try {
//     //   await mongoose.connect(process.env.DATABASE, { dbName: "DBimages" });
//     //   console.log("Successfully connected to MongoDB");
//     // } catch (err) {
//     //   console.error("Failed to connect to MongoDB:", err);
//     //   return;
//     // }

//     const port = process.env.PORT || 5005;
//     app.listen(port, () => console.log(`App is running on port ${port}`));
//   }

//   startServer();

// app.get('/',(req , res)=>{
//     res.json('Firebase storage in cloud')
// })

// app.post('/',upload.single('filename'),async(req, res)=>{
//   try {
//     const infoimg = req.file
//     const storageRef = ref(storage, `files/${req.file.originalname}`);
//     await uploadBytes(storageRef, req.file.buffer);
//     const imageURL = await getDownloadURL(storageRef);
//     res.json({ message : 'File uploaded' ,
//     imageURL ,
//      infoimg  });
//   } catch (error) {
//     console.error('Error uploading file to Firebase Storage:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// })

// ==========================================

// // ======1=========stock image in firebase and show code binary image=================

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const app = express();
// require("dotenv").config();

// const multer = require("multer");
// const firebase = require("firebase/app");
// const {
//   getStorage,
//   uploadBytesResumable,
//   ref,
//   uploadBytes,
//   getDownloadURL,
// } = require("firebase/storage");

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBwZXW6-8xzDNrzKLT3e_wPBY6-Qw2-Cpc",
//   authDomain: "upload-files-7e3b2.firebaseapp.com",
//   projectId: "upload-files-7e3b2",
//   storageBucket: "upload-files-7e3b2.appspot.com",
//   messagingSenderId: "1018741061383",
//   appId: "1:1018741061383:web:0f2f80e12a0178a3acf7a2",
// };
// firebase.initializeApp(firebaseConfig);
// const storage = getStorage();

// const upload = multer({ Storage: multer.memoryStorage() });

// //Middlewares ==>json body
// app.use(bodyParser.json());

// async function startServer() {
//   const port = process.env.PORT || 5005;
//   app.listen(port, () => console.log(`App is running on port ${port}`));
// }

// startServer();

// app.get("/", (req, res) => {
//   res.json("Firebase storage in cloud");
// });

// app.post("/", upload.single("filename"), async (req, res) => {
//   try {
//     const infoimg = req.file;
//     const storageRef = ref(storage, `images/${req.file.originalname}`);
//     await uploadBytes(storageRef, req.file.buffer);
//     const imageURL = await getDownloadURL(storageRef);
//     res.json({ message: "File uploaded", imageURL, infoimg });
//   } catch (error) {
//     console.error("Error uploading file to Firebase Storage:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });



// vedio youtube 1 = nice upload img in firebase and get url image from firebase

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const multer = require("multer");
const firebase = require("firebase/app");
const {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
  deleteObject
} = require("firebase/storage");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain ,
  projectId: process.env.projectId ,
  storageBucket: process.env.storageBucket ,
  messagingSenderId: process.env.messagingSenderId ,
  appId: process.env.appId  ,
};
firebase.initializeApp(firebaseConfig);


const upload = multer({ Storage: multer.memoryStorage() });

//Middlewares ==>json body
app.use(bodyParser.json());

async function startServer() {
  const port = process.env.PORT || 5005;
  app.listen(port, () => console.log(`App is running on port ${port}`));
}

startServer();

app.get("/", (req, res) => {
  res.json("Firebase storage in cloud");
});

app.post("/", upload.single("filename"), async (req, res) => {
  try {
    const storageFB = getStorage();
    const dateTime = giveCurrentDateTime() ;
    // const fileName = `images/${dateTime}`
    const fileName = `${req.file.originalname + "_" + dateTime}`
    const storageRef = ref(storageFB, `images/${fileName}`)
    // Create the metadata including the content type
    const metadata = {
        contentType: req.file.mimetype,
    }
    // Upload the file in the bucket storage
    const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
    // Grab the public url
    const downloadUrl = await getDownloadURL(snapshot.ref);
    res.json({ message: "File successfully uploaded",
    img_info : req.file,
    fileName :fileName,
    upload_Info : snapshot,
    url :downloadUrl });
  } catch (error) {
    console.error("Error uploading file to Firebase Storage:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const giveCurrentDateTime = ()=>{
  const today = new Date()
  const date = today.getFullYear() +"-"+ (today.getMonth()) + '-' + today.getDate();
  const time = today.getHours()+"-"+today.getMinutes()+"-"+today.getSeconds()
  const dateTime = date + '_' + time
  return dateTime;
}

app.delete('/images/:imageId',async(req ,res)=>{
  try {
    const imageId = req.params.imageId; // Get image ID from URL

    const storage = getStorage();
    const fileRef = ref(storage, `images/${imageId}`); // Reference to the file in Firebase Storage
    const deleted = await deleteObject(fileRef); // Delete the file
    res.json({message : 'deleted img',imageId})

  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})
