// Business dashboard functionality
class BusinessDashboard {
    constructor() {
        this.currentBusiness = this.getBusinessFromURL();
        this.currentUser = this.getCurrentUser();
        this.isEditMode = false;
        
        this.modal = document.getElementById('moduleModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalBody = document.getElementById('modalBody');
        this.userName = document.getElementById('userName');
        this.dateFilter = document.getElementById('dateFilter');
        
        this.init();
    }

    init() {
        // Check authentication
        this.checkAuth();
        
        // Initialize components
        this.initUserInfo();
        this.initEventListeners();
        this.initViewModeToggle();
        this.initDateFilter();
        
        // Load business data
        this.loadBusinessData();
    }

    checkAuth() {
        if (!this.currentUser) {
            window.location.href = 'login.html';
            return;
        }
    }

    getBusinessFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('business') || 'luxe';
    }

    getCurrentUser() {
        const userSession = localStorage.getItem('sadatGroupUser');
        if (userSession) {
            try {
                return JSON.parse(userSession);
            } catch (error) {
                console.error('Invalid user session');
                return null;
            }
        }
        return null;
    }

    initUserInfo() {
        if (this.currentUser) {
            this.userName.textContent = this.currentUser.username;
        }
    }

    initEventListeners() {
        // Close modal when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModule();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModule();
            }
        });
    }

    initViewModeToggle() {
        const modeBtns = document.querySelectorAll('.mode-btn');
        modeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.dataset.mode;
                this.setViewMode(mode);
            });
        });
    }

    initDateFilter() {
        this.dateFilter.addEventListener('change', () => {
            this.updateDataByDate(this.dateFilter.value);
        });
    }

    setViewMode(mode) {
        // Update button states
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
        
        this.isEditMode = mode === 'edit';
        
        // Update UI based on mode
        this.updateUIBasedOnMode();
    }

    updateUIBasedOnMode() {
        const moduleCards = document.querySelectorAll('.module-card');
        const editButtons = document.querySelectorAll('.edit-btn');
        
        if (this.isEditMode) {
            // Show edit buttons and enable editing
            moduleCards.forEach(card => {
                card.classList.add('edit-mode');
            });
            editButtons.forEach(btn => {
                btn.style.display = 'flex';
            });
        } else {
            // Hide edit buttons and disable editing
            moduleCards.forEach(card => {
                card.classList.remove('edit-mode');
            });
            editButtons.forEach(btn => {
                btn.style.display = 'none';
            });
        }
    }

    async loadBusinessData() {
        try {
            await this.loadOverviewData();
            await this.loadModuleData();
            await this.loadActivityData();
        } catch (error) {
            console.error('Error loading business data:', error);
        }
    }

    async loadOverviewData() {
        // Simulate API call for overview data
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Update overview widgets with business-specific data
        const businessData = this.getBusinessData();
        this.updateOverviewWidgets(businessData);
    }

    async loadModuleData() {
        // Simulate API call for module data
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Update module cards with business-specific data
        const moduleData = this.getModuleData();
        this.updateModuleCards(moduleData);
    }

    async loadActivityData() {
        // Simulate API call for activity data
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Activity data would be loaded here
        console.log('Activity data loaded for', this.currentBusiness);
    }

    getBusinessData() {
        const businessData = {
            luxe: {
                revenue: '$1,234,567',
                orders: '156',
                customers: '89',
                products: '234'
            },
            investments: {
                revenue: '$5,678,901',
                orders: '45',
                customers: '23',
                products: '12'
            },
            properties: {
                revenue: '$12,345,678',
                orders: '8',
                customers: '15',
                products: '24'
            },
            technology: {
                revenue: '$2,345,678',
                orders: '67',
                customers: '45',
                products: '89'
            }
        };
        
        return businessData[this.currentBusiness] || businessData.luxe;
    }

    getModuleData() {
        const moduleData = {
            luxe: {
                products: { count: '234', categories: '12' },
                clients: { count: '89', vip: '15' },
                transactions: { orders: '156', revenue: '$1.2M' },
                finances: { income: '$1.2M', expenses: '$234K' },
                staff: { count: '12', roles: '4' },
                tasks: { count: '23', projects: '8' },
                reports: { count: '15', templates: '8' }
            }
        };
        
        return moduleData[this.currentBusiness] || moduleData.luxe;
    }

    updateOverviewWidgets(data) {
        const widgets = document.querySelectorAll('.overview-widget .widget-value');
        const values = [data.revenue, data.orders, data.customers, data.products];
        
        widgets.forEach((widget, index) => {
            if (values[index]) {
                this.animateNumber(widget, values[index]);
            }
        });
    }

    updateModuleCards(data) {
        Object.keys(data).forEach(module => {
            const card = document.querySelector(`[data-module="${module}"]`);
            if (card) {
                const stats = card.querySelectorAll('.module-stats span');
                const moduleData = data[module];
                
                Object.values(moduleData).forEach((value, index) => {
                    if (stats[index]) {
                        stats[index].textContent = value;
                    }
                });
            }
        });
    }

    animateNumber(element, targetValue) {
        const startValue = 0;
        const duration = 1000;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentValue = Math.floor(startValue + (this.parseValue(targetValue) - startValue) * progress);
            element.textContent = this.formatValue(currentValue, targetValue);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    parseValue(value) {
        return parseInt(value.replace(/[^0-9]/g, ''));
    }

    formatValue(number, originalValue) {
        if (originalValue.includes('$')) {
            return '$' + number.toLocaleString();
        }
        return number.toLocaleString();
    }

    updateDataByDate(dateRange) {
        // Simulate updating data based on date filter
        console.log('Updating data for date range:', dateRange);
        
        // In a real application, this would make an API call
        // to get data for the selected date range
    }
}

