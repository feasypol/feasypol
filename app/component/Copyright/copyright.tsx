import React from 'react';

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container mx-auto flex justify-end items-center">
        <p className="text-sm">
          &copy; {currentYear} easy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Copyright;