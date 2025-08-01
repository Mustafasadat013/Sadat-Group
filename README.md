# Sadat Group Ecosystem

A comprehensive business ecosystem with **separated public website** and **business management software**.

## 🏗️ **Architecture Overview**

### **Two Separate Applications:**

1. **🌐 Public Website** (`sadat-website`)
   - Marketing and public-facing content
   - Business information and landing pages
   - Contact forms and public services
   - **Port:** 3000

2. **💼 Business Software** (`sadat-software`)
   - Internal business management system
   - User authentication and dashboards
   - Order management and analytics
   - **Port:** 3001

---

## 🚀 **Quick Start**

### **Option 1: Run Both Applications**

```bash
# Terminal 1 - Public Website
cd sadat-website
npm install
npm run dev

# Terminal 2 - Business Software
cd sadat-software/sadat-frontend
npm install
npm run dev
```

### **Option 2: Run Individual Applications**

```bash
# Public Website Only (Port 3000)
cd sadat-website
npm install
npm run dev

# Business Software Only (Port 3001)
cd sadat-software/sadat-frontend
npm install
npm run dev
```

---

## 🌐 **Public Website** (`sadat-website`)

**URL:** http://localhost:3000

### **Features:**
- ✅ Landing page with business overview
- ✅ Individual business pages
- ✅ About us and contact information
- ✅ Software access portal
- ✅ Responsive design
- ✅ SEO optimized

### **Pages:**
- `/` - Main landing page
- `/businesses` - All businesses overview
- `/businesses/[business]` - Individual business pages
- `/software` - Software access portal
- `/about` - About Sadat Group
- `/contact` - Contact information
- `/careers` - Job opportunities

---

## 💼 **Business Software** (`sadat-software`)

**URL:** http://localhost:3001

### **Features:**
- ✅ User authentication system
- ✅ Role-based access control
- ✅ Business dashboards
- ✅ Order management
- ✅ Product/Service catalogs
- ✅ Analytics and reporting
- ✅ PWA support
- ✅ Dark mode
- ✅ Command palette
- ✅ Notifications system

### **Demo Credentials:**
- **Admin:** `admin` / `password` (Full access to all businesses)
- **Luxe Manager:** `luxe-manager` / `password` (Sadat Luxe only)
- **Connect Staff:** `connect-staff` / `password` (Sadat Connect only)

### **Pages:**
- `/login` - Authentication
- `/dashboard` - Main dashboard
- `/dashboard/[business]` - Business-specific dashboards

---

## 🏢 **Business Portfolio**

Sadat Group operates 8 distinct businesses:

1. **Sadat Luxe** 💄 - Premium cosmetics and beauty services
2. **Sadat Connect** 📱 - Telecommunications and connectivity
3. **Sadat Capital** 💰 - Financial services and investments
4. **Sadat Estates** 🏢 - Real estate development
5. **Sadat Energy** ⚡ - Renewable energy solutions
6. **Sadat Transport** 🚚 - Logistics and transportation
7. **Sadat Investments** 📈 - Strategic investments
8. **Government Contracts** 🏛️ - Public sector partnerships

---

## 🔧 **Development**

### **Public Website Development:**
```bash
cd sadat-website
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run linting
```

### **Business Software Development:**
```bash
cd sadat-software/sadat-frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run tests
npm run lint         # Run linting
```

---

## 🚀 **Deployment**

### **Public Website:**
- Deploy to: `sadatgroup.com`
- Purpose: Marketing and public information
- No authentication required

### **Business Software:**
- Deploy to: `app.sadatgroup.com` or `software.sadatgroup.com`
- Purpose: Internal business management
- Requires authentication

---

## 🔗 **Integration**

### **Cross-Application Links:**
- Public website links to software at `/software`
- Software can link back to public website
- Shared branding and design system
- Separate domains for security

### **Data Flow:**
- Public website: Static content and marketing
- Business software: Dynamic data and user management
- No shared database (separate concerns)

---

## 📁 **Project Structure**

```
/
├── sadat-website/           # Public marketing website
│   ├── src/
│   │   ├── app/            # Next.js App Router pages
│   │   └── components/     # Public website components
│   └── package.json
│
├── sadat-software/          # Business management software
│   └── sadat-frontend/     # Software application
│       ├── src/
│       │   ├── app/        # Software pages
│       │   ├── components/ # Software components
│       │   ├── store/      # Zustand state management
│       │   └── lib/        # API and utilities
│       └── package.json
│
└── README.md               # This file
```

---

## 🎯 **Benefits of Separation**

### **Security:**
- Business software isolated from public website
- Separate authentication systems
- Different security requirements

### **Performance:**
- Public website optimized for SEO and speed
- Business software optimized for functionality
- Independent scaling

### **Maintenance:**
- Separate teams can work independently
- Different update cycles
- Isolated issues and bugs

### **User Experience:**
- Clear distinction between public and private areas
- Appropriate interfaces for different user types
- Focused functionality for each purpose

---

## 📞 **Support**

For questions or issues:
- **Public Website:** Contact marketing team
- **Business Software:** Contact IT team
- **General:** support@sadatgroup.com

---

**Built with ❤️ for Sadat Group**