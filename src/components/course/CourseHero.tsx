import React from 'react';
import type { Course } from '../../types/course';

interface Props {
  course: Course;
}

export default function CourseHero({ course }: Props) {
  return (
    <section className="flex flex-col lg:flex-row gap-8 items-center lg:items-start py-8">
      <img src={course.thumbnail} alt={course.title} className="w-full max-w-lg rounded-xl shadow-lg object-cover aspect-[16/9]" loading="lazy" />
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold leading-tight">{course.title}</h1>
        <p className="text-gray-600 text-lg">{course.description}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">{course.instructor}</span>
        </div>
        <span className="text-orange-500 font-semibold">{course.category}</span>
        <span className="text-xs text-gray-500">{course.level} &bull; {course.duration}</span>
      </div>
    </section>
  );
}