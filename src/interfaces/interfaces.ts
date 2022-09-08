import { users, credentials, safenotes } from "@prisma/client";

export type IuserAthenticationData = Omit<users, 'id' | 'created_at'>

export type typeAuthentication = 'signin' | 'signup';

export type credentialsToInsert = Omit<credentials, 'id'>;

export type safenoteToInsert = Omit<safenotes, 'id'>;
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