import React from 'react';
import { useParams } from 'react-router-dom';
import { useCourse } from '../hooks/useCourse';
import CourseHero from '../components/course/CourseHero';
import InstructorCard from '../components/course/InstructorCard';
import EnrollCard from '../components/course/EnrollCard';
import { Skeleton } from '../components/ui/Skeleton';
import { ErrorState } from '../components/ui/ErrorState';

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: course, isLoading, isError } = useCourse(id || '');

  if (isLoading) {
    return <Skeleton className="h-96 w-full" />;
  }

  if (isError || !course) {
    return <ErrorState message="Course not found." />;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 py-8">
      <div className="flex-1">
        <CourseHero course={course} />
        {/* InstructorCard expects an object, but API returns instructor as string. Show name only. */}
        <InstructorCard instructor={{ name: course.instructor, bio: '', avatar: '' }} />
      </div>
      <div className="w-full max-w-xs">
        <EnrollCard enrolled={!!course.enrolled} price={0} onEnroll={() => {}} />
      </div>
    </div>
  );
}