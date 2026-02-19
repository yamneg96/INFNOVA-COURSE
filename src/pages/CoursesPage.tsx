import React from 'react';
import { useCourses } from '../hooks/useCourses';
import CourseGrid from '../components/course/CourseGrid';
import { Skeleton } from '../components/ui/Skeleton';
import { ErrorState } from '../components/ui/ErrorState';

export default function CoursesPage() {
  const { data, isLoading, isError } = useCourses();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-64 w-full" />
        ))}
      </div>
    );
  }

  if (isError) {
    return <ErrorState message="Failed to load courses." />;
  }

  return <CourseGrid courses={data || []} />;
}