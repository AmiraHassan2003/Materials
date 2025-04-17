import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [id, setId] = useState("");
  const [notFound, setNotFound] = useState(false); 

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5246/courses/${id}`)
      .then(() => {
        setCourses((prev) => prev.filter((c) => c.id !== id));
      })
      .catch((err) => console.error("Delete error:", err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5246/courses")
      .then((response) => {
        setCourses(response.data);
        setNotFound(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  useEffect(() => {
    if (id.trim() === "") {
      axios
        .get("http://localhost:5246/courses")
        .then((response) => {
          setCourses(response.data);
          setNotFound(false);
        })
        .catch((error) => {
          console.error("Error fetching courses:", error);
        });
      return;
    }

    axios
      .get(`http://localhost:5246/courses/${id}`)
      .then((response) => {
        if (response.data) {
          setCourses([response.data]);
          setNotFound(false);
        } else {
          setCourses([]);
          setNotFound(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching course by ID:", error);
        setCourses([]);
        setNotFound(true);
      });
  }, [id]);

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4 text-blue-600">Courses</h3>

      <div className="mb-4">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter ID to search"
          className="p-2 border border-gray-300 rounded w-full sm:w-64"
        />
      </div>

      {notFound ? (
        <p className="text-red-500">No course found with this ID.</p>
      ) : (
        <ul className="space-y-4">
          {courses.map((course, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h4>
              <div>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Description:</span>{" "}
                  {course.description}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Price:</span> ${course.price}
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="font-medium">Date:</span> {course.date}
                </p>

                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
