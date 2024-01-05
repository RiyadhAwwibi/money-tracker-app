import React from "react";
import styled from "styled-components";
import { dateFormat } from "../../utils/dateFormat";
import { useGlobalContext } from "../../context/globalContext";

import currencyFormat from "currency-formatter";
import {
  book,
  calender,
  card,
  clothing,
  comment,
  food,
  medical,
  money,
  saving,
  trash,
  travelling,
  other,
  dividen,
  invest,
  gift,
  refund,
  award,
  sale,
  rental,
  insurance,
  baby,
  shopping,
  fruit,
  snack,
  electronic,
  electric,
  pets,
  coffee,
  entertainment,
  office,
  cigaret,
  beauty,
  car,
  motorcycle,
  sport,
  tax,
  internet,
  home,
  charity,
  social,
  bill,
} from "../../utils/icons";
import Button from "../Button/Button";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  const { setSelectedId, selectedId } = useGlobalContext();

  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "investments":
        return invest;
      case "stocks":
        return dividen;
      case "bank":
        return card;
      case "other":
        return other;
      case "gift":
        return gift;
      case "refund":
        return refund;
      case "award":
        return award;
      case "sale":
        return sale;
      case "rental":
        return rental;
      case "saving":
        return saving;

      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "health":
        return medical;
      case "foods":
        return food;
      case "clothing":
        return clothing;
      case "travelling":
        return travelling;
      case "saving":
        return saving;
      case "other":
        return other;
      case "insurance":
        return insurance;
      case "baby":
        return baby;
      case "shopping":
        return shopping;
      case "fruit":
        return fruit;
      case "snack":
        return snack;
      case "electronic":
        return electronic;
      case "pets":
        return pets;
      case "coffee":
        return coffee;
      case "entertainment":
        return entertainment;
      case "office":
        return office;
      case "cigarette":
        return cigaret;
      case "beauty":
        return beauty;
      case "car":
        return car;
      case "motor":
        return motorcycle;
      case "sport":
        return sport;
      case "tax":
        return tax;
      case "internet":
        return internet;
      case "home":
        return home;
      case "charity":
        return charity;
      case "social":
        return social;
      case "bill":
        return bill;
      case "electric":
        return electric;
      default:
        return "";
    }
  };

  // console.log("type", type);

  return (
    <IncomeItemStyled
      indicator={indicatorColor}
      onClick={() => setSelectedId(id)}
    >
      <div className="icon">
        {type === "expense" ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>{currencyFormat.format(amount, { code: "IDR" })}</p>
            <p>
              {calender} {dateFormat(date)}
            </p>

            <p className="res-desc">
              {comment}
              {description}
            </p>
          </div>
          <div className="btn-con">
            <Button
              icon={trash}
              bPad={"1rem"}
              bRad={"50%"}
              bg={"var(--primary-color"}
              color={"#f1f2fa"}
              onClick={() => deleteItem(id)}
            />
          </div>
        </div>
      </div>
    </IncomeItemStyled>
  );
}

const IncomeItemStyled = styled.div`
  cursor: pointer;
  background: rgba(252, 246, 249, 0.6);
  border: transparent;
  box-shadow: 0px 1px 15px rgba(0, 0, 255, 0.2);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #222260;
  .icon {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 2.6rem;
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: ${(props) => props.indicator};
      }
    }
    
    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .text {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        .res-desc {
          @media (max-width: 768px) {
            display: none;
          }
        }
        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          opacity: 0.8;
          
        }
      }
    }
  }
  
  }
`;

export default IncomeItem;
