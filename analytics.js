// Advanced Analytics & Reporting System for Sadat Group
class AnalyticsSystem {
    constructor() {
        this.metrics = {};
        this.reports = [];
        this.charts = {};
        this.init();
    }

    init() {
        this.loadMetrics();
        this.setupRealTimeUpdates();
        this.createDashboardWidgets();
    }

    // Load initial metrics
    async loadMetrics() {
        try {
            // Simulate API call for metrics
            const response = await this.fetchMetrics();
            this.metrics = response;
            this.updateDashboard();
        } catch (error) {
            console.error('Failed to load metrics:', error);
        }
    }

    // Fetch metrics from server
    async fetchMetrics() {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return {
            revenue: {
                total: 2450000,
                monthly: 185000,
                weekly: 45000,
                daily: 6500,
                growth: 12.5
            },
            sales: {
                total: 1250,
                today: 45,
                thisWeek: 320,
                thisMonth: 1250,
                growth: 8.3
            },
            clients: {
                total: 450,
                active: 380,
                new: 25,
                churn: 5,
                growth: 15.2
            },
            tasks: {
                total: 180,
                completed: 145,
                pending: 35,
                overdue: 8,
                completion: 80.5
            },
            businessUnits: {
                'Sadat Luxe': {
                    revenue: 1200000,
                    growth: 18.5,
                    clients: 180,
                    products: 45
                },
                'Sadat Investments': {
                    revenue: 850000,
                    growth: 22.1,
                    clients: 120,
                    products: 25
                },
                'Sadat Properties': {
                    revenue: 400000,
                    growth: 15.8,
                    clients: 150,
                    products: 30
                }
            }
        };
    }

    // Setup real-time updates
    setupRealTimeUpdates() {
        // Update metrics every 30 seconds
        setInterval(() => {
            this.updateRealTimeMetrics();
        }, 30000);

        // Update charts every minute
        setInterval(() => {
            this.updateCharts();
        }, 60000);
    }

    // Update real-time metrics
    updateRealTimeMetrics() {
        // Simulate real-time data updates
        this.metrics.revenue.daily += Math.floor(Math.random() * 100);
        this.metrics.sales.today += Math.floor(Math.random() * 3);
        this.metrics.tasks.completed += Math.floor(Math.random() * 2);

        this.updateDashboard();
    }

    // Create dashboard widgets
    createDashboardWidgets() {
        this.createRevenueWidget();
        this.createSalesWidget();
        this.createClientsWidget();
        this.createTasksWidget();
        this.createBusinessUnitWidgets();
    }

    // Create revenue widget
    createRevenueWidget() {
        const widget = document.getElementById('revenueWidget');
        if (widget) {
            widget.innerHTML = `
                <div class="widget-header">
                    <h3>Total Revenue</h3>
                    <i class="fas fa-dollar-sign"></i>
                </div>
                <div class="widget-content">
                    <div class="metric-value">$${this.formatNumber(this.metrics.revenue.total)}</div>
                    <div class="metric-change ${this.metrics.revenue.growth >= 0 ? 'positive' : 'negative'}">
                        <i class="fas fa-${this.metrics.revenue.growth >= 0 ? 'arrow-up' : 'arrow-down'}"></i>
                        ${Math.abs(this.metrics.revenue.growth)}%
                    </div>
                </div>
                <div class="widget-footer">
                    <div class="metric-period">
                        <span>Today: $${this.formatNumber(this.metrics.revenue.daily)}</span>
                        <span>This Month: $${this.formatNumber(this.metrics.revenue.monthly)}</span>
                    </div>
                </div>
            `;
        }
    }

