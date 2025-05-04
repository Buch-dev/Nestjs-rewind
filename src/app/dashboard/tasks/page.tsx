import React from "react";

function Tasks() {
  const tasks = [
    {
      id: 1,
      title: "Complete project report",
      description:
        "Prepare and submit the final project report for the client.",
      status: "In Progress",
      dueDate: "2025-05-10",
    },
    {
      id: 2,
      title: "Team meeting",
      description: "Discuss project milestones and upcoming deadlines.",
      status: "Pending",
      dueDate: "2025-05-05",
    },
    {
      id: 3,
      title: "Code review",
      description: "Review the latest pull requests and provide feedback.",
      status: "Completed",
      dueDate: "2025-05-03",
    },
    {
      id: 4,
      title: "Update documentation",
      description: "Add new API endpoints to the project documentation.",
      status: "In Progress",
      dueDate: "2025-05-08",
    },
    {
      id: 5,
      title: "Client presentation",
      description:
        "Prepare slides and present the project progress to the client.",
      status: "Pending",
      dueDate: "2025-05-12",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tasks</h1>
        <ul className="space-y-6">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-white rounded-lg shadow-md p-6 border-l-4"
              style={{
                borderColor:
                  task.status === "Completed"
                    ? "green"
                    : task.status === "In Progress"
                    ? "yellow"
                    : "red",
              }}
            >
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-gray-800">
                  {task.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{task.description}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Due Date: {task.dueDate}
                </p>
              </div>
              <section className="flex space-x-4">
                <p
                  className={`px-4 py-3 text-center text-sm rounded-full ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : task.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  Status: {task.status}
                </p>

                {/* Buttons */}
                <button className="px-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Edit
                </button>
                {task.status !== "Completed" && (
                  <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
                    Mark is Complete
                  </button>
                )}
                <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  Delete
                </button>
              </section>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