// Global functions
function goBack() {
    window.location.href = 'dashboard.html';
}

function openModule(moduleName) {
    const dashboard = window.businessDashboard;
    dashboard.showModule(moduleName);
}

function closeModule() {
    const dashboard = window.businessDashboard;
    dashboard.closeModule();
}

// Module content templates
const moduleTemplates = {
    products: {
        title: 'Products & Assets Management',
        content: `
            <div class="module-content">
                <div class="module-header">
                    <h3>Product Inventory</h3>
                    <button class="btn-primary" onclick="addProduct()">
                        <i class="fas fa-plus"></i>
                        Add Product
                    </button>
                </div>
                
                <div class="data-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Luxury Watch Collection</td>
                                <td>Watches</td>
                                <td>$15,000</td>
                                <td>25</td>
                                <td><span class="status active">Active</span></td>
                                <td>
                                    <button class="btn-small" onclick="editProduct(1)">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="btn-small danger" onclick="deleteProduct(1)">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Designer Handbag</td>
                                <td>Bags</td>
                                <td>$8,500</td>
                                <td>12</td>
                                <td><span class="status active">Active</span></td>
                                <td>
                                    <button class="btn-small" onclick="editProduct(2)">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="btn-small danger" onclick="deleteProduct(2)">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    
    clients: {
        title: 'Clients & Investors Management',
        content: `
            <div class="module-content">
                <div class="module-header">
                    <h3>Customer Database</h3>
                    <button class="btn-primary" onclick="addClient()">
                        <i class="fas fa-plus"></i>
                        Add Client
                    </button>
                </div>
                
                <div class="data-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Type</th>
                                <th>Total Spent</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Smith</td>
                                <td>john@example.com</td>
                                <td>+1 555-0123</td>
                                <td><span class="status vip">VIP</span></td>
                                <td>$125,000</td>
                                <td>
                                    <button class="btn-small" onclick="editClient(1)">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="btn-small danger" onclick="deleteClient(1)">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    
    transactions: {
        title: 'Transaction History',
        content: `
            <div class="module-content">
                <div class="module-header">
                    <h3>Sales & Transactions</h3>
                    <button class="btn-primary" onclick="exportTransactions()">
                        <i class="fas fa-download"></i>
                        Export
                    </button>
                </div>
                
                <div class="data-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#LUX-2024-001</td>
                                <td>John Smith</td>
                                <td>Luxury Watch</td>
                                <td>$15,000</td>
                                <td>2024-01-15</td>
                                <td><span class="status completed">Completed</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    }
};

// Extend BusinessDashboard class with module functionality
BusinessDashboard.prototype.showModule = function(moduleName) {
    const template = moduleTemplates[moduleName];
    if (template) {
        this.modalTitle.textContent = template.title;
        this.modalBody.innerHTML = template.content;
        this.modal.classList.add('show');
    }
};

BusinessDashboard.prototype.closeModule = function() {
    this.modal.classList.remove('show');
};

// Initialize business dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.businessDashboard = new BusinessDashboard();
});

// Add CSS for module content
const style = document.createElement('style');
style.textContent = `
    .module-content {
        padding: 1rem 0;
    }
    
    .module-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    
    .module-header h3 {
        font-size: 1.2rem;
        font-weight: 600;
        color: #333;
    }
    
    .data-table {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    .data-table table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .data-table th,
    .data-table td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #eee;
    }
    
    .data-table th {
        background: #f8f9fa;
        font-weight: 600;
        color: #333;
        font-size: 0.9rem;
    }
    
    .data-table td {
        font-size: 0.9rem;
        color: #666;
    }
    
    .status {
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .status.active {
        background: rgba(76, 175, 80, 0.1);
        color: #4caf50;
    }
    
    .status.vip {
        background: rgba(255, 193, 7, 0.1);
        color: #ffc107;
    }
    
    .status.completed {
        background: rgba(76, 175, 80, 0.1);
        color: #4caf50;
    }
    
    .btn-small {
        background: none;
        border: 1px solid #ddd;
        color: #666;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 0.25rem;
        transition: all 0.3s ease;
    }
    
    .btn-small:hover {
        background: #f8f9fa;
        border-color: #0078d4;
        color: #0078d4;
    }
    
    .btn-small.danger:hover {
        background: #f8f9fa;
        border-color: #f44336;
        color: #f44336;
    }
    
    .module-card.edit-mode {
        border: 2px solid #0078d4;
    }
    
    .edit-btn {
        display: none;
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(0, 120, 212, 0.1);
        border: 1px solid rgba(0, 120, 212, 0.2);
        color: #0078d4;
        padding: 0.5rem;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .edit-btn:hover {
        background: rgba(0, 120, 212, 0.2);
    }
    
    .module-card.edit-mode .edit-btn {
        display: flex;
    }
`;
document.head.appendChild(style);