    // Create sales widget
    createSalesWidget() {
        const widget = document.getElementById('salesWidget');
        if (widget) {
            widget.innerHTML = `
                <div class="widget-header">
                    <h3>Today's Sales</h3>
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="widget-content">
                    <div class="metric-value">${this.metrics.sales.today}</div>
                    <div class="metric-change ${this.metrics.sales.growth >= 0 ? 'positive' : 'negative'}">
                        <i class="fas fa-${this.metrics.sales.growth >= 0 ? 'arrow-up' : 'arrow-down'}"></i>
                        ${Math.abs(this.metrics.sales.growth)}%
                    </div>
                </div>
                <div class="widget-footer">
                    <div class="metric-period">
                        <span>This Week: ${this.metrics.sales.thisWeek}</span>
                        <span>This Month: ${this.metrics.sales.thisMonth}</span>
                    </div>
                </div>
            `;
        }
    }

    // Create clients widget
    createClientsWidget() {
        const widget = document.getElementById('clientsWidget');
        if (widget) {
            widget.innerHTML = `
                <div class="widget-header">
                    <h3>Active Clients</h3>
                    <i class="fas fa-users"></i>
                </div>
                <div class="widget-content">
                    <div class="metric-value">${this.metrics.clients.active}</div>
                    <div class="metric-change ${this.metrics.clients.growth >= 0 ? 'positive' : 'negative'}">
                        <i class="fas fa-${this.metrics.clients.growth >= 0 ? 'arrow-up' : 'arrow-down'}"></i>
                        ${Math.abs(this.metrics.clients.growth)}%
                    </div>
                </div>
                <div class="widget-footer">
                    <div class="metric-period">
                        <span>New: ${this.metrics.clients.new}</span>
                        <span>Total: ${this.metrics.clients.total}</span>
                    </div>
                </div>
            `;
        }
    }

    // Create tasks widget
    createTasksWidget() {
        const widget = document.getElementById('tasksWidget');
        if (widget) {
            widget.innerHTML = `
                <div class="widget-header">
                    <h3>Pending Tasks</h3>
                    <i class="fas fa-tasks"></i>
                </div>
                <div class="widget-content">
                    <div class="metric-value">${this.metrics.tasks.pending}</div>
                    <div class="metric-change">
                        <span class="completion-rate">${this.metrics.tasks.completion}%</span>
                    </div>
                </div>
                <div class="widget-footer">
                    <div class="metric-period">
                        <span>Completed: ${this.metrics.tasks.completed}</span>
                        <span>Overdue: ${this.metrics.tasks.overdue}</span>
                    </div>
                </div>
            `;
        }
    }

    // Create business unit widgets
    createBusinessUnitWidgets() {
        Object.entries(this.metrics.businessUnits).forEach(([unit, data]) => {
            this.createBusinessUnitWidget(unit, data);
        });
    }

    // Create individual business unit widget
    createBusinessUnitWidget(unitName, data) {
        const container = document.querySelector('.business-overview');
        if (container) {
            const widget = document.createElement('div');
            widget.className = 'business-unit-widget card';
            widget.innerHTML = `
                <div class="widget-header">
                    <h3>${unitName}</h3>
                    <i class="fas fa-building"></i>
                </div>
                <div class="widget-content">
                    <div class="metric-row">
                        <span class="metric-label">Revenue:</span>
                        <span class="metric-value">$${this.formatNumber(data.revenue)}</span>
                    </div>
                    <div class="metric-row">
                        <span class="metric-label">Growth:</span>
                        <span class="metric-change ${data.growth >= 0 ? 'positive' : 'negative'}">
                            ${data.growth}%
                        </span>
                    </div>
                    <div class="metric-row">
                        <span class="metric-label">Clients:</span>
                        <span class="metric-value">${data.clients}</span>
                    </div>
                    <div class="metric-row">
                        <span class="metric-label">Products:</span>
                        <span class="metric-value">${data.products}</span>
                    </div>
                </div>
            `;
            container.appendChild(widget);
        }
    }

    // Update dashboard
    updateDashboard() {
        this.createRevenueWidget();
        this.createSalesWidget();
        this.createClientsWidget();
        this.createTasksWidget();
    }

