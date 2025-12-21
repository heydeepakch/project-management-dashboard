import { useState } from "react";
import { useProjects } from "../hooks/useProjects";
import { useDebounce } from "../hooks/useDebounce";
import TaskItem from "../components/TaskItem";
import type { TaskStatus } from "../types";

function Projects() {
  const {
    projects,
    loading,
    error,
    addProject,
    deleteProject,
    addTask,
    updateTaskStatus,
    deleteTask,
  } = useProjects();

  const [projectName, setProjectName] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const debouncedTaskTitle = useDebounce(taskTitle, 500);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Projects</h1>

      <input
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Project name"
      />
      <button
        onClick={() => {
          addProject(projectName);
          setProjectName("");
        }}
      >
        Add Project
      </button>

      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <button onClick={() => setSelectedProjectId(p.id)}>{p.name}</button>
            <button
              onClick={() => {
                if (selectedProjectId === p.id) {
                  setSelectedProjectId(null);
                }
                deleteProject(p.id);
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {selectedProject && (
        <>
          <h2>Tasks for {selectedProject.name}</h2>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Task title"
          />
          <button
            onClick={() => {
              if (!debouncedTaskTitle.trim()) return;
              if (!selectedProjectId) return;
              addTask(selectedProjectId, debouncedTaskTitle);
              setTaskTitle("");
            }}
          >
            Add Task
          </button>

          {selectedProject.tasks.length === 0 ? (
            <p>No tasks yet. Add one to get started!</p>
          ) : (
            <ul>
              {selectedProject.tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onStatusChange={(id: string, status: TaskStatus) =>
                    updateTaskStatus(selectedProject.id, id, status)
                  }
                  onDelete={(id: string) => deleteTask(selectedProject.id, id)}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Projects;
