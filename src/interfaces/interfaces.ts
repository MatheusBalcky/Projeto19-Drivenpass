import { users } from "@prisma/client";

export type IuserAthenticationData = Omit<users, 'id' | 'created_at'>

export type typeAuthentication = 'signin' | 'signup';