import { useState } from 'react';
import type { HeaderItem } from '../../../../types/menu';

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen(!submenuOpen);
    }
  };

  return (
    <div className="relative block w-full">
      <a
        href={item.href}
        onClick={handleToggle}
        className={`  flex items-center justify-between w-full text-2xl py-2 px-3 text-white hover:text-dark-mode-a! duration-[.5s] transition-all rounded-md dark:text-grey dark:text-opacity-70 focus:outline-hidden`}
      >
        {item.label}
        {item.submenu && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1.5em" height="1.5em" 
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ${submenuOpen ? 'rotate-180' : ''}`}
          >
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </a>

      {submenuOpen && item.submenu && (
        <div className="bg-white dark:bg-gray-800 p-2 w-full rounded-md mt-1">
          {item.submenu.map((subItem, index) => (
            <a 
              key={index} 
              href={subItem.href}
              className={`block py-2 px-4 text-sm text-gray-500   hover:bg-gray-100 dark:hover:bg-gray-700 rounded`}
            >
              {subItem.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
