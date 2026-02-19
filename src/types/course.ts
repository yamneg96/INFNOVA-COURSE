export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  instructor: string;
  level?: string;
  duration?: string;
  thumbnail: string;
  skills?: string[];
  enrolled: number;
  rating: number;
  category: string;
}