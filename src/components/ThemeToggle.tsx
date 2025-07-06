import { useTheme } from '@hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, setTheme, actualTheme } = useTheme();

  const themes = [
    { value: 'light' as const, label: 'Светлая', icon: '☀️' },
    { value: 'dark' as const, label: 'Темная', icon: '🌙' },
  ];

  return (
    <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm max-w-md">
      <div className="text-lg font-semibold text-gray-900 dark:text-white">
        Тема:
      </div>
      
      <div className="flex gap-2 flex-wrap">
        {themes.map(({ value, label, icon }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 min-w-[100px] justify-center
              ${theme === value 
                ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
              }
            `}
            title={label}
          >
            <span className="text-base">{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
      
      <div className="px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-400 text-center border border-gray-200 dark:border-gray-600">
        Текущая: {actualTheme === 'dark' ? '🌙 Темная' : '☀️ Светлая'}
      </div>
    </div>
  );
};
