import { useState } from "react";
import AddTimesheet from "./AddTimesheet";
import Reports from "./Reports";
import Profile from "./Profile";

function EmployeeDashboard({ user, onLogout }) {
  const [showTimesheetForm, setShowTimesheetForm] = useState(false);
  const [currentView, setCurrentView] = useState("dashboard");

  return (
    <div className="dashboard">

      {/* ================= SIDEBAR ================= */}

      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">
            ⏱
          </div>

          <span>
            Timesheet
          </span>
        </div>


        <nav>

          <button 
            className={`nav-item ${currentView === "dashboard" ? "active" : ""}`}
            onClick={() => setCurrentView("dashboard")}
          >
            🏠 Dashboard
          </button>

          <button
            className="nav-item"
            onClick={() => setShowTimesheetForm(true)}
          >
            📝 Timesheet
          </button>

          <button 
            className={`nav-item ${currentView === "reports" ? "active" : ""}`}
            onClick={() => setCurrentView("reports")}
          >
            📊 Reports
          </button>

          <button 
            className={`nav-item ${currentView === "profile" ? "active" : ""}`}
            onClick={() => setCurrentView("profile")}
          >
            ⚙️ Profile
          </button>

        </nav>


        <button
          className="logout-btn"
          onClick={onLogout}
        >
          🚪 Logout
        </button>

      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <main className="dashboard-main">

        {currentView === "dashboard" && (
          <>
            {/* ================= HEADER ================= */}

            <header className="dashboard-header">

          <div>
            <h1>
              Employee Dashboard
            </h1>

            <p>
              Track and manage your working hours
            </p>
          </div>


          <div className="user-info">

            <div className="avatar">

              {user?.name
                ? user.name.charAt(0).toUpperCase()
                : "U"}

            </div>


            <div className="user-details">

              <strong>
                {user?.name || "User"}
              </strong>

              <small>
                Employee
              </small>

            </div>

          </div>

        </header>


        {/* ================= WELCOME CARD ================= */}

        <section className="welcome-card">

          <div>

            <h2>
              Welcome back, {user?.name || "User"}! 👋
            </h2>

            <p>
              Here's an overview of your timesheet activity.
            </p>

          </div>


          <div className="welcome-icon">
            ⏰
          </div>

        </section>


        {/* ================= STATISTICS ================= */}

        <section className="stats-grid">


          {/* Total Hours */}

          <div className="stat-card">

            <div className="stat-icon blue">
              ⏱️
            </div>

            <div>

              <span>
                Total Hours
              </span>

              <h2>
                0.0
              </h2>

              <small>
                This month
              </small>

            </div>

          </div>


          {/* Timesheets */}

          <div className="stat-card">

            <div className="stat-icon purple">
              📝
            </div>

            <div>

              <span>
                Timesheets
              </span>

              <h2>
                0
              </h2>

              <small>
                Total entries
              </small>

            </div>

          </div>


          {/* Approved */}

          <div className="stat-card">

            <div className="stat-icon green">
              ✅
            </div>

            <div>

              <span>
                Approved
              </span>

              <h2>
                0
              </h2>

              <small>
                This month
              </small>

            </div>

          </div>


          {/* Pending */}

          <div className="stat-card">

            <div className="stat-icon orange">
              ⏳
            </div>

            <div>

              <span>
                Pending
              </span>

              <h2>
                0
              </h2>

              <small>
                Awaiting approval
              </small>

            </div>

          </div>

        </section>


        {/* ================= RECENT TIMESHEETS ================= */}

        <section className="timesheet-section">

          <div className="section-header">

            <div>

              <h2>
                Recent Timesheets
              </h2>

              <p>
                Your latest work entries
              </p>

            </div>


            <button
              className="add-btn"
              onClick={() => setShowTimesheetForm(true)}
            >
              + Add Timesheet
            </button>

          </div>


          {/* Empty State */}

          <div className="empty-state">

            <div className="empty-icon">
              📋
            </div>

            <h3>
              No timesheets yet
            </h3>

            <p>
              Start tracking your work by adding
              your first timesheet entry.
            </p>


            <button
              className="primary-btn"
              onClick={() => setShowTimesheetForm(true)}
            >
              + Add Your First Timesheet
            </button>

          </div>

        </section>

        {/* ================= ADD TIMESHEET MODAL ================= */}

        {showTimesheetForm && (

          <AddTimesheet
            onClose={() =>
              setShowTimesheetForm(false)
            }

            onSuccess={() => {

              setShowTimesheetForm(false);

              // Later we will reload the
              // timesheets from MongoDB here.

            }}
          />

        )}
          </>
        )}

        {currentView === "reports" && (
          <Reports user={user} />
        )}

        {currentView === "profile" && (
          <Profile user={user} />
        )}

      </main>

    </div>
  );
}

export default EmployeeDashboard;