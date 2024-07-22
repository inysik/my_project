import { useState } from "react";
import Button from "../Buttons/Button";
import cls from "./FeadbackSection.module.css";


import "../styles/variable.css";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    hasError: true,
    reason: "help",
  });

  function handleNameChange(event) {
    const name = event.target.value;
    setForm((prev) => ({
      ...prev,
      name,
      hasError: name.trim().length === 0 || prev.message.trim().length === 0 || prev.email.trim().length === 0,
    }));
  }

  function handleEmailChange(event) {
    const email = event.target.value;
    setForm((prev) => ({
      ...prev,
      email,
      hasError: prev.name.trim().length === 0 || prev.message.trim().length === 0 || email.trim().length === 0,
    }));
  }

  function handleMessageChange(event) {
    const message = event.target.value;
    setForm((prev) => ({
      ...prev,
      message,
      hasError: prev.name.trim().length === 0 || message.trim().length === 0 || prev.email.trim().length === 0,
    }));
  }

  function handleReasonChange(event) {
    setForm((prev) => ({
      ...prev,
      reason: event.target.value,
    }));
  }

  return (
    <section className={cls.section}>
      <form className={cls.form}>
      
        <h3 className={cls.title}>Обратная связь</h3>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className={cls.control}
          value={form.name}
          style={{
            border: form.hasError && form.name.trim().length === 0 ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="email">Ваш email</label>
        <input
          type="text"
          id="email"
          className={cls.control}
          value={form.email}
          style={{
            border: form.hasError && form.email.trim().length === 0 ? "1px solid red" : null,
          }}
          onChange={handleEmailChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className={cls.control}
          value={form.reason}
          onChange={handleReasonChange}
        >
          <option className={cls.menuControl} value="error">
            Ошибка
          </option>
          <option className={cls.menuControl} value="help">
            Нужна помощь
          </option>
          <option className={cls.menuControl} value="suggest">
            Предложение
          </option>
        </select>

        <label htmlFor="message">Ваше сообщение</label>
        <textarea
          id="message"
          className={cls.control}
          value={form.message}
          style={{
            border: form.hasError && form.message.trim().length === 0 ? "1px solid red" : null,
          }}
          onChange={handleMessageChange}
        />

        <Button
          disabled={form.hasError}
          isActive={!form.hasError}
          text="Отправить"
        />
      </form>

  
    </section>
  );
}
