import { api } from './client';
import type { Course } from '../types/course';

export const fetchCourses = async (): Promise<Course[]> => {
  const { data } = await api.get('/courses');
  return data;
};

export const fetchCourseById = async (id: string): Promise<Course> => {
  const { data } = await api.get(`/courses/${id}`);
  return data;
};