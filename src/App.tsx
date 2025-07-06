import { ThemeToggle } from '@components/ThemeToggle';
import { formatDate } from '@utils/index';

export default function App() {
  const currentDate = formatDate(new Date());
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center py-12 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio Project
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Демонстрация системы тем
          </p>
        </header>
        
        <main className="space-y-12 mt-12">
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Переключение тем
            </h2>
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Демонстрация элементов
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Кнопки
                </h3>
                <div className="flex gap-4 flex-wrap">
                  <button className="btn-primary">Основная</button>
                  <button className="btn-secondary">Вторичная</button>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Текст
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-900 dark:text-white">Основной текст</p>
                  <p className="text-gray-700 dark:text-gray-300">Вторичный текст</p>
                  <p className="text-gray-600 dark:text-gray-400">Третичный текст</p>
                  <p className="text-gray-500 dark:text-gray-500">Приглушенный текст</p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Информация
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    Текущая дата: <strong className="text-gray-900 dark:text-white">{currentDate}</strong>
                  </p>
                  <p className="text-green-600 dark:text-green-400">
                    Alias работают корректно! ✅
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Доступные alias
            </h2>
            <div className="card">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg font-mono text-sm">
                  <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded font-medium">
                    @
                  </code>
                  <span className="text-gray-500 dark:text-gray-400">→</span>
                  <code className="text-gray-700 dark:text-gray-300">/src</code>
                </li>
                <li className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg font-mono text-sm">
                  <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded font-medium">
                    @components
                  </code>
                  <span className="text-gray-500 dark:text-gray-400">→</span>
                  <code className="text-gray-700 dark:text-gray-300">/src/components</code>
                </li>
                <li className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg font-mono text-sm">
                  <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded font-medium">
                    @utils
                  </code>
                  <span className="text-gray-500 dark:text-gray-400">→</span>
                  <code className="text-gray-700 dark:text-gray-300">/src/utils</code>
                </li>
                <li className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg font-mono text-sm">
                  <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded font-medium">
                    @types
                  </code>
                  <span className="text-gray-500 dark:text-gray-400">→</span>
                  <code className="text-gray-700 dark:text-gray-300">/src/types</code>
                </li>
                <li className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg font-mono text-sm">
                  <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded font-medium">
                    @assets
                  </code>
                  <span className="text-gray-500 dark:text-gray-400">→</span>
                  <code className="text-gray-700 dark:text-gray-300">/src/assets</code>
                </li>
                <li className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg font-mono text-sm">
                  <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded font-medium">
                    @styles
                  </code>
                  <span className="text-gray-500 dark:text-gray-400">→</span>
                  <code className="text-gray-700 dark:text-gray-300">/src/styles</code>
                </li>
                <li className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg font-mono text-sm">
                  <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded font-medium">
                    @services
                  </code>
                  <span className="text-gray-500 dark:text-gray-400">→</span>
                  <code className="text-gray-700 dark:text-gray-300">/src/services</code>
                </li>
                <li className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg font-mono text-sm">
                  <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded font-medium">
                    @store
                  </code>
                  <span className="text-gray-500 dark:text-gray-400">→</span>
                  <code className="text-gray-700 dark:text-gray-300">/src/store</code>
                </li>
                <li className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg font-mono text-sm">
                  <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded font-medium">
                    @constants
                  </code>
                  <span className="text-gray-500 dark:text-gray-400">→</span>
                  <code className="text-gray-700 dark:text-gray-300">/src/constants</code>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}