import { users, credentials, safenotes, cards, wifis } from "@prisma/client";

export type IuserAthenticationData = Omit<users, 'id' | 'created_at'>;

export type typeAuthentication = 'signin' | 'signup';

export type credentialsToInsert = Omit<credentials, 'id'>;

export type safenoteToInsert = Omit<safenotes, 'id'>;

export type cardToInsert = Omit<cards, 'id' | 'user_id'>;

export type wifiData = Omit<wifis, 'id' | 'user_id'>;
export type wifiToInsert = Omit<wifis, 'id' >;



export interface credentialData {
    title: string;
    url: string;
    username: string;
    password: string;
}

export interface safenoteData{
    title: string;
    annotation: string;
}