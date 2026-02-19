import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "../api/courses";
import type { Course } from "../types/course";

export const useCourses = () => {
  return useQuery<Course[], Error>({
    queryKey: ["courses"],
    queryFn: fetchCourses,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};