import axios, { AxiosResponse } from "axios";
import { FormFields } from "../components/Feedback";

export const postFeedback = (body: FormFields) => {
  return axios.post<unknown, AxiosResponse<{ status: "ok" | "not_ok" }>>(
    "http://localhost:3000/",
    body
  );
};
