import { useState } from "react";
import API from "../../services/api";

function Dashboard() {
  const [job, setJob] = useState({
    companyName: "",
    role: "",
    package: "",
    location: "",
    description: "",
    requirements: "",
    deadline: "",
  });

  const addJob = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/jobs/add",
        job,
        {
          headers: {
            Authorization:
              localStorage.getItem(
                "token"
              ),
          },
        }
      );

      alert("Job Added");
    } catch (err) {
      alert("Failed");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Add New Job</h1>

        <form onSubmit={addJob}>
          {Object.keys(job).map(
            (key) => (
              <input
                key={key}
                placeholder={key}
                onChange={(e) =>
                  setJob({
                    ...job,
                    [key]:
                      e.target.value,
                  })
                }
              />
            )
          )}

          <button>
            Publish Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;