import { IEvents } from "../types/IEvent";
import axios from "axios";
export const fetchEvent = async (): Promise<IEvents[]> => {
    const response = await axios.get("https://68acab60b996fea1c08a9849.mockapi.io/api/v1/events");
    if(!response) {
        throw new Error("failed to fetch events");
    };
    return response.data;
}