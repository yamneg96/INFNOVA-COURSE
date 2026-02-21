export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-12 mb-12">
          
          {/* Brand Section - Takes more width on desktop */}
          <div className="flex-1 min-w-[250px]">
            <h4 className="text-white font-bold text-lg tracking-tight mb-4">
              INFNOVA Academy
            </h4>
            <p className="text-sm leading-relaxed opacity-70 max-w-xs">
              Empowering learners worldwide with cutting-edge technology courses. 
              Start your journey to success with expert-led training.
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-[150px]">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="text-sm space-y-3 opacity-70">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Courses</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Instructors</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div className="min-w-[150px]">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="text-sm space-y-3 opacity-70">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Copyright) */}
        <div className="pt-8 border-t border-slate-800 flex justify-center items-center text-xs opacity-50">
          <p>© {currentYear} INFNOVA Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}