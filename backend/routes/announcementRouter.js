import express from "express";
<<<<<<< HEAD
<<<<<<< HEAD
import { getAllAnnouncements, createAnnouncement } from "../controllers/announcementController.js";
=======
import { getAllAnnouncements, createAnnouncement } from "../controllers/announcementConroller.js";
>>>>>>> 867d8c3 (Announcemnt done + schema done)
=======
import { getAllAnnouncements, createAnnouncement } from "../controllers/announcementController.js";
>>>>>>> 549c5bf (Admin authentication added)

const router = express.Router();

router.get('/getall', getAllAnnouncements);
router.post('/', createAnnouncement);


export default router; 


