import { useParams, useNavigate } from 'react-router-dom';
import { useCourse } from '../hooks/useCourse';
import { 
  ArrowLeft, CheckCircle2, BookOpen, Clock, 
  Users, Star, Shield, Smartphone, Download, 
  Award, Infinity 
} from 'lucide-react';
import { Skeleton } from '../components/ui/Skeleton';
import { ErrorState } from '../components/ui/ErrorState';
import LevelBadge from '../components/ui/LevelColors';

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: course, isLoading, isError } = useCourse(id || '');

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-8 py-12">
        <Skeleton className="h-12 w-32 mb-8" />
        <Skeleton className="h-96 w-full rounded-2xl" />
      </div>
    );
  }

  if (isError || !course) {
    return <ErrorState message="Course not found." />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      {/* Back Button Navigation */}
      <div className="max-w-6xl mx-auto px-8 py-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm transition font-medium group cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Courses
        </button>
      </div>

      {/* Hero Header Section */}
      <header className="bg-[#FF6900] text-white py-16 px-8 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
          <div className="flex-1">
            <span className="text-orange-100/80 text-[10px] font-bold tracking-[0.2em] uppercase">
              {course.category}
            </span>
            <h1 className="text-5xl font-bold mt-4 mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-lg text-white/90 max-w-xl leading-relaxed mb-8">
              {course.description}
            </p>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm mb-10 text-white/90">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-orange-200" /> 
                Instructor: <span className="font-bold">{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-orange-200" /> {course.duration}
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-orange-200" /> {course.enrolled?.toLocaleString()} enrolled
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="fill-yellow-400 text-yellow-400 stroke-none" /> {course.rating} rating
              </div>
            </div>

            <LevelBadge level={course.level} variant="inline" />
          </div>

          <div className="w-full md:w-[42%] flex justify-end">
            <img 
              src={course.thumbnail} 
              alt={course.title} 
              className="rounded-2xl border-white/10 aspect-video object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-6xl mx-auto px-8 py-16 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Learning Materials */}
        <div className="flex-1 space-y-12">
          {/* What You'll Learn Section */}
          {course.skills && course.skills.length > 0 && (
            <section className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
                <BookOpen className="text-[#FF6900]" size={24} /> What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
                {course.skills.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Description Section */}
          <section className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Course Description</h2>
            <div className="text-slate-600 space-y-4 text-base leading-relaxed">
              <p>{course.description}</p>
            </div>
          </section>

          {/* Instructor Bio Section */}
          <section className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-8">Your Instructor</h2>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-[#FF6900] rounded-full flex items-center justify-center text-white font-bold text-2xl shrink-0 shadow-lg">
                {course.instructor.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-xl font-bold">{course.instructor}</h3>
                <p className="text-slate-500 mt-2 leading-relaxed max-w-lg">
                  Expert Cloud Computing professional with over 10 years of industry experience. 
                  Passionate about teaching and helping students achieve their career goals.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Enrollment Sidebar */}
        <aside className="lg:w-[360px]">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.05)] sticky top-8">
            <h2 className="text-3xl font-bold mb-2">Enroll Today</h2>
            <p className="text-slate-400 text-sm mb-8">Join {course.enrolled?.toLocaleString()} students already enrolled</p>
            
            <div className="space-y-4">
              <button className="w-full bg-[#FF6900] text-white py-4 rounded-xl font-bold text-base hover:bg-orange-700 transition-all shadow-lg shadow-orange-100 active:scale-[0.98] cursor-pointer">
                Enroll Now
              </button>
              <button className="w-full border-2 border-slate-100 text-slate-600 py-4 rounded-xl font-bold text-base hover:bg-slate-50 transition-all cursor-pointer">
                Add to Wishlist
              </button>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100">
              <h4 className="font-bold text-sm mb-6 uppercase tracking-wider text-slate-800">This course includes:</h4>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-slate-500 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-green-500" /> 
                  <span>{course.duration} of content</span>
                </li>
                <li className="flex items-center gap-4 text-slate-500 font-medium text-sm">
                  <Infinity size={18} className="text-green-500" /> 
                  <span>Lifetime access</span>
                </li>
                <li className="flex items-center gap-4 text-slate-500 font-medium text-sm">
                  <Shield size={18} className="text-green-500" /> 
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-center gap-4 text-slate-500 font-medium text-sm">
                  <Smartphone size={18} className="text-green-500" /> 
                  <span>Access on mobile and desktop</span>
                </li>
                <li className="flex items-center gap-4 text-slate-500 font-medium text-sm">
                  <Download size={18} className="text-green-500" /> 
                  <span>Downloadable resources</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}