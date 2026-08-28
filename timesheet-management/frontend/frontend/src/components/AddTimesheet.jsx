import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function AddTimesheet({ onClose, onSuccess }) {

  const [formData, setFormData] = useState({
    project: "",
    date: "",
    startTime: "",
    endTime: "",
    breakTime: 0,
    description: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${API_URL}/api/timesheets`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert(response.data.message);

      setFormData({
        project: "",
        date: "",
        startTime: "",
        endTime: "",
        breakTime: 0,
        description: ""
      });

      if (onSuccess) {
        onSuccess();
      }

      if (onClose) {
        onClose();
      }

    } catch (error) {

      console.error(
        "Timesheet error:",
        error
      );

      alert(
        error.response?.data?.message ||
        "Failed to create timesheet"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">

      <div className="timesheet-form">

        <div className="form-header">

          <div>
            <h2>Add Timesheet</h2>

            <p>
              Record your working hours
            </p>
          </div>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>
              Project
            </label>

            <input
              type="text"
              name="project"
              placeholder="Enter project name"
              value={formData.project}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label>
              Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

          </div>


          <div className="time-row">

            <div className="form-group">

              <label>
                Start Time
              </label>

              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>
                End Time
              </label>

              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          <div className="form-group">

            <label>
              Break Time (minutes)
            </label>

            <input
              type="number"
              name="breakTime"
              min="0"
              value={formData.breakTime}
              onChange={handleChange}
            />

          </div>


          <div className="form-group">

            <label>
              Work Description
            </label>

            <textarea
              name="description"
              placeholder="Describe the work you completed..."
              value={formData.description}
              onChange={handleChange}
              rows="4"
            />

          </div>


          <div className="form-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading
                ? "Submitting..."
                : "Submit Timesheet"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddTimesheet;