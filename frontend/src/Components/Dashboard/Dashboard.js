import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';
import History from '../History/History';
import currencyFormat from 'currency-formatter';
import ChartDoughnut from '../Chart/ChartDoughnut ';

function Dashboard() {
  const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  const resCurMin = (res) => {
    const currency = Math.min(...res.map((item) => item.amount));
    return currencyFormat.format(currency, { code: 'IDR' });
  };

  const resCurMax = (res) => {
    const currency = Math.max(...res.map((item) => item.amount));
    return currencyFormat.format(currency, { code: 'IDR' });
  };

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>Semua Transaksi</h1>

        <div className="dash-con">
          <div className="chart-con">
            <div>
              <div>
                <Chart />
              </div>
            </div>

            <div className="doughnut-con">
              <div className="doughnut">
                <ChartDoughnut income={totalIncome()} expense={totalExpenses()} balance={totalBalance} />
              </div>
            </div>
          </div>

          <div className="history-con">
            <History />
            <div>
              <h2 className="salary-title">
                <span>Min</span>
                <span>Pemasukan</span>
                <span>Maks</span>
              </h2>
              <div className="salary-item">
                <div className="min-cur">{resCurMin(incomes)}</div>
                <div className="max-cur">{resCurMax(incomes)}</div>
              </div>
              <h2 className="salary-title">
                Min <span>Pengeluaran</span>Maks
              </h2>
              <div className="salary-item">
                <div className="min-cur">{resCurMin(expenses)}</div>
                <div className="max-cur">{resCurMax(expenses)}</div>
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
.dash-con {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .chart-con {
    display: grid;
    grid-template-columns: 60% 40%;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .doughnut {
        max-width:250px;
        margin: 0 auto;
      }
    }
  }
  .salary-title {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .doughnut {
    max-width:440px;
    margin: 0 auto;
  }
  .history-con {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
  .salary-item {
    background: rgba(252, 246, 249, 0.2);
    border: transparent;
    box-shadow: 0px 1px 15px rgba(0, 0, 255, 0.2);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .min-cur {
    text-align: left;
  }
  .max-cur {
    text-align: right;
  }
`;

export default Dashboard;
