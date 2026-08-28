import { useState } from "react";
import axios from "axios";

function Profile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem("token");
      
      // For now, just show success message
      // In a real app, you would send this to the backend
      alert("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      alert("Error updating profile: " + error.message);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>⚙️ Profile</h1>
        <p>Manage your account settings</p>
      </div>

      <div className="profile-content">
        {/* Profile Avatar Section */}
        <div className="profile-avatar-section">
          <div className="avatar-large">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="avatar-info">
            <h2>{user?.name || "User"}</h2>
            <p>{user?.email || "user@example.com"}</p>
            <p className="role-badge">Employee</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="profile-section">
          <div className="section-header">
            <h3>Account Information</h3>
            <button
              className="edit-btn"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {!isEditing ? (
            <div className="profile-details">
              <div className="detail-item">
                <label>Full Name</label>
                <p>{user?.name || "Not set"}</p>
              </div>
              <div className="detail-item">
                <label>Email Address</label>
                <p>{user?.email || "Not set"}</p>
              </div>
              <div className="detail-item">
                <label>Member Since</label>
                <p>{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleUpdateProfile} className="profile-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  disabled
                />
              </div>

              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter current password"
                />
              </div>

              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="primary-btn">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Account Stats */}
        <div className="profile-section">
          <h3>Account Statistics</h3>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-icon">📝</div>
              <div className="stat-info">
                <p className="stat-label">Total Timesheets</p>
                <p className="stat-value">0</p>
              </div>
            </div>

            <div className="stat-box">
              <div className="stat-icon">⏱️</div>
              <div className="stat-info">
                <p className="stat-label">Total Hours</p>
                <p className="stat-value">0.0</p>
              </div>
            </div>

            <div className="stat-box">
              <div className="stat-icon">✅</div>
              <div className="stat-info">
                <p className="stat-label">Approved</p>
                <p className="stat-value">0</p>
              </div>
            </div>

            <div className="stat-box">
              <div className="stat-icon">⏳</div>
              <div className="stat-info">
                <p className="stat-label">Pending</p>
                <p className="stat-value">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
