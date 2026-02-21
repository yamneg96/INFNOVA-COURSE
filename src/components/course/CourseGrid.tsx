import type { Course } from '../../types/course';
import CourseCard from './CourseCard';

interface Props {
  courses: Course[];
}

export default function CourseGrid({ courses }: Props) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}