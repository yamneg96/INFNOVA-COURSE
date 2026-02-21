import { Clock, Users, Star } from 'lucide-react';
import { Link } from "react-router-dom";
import type { Course } from "../../types/course";
import { motion } from "framer-motion";

interface Props {
  course: Course;
}

const LEVEL_COLORS: Record<string, string> = {
  "Beginner": "bg-green-100 text-green-600",
  "Intermediate": "bg-blue-100 text-blue-600",
  "Advanced": "bg-purple-100 text-purple-600",
};

export default function CourseCard({ course }: Props) {
  const displayLevel = course.level || "Beginner";
  const levelClass = LEVEL_COLORS[displayLevel] || "bg-slate-100 text-slate-600";

  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition group"
    >
      <Link 
        to={`/courses/${course.id}`} 
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
            loading="lazy" 
          />
          
          {course.level && (
            <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] ${levelClass} bg-white/90 backdrop-blur-sm`}>
              {course.level}
            </span>
          )}
        </div>
        
        <div className="p-6">
          <span className="text-orange-600 text-[10px] font-bold tracking-widest uppercase">
            {course.category}
          </span>
          <h3 className="text-lg font-bold mt-2 leading-tight min-h-[3.5rem]">
            {course.title}
          </h3>
          <p className="text-slate-500 text-sm mt-2">
            Instructor: <span className="text-slate-700">{course.instructor}</span>
          </p>

          <div className="flex items-center justify-between mt-6 pt-4 border-t text-slate-500 text-xs">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {course.duration || "Self-paced"}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" /> {course.enrolled?.toLocaleString() || 0}
            </div>
            <div className="flex items-center gap-1 text-slate-700 font-bold">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> {course.rating}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}