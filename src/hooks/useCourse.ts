import { useQuery } from "@tanstack/react-query";
import { fetchCourseById } from "../api/courses";
import type { Course } from "../types/course";

export const useCourse = (id: string) => {
  return useQuery<Course, Error>({
    queryKey: ["course", id],
    queryFn: () => fetchCourseById(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
};