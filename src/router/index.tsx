import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CoursesPage from '../pages/CoursesPage';
import CourseDetailPage from '../pages/CourseDetailPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<CoursesPage />} />
      <Route path="/courses/:id" element={<CourseDetailPage />} />
    </Routes>
  );
}