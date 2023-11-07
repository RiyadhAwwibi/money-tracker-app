import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartDoughnut = ({ income, expense, balance }) => {
  const data = {
    labels: ['Pemasukan', 'Pengeluaran', 'Saldo'],
    datasets: [
      {
        label: 'Total',
        data: [income, expense, balance()],
        backgroundColor: ['#0070AE', '#00BDC2', '#222260'],
        borderColor: 'transparent',
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <Doughnut data={data} />
    </>
  );
};

export default ChartDoughnut;
