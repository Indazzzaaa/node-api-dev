import { Request, Response } from "express";
import IUser from "./types.User";

let users: IUser[] = [
  {
    emailId: "user@email.com",
    username: "user_with_name",
    password: "user_with_hashed_pass",
    isVerified: false,
  },
];

type ControllerHandler = (req: Request, res: Response) => Promise<void>;

const userController: Record<string, ControllerHandler> = {
  // #region GET
  async getUsers(req, res) {
    res.json(users);
  },

  async getUserById(req, res) {
    // everything is string that comes from params
    const userId = parseInt(req.params.id);

    res.json({ id: userId, ...users[0] });
  },

  async getMe(req: Request, res: Response) {
    res.json({ id: "me", ...users[0] });
  },

  // #endregion GET

  //#region POST

  async createNewUser(req, res) {
    res.status(201).json({ id: 1, user: "New user", msg: "new user created" });
  },

  //#endregion POST

  //#region PUT

  async updateUser(req, res) {
    const userId = parseInt(req.params.id);
    res.status(204).json({ id: userId, msg: "updated" });
  },

  //#endregion PUT

  //#region DELETE

  async deleteMe(req, res) {
    res.json({ user: "me", msg: "deleted" });
  },

  async deleteById(req, res) {
    const userId = parseInt(req.params.id);

    res.json({ user: userId, msg: "deleted" });
  },

  //#endregion DELETE
};

export default userController;
