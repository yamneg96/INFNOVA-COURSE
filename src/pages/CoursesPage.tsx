import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCourses } from '../hooks/useCourses';
import CourseGrid from '../components/course/CourseGrid';
import { Skeleton } from '../components/ui/Skeleton';
import { ErrorState } from '../components/ui/ErrorState';

export default function CoursesPage() {
  const { data: courses, isLoading, isError } = useCourses();

  // State for search, category, and level
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  // 1. Derived unique categories and levels from API data
  const categories = useMemo(() => {
    if (!courses) return [];
    return Array.from(new Set(courses.map(c => c.category).filter(Boolean))).sort();
  }, [courses]);

  const levels = useMemo(() => {
    if (!courses) return [];
    return Array.from(new Set(courses.map(c => c.level).filter(Boolean))).sort();
  }, [courses]);

  // 2. Optimized Filtering Logic
  const filteredCourses = useMemo(() => {
    if (!courses) return [];

    const searchLower = search.trim().toLowerCase();

    return courses.filter(course => {
      // Filter by category (Exact match)
      const matchesCategory = !category || course.category === category;
      
      // Filter by level (Exact match)
      const matchesLevel = !level || course.level === level;
      
      // Search by title or instructor (Includes match)
      const matchesSearch = !searchLower || 
        course.title.toLowerCase().includes(searchLower) || 
        course.instructor.toLowerCase().includes(searchLower);

      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [courses, category, level, search]);

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setLevel("");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#FF6900] to-[#F54900] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Courses</h1>
            <p className="text-lg opacity-90 max-w-2xl leading-relaxed">
              Master new skills with expert-led courses designed for the modern learner. 
              Start your learning journey today with INFNOVA Academy.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Filters & Search - Floating Card */}
      <section className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="bg-white p-4 rounded-xl shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-4 mt-4">
          {/* Search Input */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search courses, instructors..."
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
            />
          </div>

          {/* Category Dropdown */}
          <select
            className="px-4 py-2.5 border border-slate-200 rounded-lg text-slate-600 bg-white cursor-pointer hover:border-orange-300 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* Level Dropdown */}
          <select
            className="px-4 py-2.5 border border-slate-200 rounded-lg text-slate-600 bg-white cursor-pointer hover:border-orange-300 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            value={level}
            onChange={e => setLevel(e.target.value)}
          >
            <option value="">All Levels</option>
            {levels.map(lvl => (
              <option key={lvl} value={lvl}>{lvl}</option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-slate-500 text-sm">
            Showing <b>{filteredCourses.length}</b> of <b>{courses?.length || 0}</b> courses
          </p>
          {(search || category || level) && (
            <button 
              onClick={clearFilters}
              className="text-orange-600 text-sm font-semibold hover:text-orange-700 underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Error Handling */}
        <AnimatePresence>
          {isError && <ErrorState message="Failed to fetch courses. Please check your connection." />}
        </AnimatePresence>

        {/* Loading State - Grid matching CourseGrid */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-xl" />
                <Skeleton className="h-6 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-1/2 rounded-md" />
              </div>
            ))}
          </div>
        )}

        {/* Empty Results State */}
        {!isLoading && !isError && filteredCourses.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200"
          >
            <div className="text-slate-400 mb-4 flex justify-center">
              <Search size={48} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">No courses found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your search or filters to find what you're looking for.</p>
          </motion.div>
        )}

        {/* Course Grid */}
        {!isLoading && !isError && courses && (
          <CourseGrid courses={filteredCourses} />
        )}
      </main>
    </div>
  );
}