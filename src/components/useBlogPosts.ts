import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Posts = {
  id: string;
  date: string;
  images: { url: string };
  text: { en: string; ar: string };
  title: { en: string; ar: string };
};

const useBlogPosts = () => {
  return useQuery<Posts[]>({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      const response = await axios.get(
        "https://blogsbackend.spikecode.net/api/blog/get-all"
      );
      return response.data.blogs;
    },
  });
};

export default useBlogPosts;
