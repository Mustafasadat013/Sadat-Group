import { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Line, Bar, Doughnut } from 'react-chartjs-2'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

interface ChartProps {
  type: 'line' | 'bar' | 'doughnut'
  data: any
  options?: any
  title?: string
}

export default function Chart({ type, data, options, title }: ChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#9ca3af',
          font: {
            size: 12
          }
        }
      },
      title: {
        display: !!title,
        text: title,
        color: '#ffffff',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    },
    scales: type !== 'doughnut' ? {
      x: {
        grid: {
          color: '#374151'
        },
        ticks: {
          color: '#9ca3af'
        }
      },
      y: {
        grid: {
          color: '#374151'
        },
        ticks: {
          color: '#9ca3af'
        }
      }
    } : undefined
  }

  const mergedOptions = { ...defaultOptions, ...options }

  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={data} options={mergedOptions} />
      case 'bar':
        return <Bar data={data} options={mergedOptions} />
      case 'doughnut':
        return <Doughnut data={data} options={mergedOptions} />
      default:
        return <Line data={data} options={mergedOptions} />
    }
  }

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
      <div className="h-64">
        {renderChart()}
      </div>
    </div>
  )
}

// Predefined chart data for common business metrics
export const revenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 19000, 15000, 25000, 22000, 30000],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4
    },
    {
      label: 'Expenses',
      data: [8000, 12000, 10000, 18000, 15000, 22000],
      borderColor: 'rgb(239, 68, 68)',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      tension: 0.4
    }
  ]
}

export const clientsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'New Clients',
      data: [65, 89, 80, 81, 56, 95],
      backgroundColor: 'rgba(34, 197, 94, 0.8)',
      borderColor: 'rgb(34, 197, 94)',
      borderWidth: 1
    }
  ]
}

export const businessUnitsData = {
  labels: ['Sadat Luxe', 'Sadat Investments', 'Sadat Properties', 'Sadat Tech'],
  datasets: [
    {
      data: [35, 25, 25, 15],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(34, 197, 94, 0.8)',
        'rgba(251, 191, 36, 0.8)',
        'rgba(168, 85, 247, 0.8)'
      ],
      borderColor: [
        'rgb(59, 130, 246)',
        'rgb(34, 197, 94)',
        'rgb(251, 191, 36)',
        'rgb(168, 85, 247)'
      ],
      borderWidth: 2
    }
  ]
}

// Chart components for specific use cases
export function RevenueChart() {
  return (
    <Chart
      type="line"
      data={revenueData}
      title="Revenue & Expenses Overview"
    />
  )
}

export function ClientsChart() {
  return (
    <Chart
      type="bar"
      data={clientsData}
      title="New Clients per Month"
    />
  )
}

export function BusinessUnitsChart() {
  return (
    <Chart
      type="doughnut"
      data={businessUnitsData}
      title="Revenue by Business Unit"
    />
  )
}