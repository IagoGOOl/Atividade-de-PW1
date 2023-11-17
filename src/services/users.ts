import { User } from "../@types/User";
import { db } from "../db";

const userDB = db.user;

export const serviceCreateUser = ({ name, username }: User) => {
    const data = { name, username };
    const user = userDB.create({ data });
    return user;
};

export const serviceGetUser = (id: string) => {
    return userDB.findUnique({
        where: { id },
    });
};

export const serviceGetUserForUsername = (username: string) => {
    return userDB.findUnique({
        where: { username },
    });
};

export const serviceUpdateUser = (id: string, data: User) => {
    userDB.update({
        where: { id },
        data,
    });
};

export const serviceDeleteUser = (id: string) => {
    userDB.delete({
        where: { id },
    });
};
