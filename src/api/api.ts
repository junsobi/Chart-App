import axios from "axios";
import { MockData } from "../types/api.types";

export async function fetchMockData() {
  try {
    const response = await axios.get<MockData>("/data/mock_data.json");
    return response.data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error;
  }
}
