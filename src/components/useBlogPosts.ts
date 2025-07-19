import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBlogPosts = () => {
  return useQuery({
    queryKey: "blogPosts", // Unique identifier for the query
    queryFn: async () => {
      const response = await axios.get(
        "https://blogsbackend.spikecode.net/api/blog/get-all"
      );
      return response.data.blogs;
    },
  });
};

export default useBlogPosts;
