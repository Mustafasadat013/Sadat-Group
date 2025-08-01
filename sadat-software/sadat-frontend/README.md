# Sadat Group Frontend

A comprehensive React/Next.js frontend application for the Sadat Group ecosystem - a multi-business empire consisting of 8 diverse businesses.

## 🏢 Business Overview

Sadat Group encompasses 8 distinct businesses:

- **Sadat Luxe** - Cosmetics, fashion, grooming
- **Sadat Connect** - Mobile credit & internet top-ups
- **Sadat Capital** - Crypto trading, P2P transfers, remittances, micro-loans
- **Sadat Estates** - Real estate listings, buying/selling, investments
- **Sadat Energy** - Fuel products, import/export, bulk delivery
- **Sadat Transport** - Cargo, passenger transport, booking
- **Sadat Investments** - Stock, crypto, startup funding, micro-investments
- **Government Contracts** - Services tailored for government tenders

## ✨ Features

### 🎯 Core Functionality
- **Centralized Authentication** - Single login for all businesses
- **Role-Based Access Control** - Manager and Staff roles with different permissions
- **Business Dashboards** - Individual dashboards for each business
- **Main Dashboard** - Overview of all accessible businesses
- **Responsive Design** - Mobile-friendly across all devices

### 🏪 Business Features
- **Product Catalogs** - Display and manage products/services
- **Order Management** - Track and manage orders
- **Booking Systems** - Service booking with calendar integration
- **Client Portals** - Customer account management
- **Analytics** - Business performance metrics

### 🎨 UI/UX Features
- **Modern Design** - Clean, professional interface with dark mode support
- **Consistent Branding** - Unified design across all businesses
- **Interactive Components** - Forms, modals, tables, charts, command palette
- **Loading States** - Smooth user experience with skeleton loaders
- **Error Handling** - User-friendly error messages with error boundaries
- **Notifications** - Toast notifications for user feedback
- **Command Palette** - Quick navigation with ⌘K shortcut
- **Responsive Design** - Mobile-first approach with PWA support
- **Accessibility** - WCAG 2.1 compliant with keyboard navigation

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Dark Mode
- **Icons**: Lucide React
- **Forms**: React Hook Form with Yup validation
- **State Management**: Zustand with persistence
- **Data Fetching**: React Query (TanStack Query)
- **UI Components**: Custom components with Headless UI
- **Testing**: Jest + React Testing Library
- **PWA**: Next.js PWA with offline support
- **Internationalization**: Next.js i18n
- **Error Tracking**: Sentry integration
- **Performance**: Lighthouse CI
- **CI/CD**: GitHub Actions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sadat-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Demo Credentials

Use these credentials to test different user roles:

#### Admin User (Full Access)
- **Username**: `admin`
- **Password**: `password`
- **Access**: All 8 businesses
- **Role**: Manager

#### Business Manager (Sadat Luxe)
- **Username**: `luxe-manager`
- **Password**: `password`
- **Access**: Sadat Luxe only
- **Role**: Manager

#### Staff User (Sadat Connect)
- **Username**: `connect-staff`
- **Password**: `password`
- **Access**: Sadat Connect only
- **Role**: Staff

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard pages
│   ├── businesses/        # Business landing pages
│   ├── login/            # Authentication
│   └── layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   ├── dashboard/        # Dashboard components
│   ├── business/         # Business-specific components
│   ├── ui/               # UI components (buttons, forms, etc.)
│   └── providers/        # Context providers
├── store/                 # Zustand stores
├── lib/                   # Utilities and API client
├── data/                  # Mock data and constants
├── types/                 # TypeScript type definitions
└── styles/                # Global styles

# Configuration Files
├── .github/              # GitHub Actions workflows
├── public/               # Static assets and PWA files
├── jest.config.js        # Jest configuration
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## 🎯 Key Components

### State Management (Zustand)
- **useAuthStore**: Authentication and user management
- **useThemeStore**: Dark/light mode and theme preferences
- **useNotificationStore**: Toast notifications system
- **useUIStore**: UI state (sidebar, command palette)

### Data Fetching (React Query)
- **API Client**: Centralized API communication
- **Caching**: Intelligent data caching and invalidation
- **Error Handling**: Automatic retry and error states
- **Optimistic Updates**: Immediate UI feedback

### Authentication System
- **useAuthStore**: Manages user authentication state
- **Login Page**: Form validation and authentication
- **Protected Routes**: Role-based access control

### Dashboard System
- **Main Dashboard**: Overview of all businesses
- **Business Dashboard**: Individual business management
- **Role-Based Views**: Different interfaces for managers and staff

### Business Pages
- **Business Landing Pages**: Public-facing business information
- **Product/Service Catalogs**: Display offerings
- **Booking Forms**: Service appointment scheduling

## 🔐 Role-Based Access Control

