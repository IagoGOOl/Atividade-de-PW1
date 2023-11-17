import { db } from "../db";
import { Technologie } from "../@types/Technologies";

const dbTec = db.technology;

export const serviceCreateTechnologies = ({
    title,
    userId,
    deadline,
}: Technologie) => {
    const data: Technologie = {
        title,
        userId,
        deadline: new Date(deadline),
        studied: false,
    };
    const tec = dbTec.create({ data });
    return tec;
};

export const serviceGetTechnologies = (id: string) => {
    return dbTec.findUnique({
        where: { id },
    });
};

export const serviceGetAllTechnologies = (userId: string) => {
    return dbTec.findMany({
        where: { userId },
    });
};

export const serviceUpdateTechnologies = (id: string, data: Technologie) => {
    if (data.deadline) {
        data.deadline = new Date(data.deadline);
    }
    return dbTec.update({
        where: { id },
        data,
    });
};

export const serviceDeleteTechnologies = (id: string) => {
    return dbTec.delete({
        where: { id },
    });
};
