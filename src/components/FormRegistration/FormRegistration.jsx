import { useState, useEffect } from 'react';

export default function RegistrationForm({ role, onRegister }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    adminCode: '', // Только для регистрации администратора
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Проверяем заполненность всех обязательных полей
    const isValid = form.name.trim() !== '' &&
                    form.email.trim() !== '' &&
                    form.password.trim() !== '' &&
                    (role !== 'admin' || form.adminCode.trim() !== '');
    setIsFormValid(isValid);
  }, [form, role]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onRegister(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Пароль:
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </label>
      {role === 'admin' && (
        <label>
          Административный код:
          <input
            type="text"
            name="adminCode"
            value={form.adminCode}
            onChange={handleChange}
          />
        </label>
      )}
      <button type="submit" disabled={!isFormValid}>
        Зарегистрироваться
      </button>
    </form>
  );
}
