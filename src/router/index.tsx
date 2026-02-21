import { Routes, Route, useLocation } from 'react-router-dom';
import CoursesPage from '../pages/CoursesPage';
import CourseDetailPage from '../pages/CourseDetailPage';

import React from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
      </Routes>
    </>
  );
}