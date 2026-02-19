import { Link } from "react-router-dom";
import type { Course } from "../../types/course";
import { motion } from "framer-motion";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-200"
    >
      <Link
        to={`/courses/${course.id}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <img
          src={course.thumbnail}
          alt={course.title}
          className="aspect-[16/9] w-full object-cover"
          loading="lazy"
        />
        <div className="p-6 space-y-2">
          <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
            {course.category}
          </p>
          <h3 className="text-lg font-semibold leading-snug">
            {course.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{course.instructor}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{course.duration}</span>
            <span>⭐ {course.rating}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}