    // Update charts
    updateCharts() {
        // Update any active charts
        Object.values(this.charts).forEach(chart => {
            if (chart && typeof chart.update === 'function') {
                chart.update();
            }
        });
    }

    // Generate custom report
    async generateCustomReport(filters) {
        try {
            const report = {
                id: this.generateReportId(),
                name: filters.name || 'Custom Report',
                filters,
                data: await this.fetchReportData(filters),
                generatedAt: new Date().toISOString(),
                generatedBy: this.getCurrentUser()
            };

            this.reports.push(report);
            return report;
        } catch (error) {
            console.error('Failed to generate report:', error);
            throw error;
        }
    }

    // Fetch report data
    async fetchReportData(filters) {
        // Simulate API call for report data
        await new Promise(resolve => setTimeout(resolve, 2000));

        return {
            summary: {
                totalRevenue: 2450000,
                totalSales: 1250,
                totalClients: 450,
                averageOrderValue: 1960
            },
            trends: {
                revenue: [180000, 195000, 210000, 185000, 200000, 220000, 185000],
                sales: [280, 310, 290, 320, 350, 380, 320],
                clients: [420, 435, 450, 465, 480, 495, 450]
            },
            breakdown: {
                byBusinessUnit: {
                    'Sadat Luxe': { revenue: 1200000, percentage: 49 },
                    'Sadat Investments': { revenue: 850000, percentage: 35 },
                    'Sadat Properties': { revenue: 400000, percentage: 16 }
                },
                byMonth: {
                    'January': 180000,
                    'February': 195000,
                    'March': 210000,
                    'April': 185000,
                    'May': 200000,
                    'June': 220000,
                    'July': 185000
                }
            }
        };
    }

    // Export report
    exportReport(reportId, format = 'pdf') {
        const report = this.reports.find(r => r.id === reportId);
        if (!report) {
            throw new Error('Report not found');
        }

        switch (format.toLowerCase()) {
            case 'pdf':
                return this.exportToPDF(report);
            case 'csv':
                return this.exportToCSV(report);
            case 'excel':
                return this.exportToExcel(report);
            default:
                throw new Error('Unsupported export format');
        }
    }

