import { users } from "@prisma/client";

export type IuserAthenticationData = Omit<users, 'id'>