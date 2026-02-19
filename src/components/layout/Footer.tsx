import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} INFNOVA. All rights reserved.
      </div>
    </footer>
  );
}