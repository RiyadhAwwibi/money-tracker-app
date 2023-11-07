import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/icons';

function Form() {
  const { addIncome, getIncomes, error, setError } = useGlobalContext();
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
    addIncome(inputState);
    setInputState({
      title: '',
      amount: '',
      date: '',
      category: '',
      description: '',
    });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input type="text" value={title} name={'title'} placeholder="Judul Pemasukan" onChange={handleInput('title')} />
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
          <option value="bank">Deposito</option>
          <option value="stocks">Dividen</option>
          <option value="salary">Gaji</option>
          <option value="gift">Hibah</option>
          <option value="investments">Investasi</option>
          <option value="other">Lain-lain</option>
          <option value="refund">Pengembalian Dana</option>
          <option value="award">Penghargaan</option>
          <option value="sale">Penjualan</option>
          <option value="rental">Penyewaan</option>
          <option value="saving">Tabungan</option>
        </select>
      </div>
      <div className="input-control">
        <textarea name="description" value={description} placeholder="Tambah Keterangan" id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
      </div>
      <div className="submit-btn">
        <Button name={'Tambah Pemasukan'} icon={plus} bPad={'.8rem 1.6rem'} bRad={'30px'} bg={'var(--color-accent'} color={'#f1f2fa'} />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
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
        background: var(--color-green) !important;
      }
    }
  }
`;
export default Form;
