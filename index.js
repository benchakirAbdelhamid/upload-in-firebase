const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
require("dotenv").config();
//Middlewares ==>json body
app.use(express.json())
// Middleware cors == link between back and front
app.use(cors())

const multer = require("multer");
const firebase = require("firebase/app");
const {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
  deleteObject,
  uploadBytes,
} = require("firebase/storage");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};
firebase.initializeApp(firebaseConfig);

const upload = multer({ Storage: multer.memoryStorage() });

//Middlewares ==>json body
app.use(bodyParser.json());

async function startServer() {
  //     // try {
//     //   await mongoose.connect(process.env.DATABASE, { dbName: "DBimages" });
//     //   console.log("Successfully connected to MongoDB");
//     // } catch (err) {
//     //   console.error("Failed to connect to MongoDB:", err);
//     //   return;
//     // }
  const port = process.env.PORT || 5005;
  app.listen(port, () => console.log(`App is running on port ${port}`));
}

startServer();

app.get("/", (req, res) => {
  res.json("Firebase storage in cloud");
});
const storage = getStorage();

// upload img in firebase
app.post("/", upload.single("photo"), async (req, res) => {
  try {
    const dateTime = giveCurrentDateTime();
    const fileName = `${req.file.originalname + "_" + dateTime}`;
    const storageRef = ref(storage, `images/${fileName}`);
    // // Create the metadata including the content type
    const metadata = {
      contentType: req.file.mimetype,
    };
    await uploadBytesResumable(storageRef, req.file.buffer, metadata)
    .then(
        () => {
          getDownloadURL(storageRef)
            .then((url) => {
              res.send({
                message: "Image successfully uploaded",
                url,
                fileName: fileName,
                img_info: req.file,
                req : req.body,
              });
            })
            .catch((err) => {
              res.status(500).send(err);
            });
        }
      );
  
  } catch (error) {
    console.error("Error uploading file to Firebase Storage:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const giveCurrentDateTime = () => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
  const time =
    today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
  const dateTime = date + "_" + time;
  return dateTime;
};

app.delete("/images/:imageId", async (req, res) => {
  try {
    const imageId = req.params.imageId; // Get image ID from URL
    const fileRef = ref(storage, `images/${imageId}`); // Reference to the file in Firebase Storage
    await deleteObject(fileRef) // Delete the file
    res.json({ message: "Image deleted successfully", imageId });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// upload video in firebase
app.post("/video", upload.single("video"), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).send("No File Uploaded");
      return;
    }
    const fileName = `${req.file.originalname}`
    const StorageRef = ref(storage, `video/${fileName}`);
    const metadata = {
      contentType: req.file.mimetype,
      // contentType: "video/mp4",
    };
    await uploadBytes(StorageRef, req.file.buffer, metadata).then(() => {
      getDownloadURL(StorageRef)
        .then((url) => {
          res.send({
            message: "video successfully uploaded",
            url,
            fileName,
            video_info: req.file.mimetype,
          });
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    });
    // res.json({ message: "upload video" });
  } catch (error) {}
});

app.delete("/video/:videoId", async (req, res) => {
  try {
    const videoId = req.params.videoId; // Get video ID from URL
    const fileRef = ref(storage, `video/${videoId}`); // Reference to the file in Firebase Storage
    await deleteObject(fileRef); // Delete the file
    res.json({ message: "deleted video", videoId });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// upload pdf

app.post("/pdf", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).send("No File Uploaded");
      return;
    }
    const fileName = `${req.file.originalname}`
    const StorageRef = ref(storage, `pdf/${fileName}`);
    const metadata = {
      contentType: req.file.mimetype,
      // contentType: "application/pdf",
    };
    await uploadBytes(StorageRef, req.file.buffer, metadata).then((snapshot) => {
      getDownloadURL(StorageRef)
        .then((url) => {
          res.send({
            message: "pdf successfully uploaded",
            url,
            snapshot,
            fileName,
            video_info: req.file.mimetype,
          });
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    });
    // res.json({ message: "upload video" });
  } catch (error) {}
});
app.delete("/pdf/:pdfId", async (req, res) => {
  try {
    const pdfId = req.params.pdfId; // Get video ID from URL
    const fileRef = ref(storage, `pdf/${pdfId}`); // Reference to the file in Firebase Storage
    await deleteObject(fileRef); // Delete the file
    res.json({ message: "deleted pdf", pdfId });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});