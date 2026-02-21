import { useParams, useNavigate } from 'react-router-dom';
import { useCourse } from '../hooks/useCourse';
import { ArrowLeft, CheckCircle2, BookOpen, Clock, Users, Star, Shield, Smartphone, Download, Award, Infinity } from 'lucide-react';
import { Skeleton } from '../components/ui/Skeleton';
import { ErrorState } from '../components/ui/ErrorState';

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: course, isLoading, isError } = useCourse(id || '');

  if (isLoading) {
    return <Skeleton className="h-96 w-full" />;
  }

  if (isError || !course) {
    return <ErrorState message="Course not found." />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-8 py-4">
        <button onClick={() => navigate(-1)} className="cursor-pointer flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm transition font-medium">
          <ArrowLeft size={16} /> Back to Courses
        </button>
      </div>
      {/* Hero Header */}
      <header className="bg-orange-600 text-white py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="text-orange-200 text-xs font-bold tracking-widest uppercase">{course.category}</span>
            <h1 className="text-4xl font-bold mt-4 mb-4">{course.title}</h1>
            <p className="text-lg opacity-95 max-w-xl leading-relaxed mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-6 text-sm mb-6">
              <div className="flex items-center gap-2"><Award size={18} /> Instructor: <span className="font-bold">{course.instructor}</span></div>
              <div className="flex items-center gap-2"><Clock size={18} /> {course.duration}</div>
              <div className="flex items-center gap-2"><Users size={18} /> {course.enrolled} enrolled</div>
              <div className="flex items-center gap-2 text-yellow-300"><Star size={18} className="fill-current" /> {course.rating} rating</div>
            </div>
            <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold">
              {course.level} Level
            </span>
          </div>
          <div className="w-full md:w-1/3">
            <img 
              src={course.thumbnail} 
              alt={course.title} 
              className="rounded-xl shadow-2xl border-4 border-white/10"
            />
          </div>
        </div>
      </header>
      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-8 py-12 flex flex-col lg:flex-row gap-8">
        {/* Left Column: Details */}
        <div className="flex-1 space-y-8">
          {/* What You'll Learn */}
          {course.skills && course.skills.length > 0 && (
            <section className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                <BookOpen className="text-orange-600" size={20} /> What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {course.skills.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </section>
          )}
          {/* Course Description */}
          <section className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Course Description</h2>
            <div className="text-slate-600 space-y-4 text-sm leading-relaxed">
              <p>{course.description}</p>
            </div>
          </section>
          {/* Instructor Section */}
          <section className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Your Instructor</h2>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                {course.instructor.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-lg font-bold">{course.instructor}</h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  {/* Placeholder bio, replace with real data if available */}
                  Expert instructor with industry experience. Passionate about teaching and helping students achieve their career goals.
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* Right Column: Sidebar */}
        <aside className="lg:w-80">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg sticky top-8">
            <h2 className="text-2xl font-bold mb-1">Enroll Today</h2>
            <p className="text-slate-500 text-xs mb-6">Join {course.enrolled} students already enrolled</p>
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold text-sm mb-3 hover:bg-orange-700 transition">
              Enroll Now
            </button>
            <button className="w-full border border-orange-600 text-orange-600 py-3 rounded-lg font-bold text-sm hover:bg-orange-50 transition">
              Add to Wishlist
            </button>
            <div className="mt-8">
              <h4 className="font-bold text-sm mb-4">This course includes:</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-600 text-xs font-medium">
                  <CheckCircle2 size={14} className="text-green-500" /> {course.duration} of content
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-xs font-medium">
                  <Infinity size={14} className="text-green-500" /> Lifetime access
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-xs font-medium">
                  <Shield size={14} className="text-green-500" /> Certificate of completion
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-xs font-medium">
                  <Smartphone size={14} className="text-green-500" /> Access on mobile and desktop
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-xs font-medium">
                  <Download size={14} className="text-green-500" /> Downloadable resources
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}