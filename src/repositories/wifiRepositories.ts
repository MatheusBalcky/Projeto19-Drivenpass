import prisma from "../database/database";
import { wifiToInsert } from "../interfaces/interfaces";


export async function insertWifi(wifiToInsert: wifiToInsert) {
    return await prisma.wifis.create({data: wifiToInsert});
}

export async function getOneWifiById(wifiId: number) {
    return await prisma.wifis.findUnique({where: { id: wifiId}});
}

export async function getAllWifisByUserId(userId: number) {
    return await prisma.wifis.findMany({where: { user_id: userId}});
}

export async function deleteWifi(wifiId: number) {
    return await prisma.wifis.delete({ where: { id: wifiId}});
}