function Reports({ user }) {
  return (
    <div className="reports-container">
      <div className="reports-header">
        <h1>📊 Reports</h1>
        <p>View your timesheet analytics and statistics</p>
      </div>

      <div className="reports-grid">
        {/* Monthly Summary */}
        <div className="report-card">
          <div className="report-icon">📈</div>
          <div className="report-content">
            <h3>Monthly Summary</h3>
            <p className="stat-value">0 hours</p>
            <p className="stat-label">Total hours this month</p>
          </div>
        </div>

        {/* Weekly Overview */}
        <div className="report-card">
          <div className="report-icon">📅</div>
          <div className="report-content">
            <h3>Weekly Overview</h3>
            <p className="stat-value">0 hours</p>
            <p className="stat-label">Total hours this week</p>
          </div>
        </div>

        {/* Project Distribution */}
        <div className="report-card">
          <div className="report-icon">🎯</div>
          <div className="report-content">
            <h3>Project Distribution</h3>
            <p className="stat-value">0 projects</p>
            <p className="stat-label">Active projects</p>
          </div>
        </div>

        {/* Approval Status */}
        <div className="report-card">
          <div className="report-icon">✅</div>
          <div className="report-content">
            <h3>Approval Status</h3>
            <p className="stat-value">0 pending</p>
            <p className="stat-label">Awaiting approval</p>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="reports-section">
        <h2>Detailed Breakdown</h2>
        <div className="empty-state">
          <p>📋 No timesheet data available yet</p>
          <p className="small-text">
            Add timesheets to view detailed analytics and reports
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reports;