### Manager Role
- Full access to business dashboard
- Can manage products, services, and orders
- Access to business settings
- View analytics and reports

### Staff Role
- Limited access to business dashboard
- Can view orders and customer information
- Cannot modify business settings
- Basic operational functions

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured interface
- **Tablet**: Adapted layouts and touch-friendly controls
- **Mobile**: Streamlined navigation and mobile-optimized forms

## 🎨 Design System

### Color Scheme
- **Primary**: Blue (#2563eb)
- **Secondary**: Purple (#7c3aed)
- **Success**: Green (#16a34a)
- **Warning**: Yellow (#ca8a04)
- **Error**: Red (#dc2626)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight for readability

## 🚀 Advanced Features

### Progressive Web App (PWA)
- **Offline Support**: Works without internet connection
- **Installable**: Can be installed on mobile devices
- **Push Notifications**: Real-time updates
- **App-like Experience**: Native mobile feel

### Command Palette
- **Quick Navigation**: Press ⌘K to open
- **Search Everything**: Find pages, actions, and settings
- **Keyboard Shortcuts**: Full keyboard navigation
- **Smart Suggestions**: Context-aware commands

### Dark Mode
- **System Preference**: Automatically follows OS setting
- **Manual Toggle**: User can override system preference
- **Persistent**: Remembers user choice
- **Smooth Transitions**: Animated theme switching

### Error Handling
- **Error Boundaries**: Graceful error recovery
- **User-Friendly Messages**: Clear error explanations
- **Retry Mechanisms**: Automatic retry for failed requests
- **Error Tracking**: Sentry integration for monitoring

### Performance Optimizations
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Webpack bundle analyzer
- **Lighthouse CI**: Automated performance testing

## 🧪 Testing

### Test Coverage
- **Unit Tests**: Component and utility testing
- **Integration Tests**: API and data flow testing
- **E2E Tests**: Full user journey testing
- **Visual Regression**: UI consistency testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run specific test file
npm test -- Notification.test.tsx
```

## 🔧 Customization

### Adding New Businesses
1. Update `src/types/index.ts` with new business type
2. Add business data to `src/data/businesses.ts`
3. Create business-specific components if needed

### Environment Configuration
1. Copy `.env.example` to `.env.local`
2. Update environment variables as needed
3. Restart development server

### API Integration
1. Update `src/lib/api.ts` with your API endpoints
2. Configure authentication in the API client
3. Update mock data with real API responses

### Modifying Styles
- Use Tailwind CSS classes for styling
- Custom styles in `src/app/globals.css`
- Component-specific styles in individual components

### Adding Features
- Follow the existing component patterns
- Use TypeScript for type safety
- Implement proper error handling
- Add loading states for better UX

## 🚀 Deployment

### Production Deployment
1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**
   - **Vercel**: `npx vercel --prod`
   - **Netlify**: `npx netlify deploy --prod`
   - **AWS**: Use the provided CloudFormation templates

3. **Environment Variables**
   - Set all required environment variables
   - Configure API endpoints
   - Set up monitoring and analytics

### CI/CD Pipeline
- **Automated Testing**: Runs on every PR
- **Security Scanning**: Dependency vulnerability checks
- **Performance Testing**: Lighthouse CI integration
- **Deployment**: Automatic deployment to staging/production

## 📊 Monitoring & Analytics

### Error Tracking
- **Sentry Integration**: Real-time error monitoring
- **Error Boundaries**: Graceful error handling
- **Performance Monitoring**: Track app performance

### Analytics
- **Google Analytics**: User behavior tracking
- **Custom Events**: Business-specific metrics
- **Performance Metrics**: Core Web Vitals

### Health Checks
- **Uptime Monitoring**: Service availability
- **Performance Alerts**: Automated notifications
- **Error Rate Monitoring**: Track error frequencies

## 📊 API Integration

The application is designed for easy backend integration:

### Authentication Endpoints
- `POST /api/auth/login` - User authentication
- `POST /api/auth/logout` - User logout
- `GET /api/auth/user` - Get current user

### Business Endpoints
- `GET /api/businesses` - List all businesses
- `GET /api/businesses/[id]` - Get business details
- `GET /api/businesses/[id]/orders` - Get business orders
- `GET /api/businesses/[id]/products` - Get business products

### Order Management
- `GET /api/orders` - List orders
- `POST /api/orders` - Create new order
- `PUT /api/orders/[id]` - Update order
- `DELETE /api/orders/[id]` - Delete order

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software for Sadat Group.

## 🆘 Support

For support and questions:
- **Email**: support@sadatgroup.com
- **Documentation**: [docs.sadatgroup.com](https://docs.sadatgroup.com)
- **Issues**: [GitHub Issues](https://github.com/sadatgroup/frontend/issues)
- **Discord**: [Join our community](https://discord.gg/sadatgroup)

---

**Built with ❤️ for Sadat Group**