    // Export to PDF
    exportToPDF(report) {
        // Simulate PDF generation
        console.log('Generating PDF report:', report.name);
        
        // In production, use a library like jsPDF or send to server
        const pdfContent = this.generatePDFContent(report);
        
        // Create download link
        const blob = new Blob([pdfContent], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${report.name}_${new Date().toISOString().split('T')[0]}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
    }

    // Export to CSV
    exportToCSV(report) {
        const csvContent = this.generateCSVContent(report);
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${report.name}_${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
        URL.revokeObjectURL(url);
    }

    // Export to Excel
    exportToExcel(report) {
        // Simulate Excel export
        console.log('Generating Excel report:', report.name);
        
        // In production, use a library like SheetJS
        const excelContent = this.generateExcelContent(report);
        
        const blob = new Blob([excelContent], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${report.name}_${new Date().toISOString().split('T')[0]}.xlsx`;
        link.click();
        URL.revokeObjectURL(url);
    }

    // Generate PDF content
    generatePDFContent(report) {
        return `
            Sadat Group Business Report
            ${report.name}
            Generated: ${new Date(report.generatedAt).toLocaleDateString()}
            
            Summary:
            - Total Revenue: $${this.formatNumber(report.data.summary.totalRevenue)}
            - Total Sales: ${report.data.summary.totalSales}
            - Total Clients: ${report.data.summary.totalClients}
            - Average Order Value: $${this.formatNumber(report.data.summary.averageOrderValue)}
        `;
    }

    // Generate CSV content
    generateCSVContent(report) {
        let csv = 'Metric,Value\n';
        csv += `Total Revenue,${report.data.summary.totalRevenue}\n`;
        csv += `Total Sales,${report.data.summary.totalSales}\n`;
        csv += `Total Clients,${report.data.summary.totalClients}\n`;
        csv += `Average Order Value,${report.data.summary.averageOrderValue}\n`;
        return csv;
    }

    // Generate Excel content
    generateExcelContent(report) {
        // Simplified Excel content (in production, use proper Excel library)
        return this.generateCSVContent(report);
    }

    // Schedule automated reports
    scheduleReport(reportConfig) {
        const schedule = {
            id: this.generateScheduleId(),
            reportConfig,
            frequency: reportConfig.frequency, // daily, weekly, monthly
            recipients: reportConfig.recipients,
            lastSent: null,
            nextSend: this.calculateNextSend(reportConfig.frequency),
            active: true
        };

        // Store schedule
        this.schedules = this.schedules || [];
        this.schedules.push(schedule);

        // Setup automated sending
        this.setupAutomatedSending(schedule);

        return schedule;
    }

    // Calculate next send date
    calculateNextSend(frequency) {
        const now = new Date();
        switch (frequency) {
            case 'daily':
                return new Date(now.getTime() + 24 * 60 * 60 * 1000);
            case 'weekly':
                return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
            case 'monthly':
                return new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
            default:
                return now;
        }
    }

    // Setup automated sending
    setupAutomatedSending(schedule) {
        // In production, this would be handled by a cron job or scheduler
        console.log(`Scheduled report: ${schedule.reportConfig.name} - ${schedule.frequency}`);
    }

    // Predictive analytics
    predictRevenue(historicalData, months = 3) {
        // Simple linear regression for prediction
        const n = historicalData.length;
        const sumX = (n * (n - 1)) / 2;
        const sumY = historicalData.reduce((sum, val) => sum + val, 0);
        const sumXY = historicalData.reduce((sum, val, index) => sum + (index * val), 0);
        const sumX2 = (n * (n - 1) * (2 * n - 1)) / 6;

        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        const predictions = [];
        for (let i = 0; i < months; i++) {
            predictions.push(Math.max(0, slope * (n + i) + intercept));
        }

        return predictions;
    }

    // Customer segmentation
    segmentCustomers(customerData) {
        const segments = {
            highValue: [],
            mediumValue: [],
            lowValue: [],
            atRisk: []
        };

        customerData.forEach(customer => {
            const value = customer.totalSpent || 0;
            const lastPurchase = new Date(customer.lastPurchase);
            const daysSincePurchase = (new Date() - lastPurchase) / (1000 * 60 * 60 * 24);

            if (value > 10000) {
                segments.highValue.push(customer);
            } else if (value > 5000) {
                segments.mediumValue.push(customer);
            } else if (value > 1000) {
                segments.lowValue.push(customer);
            }

            if (daysSincePurchase > 90) {
                segments.atRisk.push(customer);
            }
        });

        return segments;
    }

    // Calculate KPIs
    calculateKPIs() {
        const revenue = this.metrics.revenue;
        const sales = this.metrics.sales;
        const clients = this.metrics.clients;

        return {
            revenueGrowth: revenue.growth,
            customerRetention: ((clients.total - clients.churn) / clients.total) * 100,
            averageOrderValue: revenue.total / sales.total,
            customerLifetimeValue: revenue.total / clients.total,
            salesConversionRate: (sales.total / (sales.total + 100)) * 100 // Simplified
        };
    }

    // Utility functions
    formatNumber(num) {
        return new Intl.NumberFormat('en-US').format(num);
    }

    generateReportId() {
        return 'report_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    generateScheduleId() {
        return 'schedule_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    getCurrentUser() {
        const session = JSON.parse(sessionStorage.getItem('sadatGroupSession') || '{}');
        return session.username || 'Unknown';
    }
}

// Initialize analytics system
const analytics = new AnalyticsSystem();