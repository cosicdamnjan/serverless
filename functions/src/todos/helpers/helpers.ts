import { CreateDoRequest, Comment } from "../models/models";

export const createToDoRequest = (todo: CreateDoRequest): Comment => {
  return { ...todo, date: Date.now().toString() };
};