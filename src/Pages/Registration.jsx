// import RegistrationForm from "../components/FormRegistration/FormRegistration.jsx"



// export default function Registration(){



//     return(
// <>

//  <FormRegistration/>
// </>


//     )

// }
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../components/FormRegistration/FormRegistration';

export default function Registration() {
  const [role, setRole] = useState('user'); // 'user' or 'admin'
  const navigate = useNavigate();

  function handleRoleChange(event) {
    setRole(event.target.value);
  }

  function handleRegister(formData) {
    // Здесь вы можете отправить данные формы на сервер или обработать их другим образом
    console.log('Registered data:', formData);

    // Перенаправление после успешной регистрации
    if (role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/user-dashboard');
    }
  }

  return (
    <div>
      <h1>Регистрация</h1>
      <label>
        Выберите роль:
        <select value={role} onChange={handleRoleChange}>
          <option value="user">Пользователь</option>
          <option value="admin">Администратор</option>
        </select>
      </label>
      <RegistrationForm role={role} onRegister={handleRegister} />
    </div>
  );
}
