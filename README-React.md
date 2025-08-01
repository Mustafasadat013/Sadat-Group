# Sadat Group Business Management System - React Version

A modern, React-based business management dashboard for Sadat Group, featuring TypeScript, Tailwind CSS, and Chart.js for data visualization.

## 🚀 Features

### 📊 Dashboard Components
- **Modern React Dashboard** with TypeScript
- **Responsive Design** using Tailwind CSS
- **Interactive Charts** with Chart.js
- **Real-time Statistics** with animated cards
- **Business Unit Management** (Luxe, Investments, Properties, Tech)

### 🎨 UI/UX Features
- **Dark Theme** optimized for business use
- **Glassmorphism Effects** for modern aesthetics
- **Smooth Animations** and transitions
- **Responsive Layout** for all devices
- **Professional Branding** with Sadat Group colors

### 📈 Business Metrics
- **Revenue Tracking** with trend analysis
- **Client Management** with growth indicators
- **Investment Portfolio** overview
- **Property Management** statistics
- **Project Status** monitoring
- **Recent Activity** feed

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Chart.js** for data visualization
- **Lucide React** for icons
- **Vite** for build tooling

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx          # Navigation sidebar
│   ├── StatCard.tsx         # Statistics cards
│   └── Chart.tsx           # Chart components
├── pages/
│   └── Dashboard.tsx       # Main dashboard page
├── main.tsx               # React entry point
└── index.css              # Global styles
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run react:dev
   ```

3. **Build for Production**
   ```bash
   npm run react:build
   ```

4. **Preview Production Build**
   ```bash
   npm run react:preview
   ```

## 📦 Available Scripts

- `npm run react:dev` - Start development server (Vite)
- `npm run react:build` - Build for production
- `npm run react:preview` - Preview production build
- `npm start` - Start static server (original HTML version)
- `npm run dev` - Start static server with live reload

## 🎯 Component Usage

### Sidebar Component
```tsx
import Sidebar from './components/Sidebar'

// Usage in your app
<Sidebar />
```

### StatCard Component
```tsx
import StatCard from './components/StatCard'

// Basic usage
<StatCard 
  title="Total Revenue" 
  value="$284,500" 
  change="+12%" 
/>

// With custom color and icon
<StatCard 
  title="Active Clients" 
  value="2,420" 
  change="+47%" 
  color="blue"
  icon={<Users className="w-4 h-4" />}
/>
```

### Predefined Stat Cards
```tsx
import { 
  RevenueCard, 
  ClientsCard, 
  DealsCard, 
  InvoicesCard,
  InvestmentsCard,
  PropertiesCard,
  ProjectsCard 
} from './components/StatCard'

// Use predefined cards
<RevenueCard />
<ClientsCard />
<DealsCard />
```

### Chart Components
```tsx
import { 
  RevenueChart, 
  ClientsChart, 
  BusinessUnitsChart 
} from './components/Chart'

// Use predefined charts
<RevenueChart />
<ClientsChart />
<BusinessUnitsChart />
```

## 🎨 Customization

### Colors
The system uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Sadat Group blue */ },
  success: { /* Green for positive metrics */ },
  warning: { /* Yellow for warnings */ },
  error: { /* Red for errors */ }
}
```

### Adding New Stat Cards
```tsx
// Create a new stat card
export function CustomCard() {
  return (
    <StatCard
      title="Your Metric"
      value="1,234"
      change="+5%"
      color="purple"
    />
  )
}
```

### Adding New Charts
```tsx
// Create custom chart data
const customData = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [{
    label: 'Your Data',
    data: [10, 20, 30],
    borderColor: 'rgb(59, 130, 246)',
    backgroundColor: 'rgba(59, 130, 246, 0.1)'
  }]
}

// Use in component
<Chart type="line" data={customData} title="Your Chart" />
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Configuration

### Vite Configuration
Located in `vite.config.ts`:
- Development server on port 3001
- Path aliases for clean imports
- Optimized build output

### Tailwind Configuration
Located in `tailwind.config.js`:
- Custom color palette
- Custom animations
- Responsive breakpoints
- Dark mode support

## 🚀 Deployment

### Build for Production
```bash
npm run react:build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run react:build
# Upload dist/ folder to Netlify
```

## 📊 Data Integration

### Connect to Real Data
Replace the static data in components with API calls:

```tsx
// Example: Fetch real data
const [revenue, setRevenue] = useState(0)

useEffect(() => {
  fetch('/api/revenue')
    .then(res => res.json())
    .then(data => setRevenue(data.amount))
}, [])
```

### API Endpoints
Suggested API structure:
- `/api/revenue` - Revenue data
- `/api/clients` - Client statistics
- `/api/investments` - Investment portfolio
- `/api/properties` - Property management
- `/api/activities` - Recent activities

## 🎯 Business Units

The system is designed to manage multiple business units:

1. **Sadat Luxe** - Luxury goods and services
2. **Sadat Investments** - Investment portfolio
3. **Sadat Properties** - Real estate management
4. **Sadat Tech** - Technology ventures

## 🔒 Security

- TypeScript for type safety
- Input validation
- Secure data handling
- Environment variable management

## 📈 Performance

- Code splitting with Vite
- Optimized bundle size
- Lazy loading for charts
- Efficient re-renders with React

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 👥 Team

- **Owner**: Sayed Mustafa Sadat
- **Development**: Sadat Group Tech Team

## 📞 Support

For support and questions:
- Email: tech@sadatgroup.com
- GitHub Issues: [Create an issue](https://github.com/sadat-group/business-management-system/issues)

---

**Built with ❤️ for Sadat Group**