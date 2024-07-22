import './CheckoutForm.css';
import { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // Nuevo estado para el mensaje

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
      message, // Agregar el mensaje al objeto userData
    };

    onConfirm(userData);
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleConfirm}>
        <div className="user-box">
          <input type="text" value={name} onChange={({ target }) => setName(target.value)} required />
          <label>Nombre:</label>
        </div>
        <div className="user-box">
          <input type="text" value={phone} onChange={({ target }) => setPhone(target.value)} required />
          <label>Telefono:</label>
        </div>
        <div className="user-box">
          <input type="email" value={email} onChange={({ target }) => setEmail(target.value)} required />
          <label>Email:</label>
        </div>
        <div className="user-box">
          <textarea
            value={message}
            onChange={({ target }) => setMessage(target.value)}
            placeholder="Ingrese su mensaje"
            required
          />
          <label>Mensaje:</label>
        </div>
        <div className="user-box">
          <button className="BotonSubmit" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
