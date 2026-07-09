import { axiosConfig } from "@/utils/axios/axios";

export async function loginService(phone_number: string) {
  const { data } = await axiosConfig("/account/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      phone_number,
    },
  });

  return data;
}