import { Router } from "express";
import controller from "./userController"; // imported the default import with controller name

const userRoute = Router();

// GET
userRoute.get("/", controller.getUsers);
userRoute.get("/me", controller.getMe); // /me must be above id , otherwise it won't work
userRoute.get("/:id", controller.getUserById);

// POST
userRoute.post("/", controller.createNewUser);

//PUT
userRoute.put("/:id", controller.updateUser);

//Delete
userRoute.delete("/me", controller.deleteMe);
userRoute.delete("/:id", controller.deleteById);

export default userRoute;
