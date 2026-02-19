import React from 'react';
import { Search, Clock, Users, Star, ChevronDown } from 'lucide-react';
import { useCourses } from '../hooks/useCourses';
import CourseGrid from '../components/course/CourseGrid';
import { Skeleton } from '../components/ui/Skeleton';
import { ErrorState } from '../components/ui/ErrorState';

export default function CoursesPage() {
  const { data: courses, isLoading, isError } = useCourses();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <header className="bg-orange-600 text-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-lg opacity-90 max-w-2xl leading-relaxed">
            Master new skills with expert-led courses designed for the modern learner. 
            Start your learning journey today with INFNOVA Academy.
          </p>
        </div>
      </header>
      {/* Filters & Search */}
      <section className="max-w-6xl mx-auto px-8 -mt-8">
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4 border">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search courses, instructors..." 
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            />
          </div>
          <button className="px-4 py-2 border rounded-md text-slate-600 flex items-center justify-between min-w-[150px]">
            Category <ChevronDown className="w-4 h-4 ml-2" />
          </button>
          <button className="px-4 py-2 border rounded-md text-slate-600 flex items-center justify-between min-w-[150px]">
            Level <ChevronDown className="w-4 h-4 ml-2" />
          </button>
        </div>
        <p className="mt-6 text-slate-500 text-sm">Showing <b>{courses ? courses.length : 0}</b> of <b>{courses ? courses.length : 0}</b> courses</p>
      </section>
      {/* Course Grid */}
      <main className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading && (
          [...Array(6)].map((_, i) => <Skeleton key={i} className="h-64 w-full" />)
        )}
        {isError && <ErrorState message="Failed to load courses." />}
        {courses && <CourseGrid courses={courses} />}
      </main>
    </div>
  );
}