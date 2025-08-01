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
- **Modern Design** - Clean, professional interface
- **Consistent Branding** - Unified design across all businesses
- **Interactive Components** - Forms, modals, tables, charts
- **Loading States** - Smooth user experience
- **Error Handling** - User-friendly error messages

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form with Yup validation
- **State Management**: React Context API
- **UI Components**: Custom components with Headless UI

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
│   └── business/         # Business-specific components
├── contexts/             # React contexts
├── data/                 # Mock data and constants
├── types/                # TypeScript type definitions
└── styles/               # Global styles
```

## 🎯 Key Components

### Authentication System
- **AuthContext**: Manages user authentication state
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

## 🔧 Customization

### Adding New Businesses
1. Update `src/types/index.ts` with new business type
2. Add business data to `src/data/businesses.ts`
3. Create business-specific components if needed

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

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Environment Variables
Create a `.env.local` file for environment-specific configuration:
```env
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_APP_NAME=Sadat Group
```

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
- Email: support@sadatgroup.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]

---

**Built with ❤️ for Sadat Group**
