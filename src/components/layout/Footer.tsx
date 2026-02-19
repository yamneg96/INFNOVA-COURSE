export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-8 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-white font-bold mb-4">INFNOVA Academy</h4>
          <p className="text-sm leading-relaxed opacity-70">
            Empowering learners worldwide with cutting-edge technology courses. Start your journey to success with expert-led training.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2 opacity-70">
            <li>About Us</li>
            <li>Courses</li>
            <li>Instructors</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Support</h4>
          <ul className="text-sm space-y-2 opacity-70">
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="text-xs opacity-50 flex items-end">
          © 2026 INFNOVA Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}