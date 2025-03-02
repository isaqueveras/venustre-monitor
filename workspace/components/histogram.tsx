import { Box, Text } from "@chakra-ui/react"
import { Line } from "react-chartjs-2"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
} from 'chart.js'
import { useFetch } from "@/app/hooks/useFetch";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
    title: {
      display: false,
    },
  },
  width: 'auto',
  height: '100%',
};


const Histogram = () => {
  const { data, error, isLoading } = useFetch('/api/watcher/84cbfa32/routine/416e4b00-a8db-4b54-afbc-82de0016edf0/histogram')
  if (error) return <div>falhou ao carregar</div>
  if (isLoading) return <div>carregando</div>

  var datasets: any = []
  for (let i = 0; i < data.datasets.length; i++) {
    datasets.push({
      fill: true,
      label: data.datasets[i].label,
      data: data.datasets[i].data,
      borderColor: `rgba(${data.datasets[i].color}, 0.7)`,
      pointRadius: 1,
      pointHoverRadius: 2,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 250);
        gradient.addColorStop(0, `rgba(${data.datasets[i].color}, 0.45)`);
        gradient.addColorStop(1, `rgba(${data.datasets[i].color}, 0.0)`);
        return gradient;
      }
    })
  }

  return (
    <Box>
      <Text>Histograms</Text>
      <Text textColor={'gray'}>Histograms implemented in routine</Text>
      <Box mt={5}>
        <Line options={options} data={{ labels: data?.labels, datasets: datasets }} height={70} />
      </Box>
    </Box>
  )
}

export default Histogram;
