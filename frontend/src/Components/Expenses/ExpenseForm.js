import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/icons';

function ExpenseForm() {
  const { addExpense, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: '',
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: '',
      amount: '',
      date: '',
      category: '',
      description: '',
    });
  };

  return (
    <ExpenseFormStyled onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input type="text" value={title} name={'title'} placeholder="Judul Pengeluaran" onChange={handleInput('title')} />
      </div>
      <div className="input-control">
        <input value={amount} type="number" name={'amount'} placeholder={'Jumlah'} onChange={handleInput('amount')} />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Tanggal"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>
      <div className="selects input-control">
        <select required value={category} name="category" id="category" onChange={handleInput('category')}>
          <option value="" disabled>
            Kategori
          </option>
          <option value="charity">Amal</option>
          <option value="insurance">Asuransi</option>
          <option value="baby">Bayi</option>
          <option value="shopping">Belanja</option>
          <option value="fruit">Buah-buahan</option>
          <option value="snack">Cemilan</option>
          <option value="electronic">Elektronik</option>
          <option value="pets">Hewan Peliharaan</option>
          <option value="entertainment">Hiburan</option>
          <option value="internet">Internet</option>
          <option value="office">Kantor</option>
          <option value="beauty">Kecantikan</option>
          <option value="health">Kesehatan</option>
          <option value="coffee">Kopi</option>
          <option value="electric">Listrik</option>
          <option value="foods">Makanan</option>
          <option value="car">Mobil</option>
          <option value="motor">Motor</option>
          <option value="other">Lain-lain</option>
          <option value="sport">Olahraga</option>
          <option value="tax">Pajak</option>
          <option value="clothing">Pakaian</option>
          <option value="education">Pendidikan</option>
          <option value="cigarette">Rokok</option>
          <option value="home">Rumah</option>
          <option value="social">Sosial</option>
          <option value="bill">Tagihan</option>
          <option value="travelling">Travelling</option>
        </select>
      </div>
      <div className="input-control">
        <textarea name="description" value={description} placeholder="Tambah Keterangan" id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
      </div>
      <div className="submit-btn">
        <Button name={'Tambah Pengeluaran'} icon={plus} bPad={'.8rem 1.6rem'} bRad={'30px'} bg={'var(--color-accent'} color={'#f1f2fa'} />
      </div>
    </ExpenseFormStyled>
  );
}

const ExpenseFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #f1f2fa;
    background: rgba(252, 246, 249, 0.2);
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 255, 0.2);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }

  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 255, 0.2);
      &:hover {
        background: var(--color-red) !important;
      }
    }
  }
`;
export default ExpenseForm;
