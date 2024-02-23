import request from "@/api/request";
import { mapUser } from "../mappers/mapUser";

export const fetchUser = async () => {
  const response = await request.get("/api");

  const user = response?.data?.results[0];

  return mapUser(user);
};
