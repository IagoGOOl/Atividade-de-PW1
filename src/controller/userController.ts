import { Request, Response } from "express";
import { serviceCreateUser, serviceGetUserForUsername } from "../services/users";

export const createUser = async (req: Request, res: Response) => {
    const { name, username } = req.body;

    const userExists = await serviceGetUserForUsername(username as string);

    if (!name || !username) {
        return res.status(400).json({ error: "Error: user exists" });
    }

    if (userExists) {
        return res.status(400).json({ error: "Error: user exists" });
    }

    const user = await serviceCreateUser({ name, username });

    return res.status(201).json(user);
};
