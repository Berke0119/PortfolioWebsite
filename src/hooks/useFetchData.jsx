import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (language) => {
  const response = await axios.get("/api/data", {
    params: { lang: language },
  });
  return response.data;
};

export const useFetchData = (language) => {
  return useQuery({
    queryKey: ["data", language],
    queryFn: () => fetchData(language),
    staleTime: 1000 * 60 * 5,
  });
};
