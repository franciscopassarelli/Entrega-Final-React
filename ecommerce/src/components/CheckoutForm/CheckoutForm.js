import './CheckoutForm.css';
import { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div class="login-box">
    <h2>Login</h2>
    <form onSubmit={handleConfirm}>
      <div className="user-box">
        <input type="text" value={name} onChange={({target}) => setName (target.value) }required/>
        <label>Nombre:</label>
      </div>
      <div className="user-box">
        <input type="text" value={phone} onChange={({target}) => setPhone (target.value) }required/>
        <label>Telefono:</label>
      </div>
      <div className="user-box">
        <input type="email" value={email} onChange={({target}) => setEmail (target.value) }required/>
        <label>Email:</label>
      </div>
      <div className='user-box'>
      <button className='BotonSubmit' type='submit'>
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
