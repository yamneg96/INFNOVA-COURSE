import type { Course } from '../../types/course';
import CourseCard from './CourseCard';

interface Props {
  courses: Course[];
}

export default function CourseGrid({ courses }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}