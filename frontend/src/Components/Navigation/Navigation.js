import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.jpg';
import { signout } from '../../utils/icons';
import { menuItems } from '../../utils/menuItems';

function Navigation({ active, setActive, setModal }) {
  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text user-details">
          <h2>Riyadh A</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li key={item.id} onClick={() => setActive(item.id)} className={active === item.id ? 'active' : ''}>
              <span className="icons-con">{item.icon}</span>
              <span className="text-icon">{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li>
          {signout} <span className="signout-text">Keluar</span>
        </li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.4);
  box-shadow: 0px 1px 15px rgba(0, 0, 255, 0.3);
  border: transparent;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    padding: 0 10px;
  }
  .text-icon {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    .user-details {
      @media (max-width: 768px) {
        display: none;
      }
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      background: transparent;
      border: transparent;
      box-shadow: 0px 1px 15px rgba(0, 0, 255, 0.2);
      @media (max-width: 768px) {
        width: 40px;
        height: 40px;
      }
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: space-evenly;
    }
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      @media (max-width: 768px) {
        padding-left: 0;
        display: grid;
        grid-template-columns: none;
        align-content: center;
        font-weight: bold;
      }
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    @media (max-width: 768px) {
      font-weight: bold;
    }
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
      @media (max-width: 768px) {
        width: 100%;
        height: 4%;
        background: transparent;
      }
    }
  }

  .bottom-nav {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .signout-text {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export default Navigation;
