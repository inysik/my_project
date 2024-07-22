

import { Link, Route, Routes } from 'react-router-dom';
import CreateCourse from '../components/CreateCourse/CreateCourse';


export default function AdminDashboard() {
  function handleCreateCourse(course) {
    // Логика для обработки данных о новом курсе, например, отправка на сервер
    console.log('Создан новый курс:', course);
  }

  return (
    <div>
      <h1>Личный кабинет администратора</h1>
      <nav>
        <ul>
          <li><Link to="create-course">Создать курс</Link></li>
          {/* Другие ссылки для навигации */}
        </ul>
      </nav>
      <Routes>
        <Route path="create-course" element={<CreateCourse onCreateCourse={handleCreateCourse} />} />
        {/* Другие маршруты */}
      </Routes>
    </div>
  );
}




