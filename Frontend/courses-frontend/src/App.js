import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import EditCourse from './Courses/EditCourse';
import ShowCourses from "./Courses/ShowCourses";
import AddCourse from "./Courses/AddCourse";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<ShowCourses />} />
        <Route path="/edit/:id" element={< EditCourse />} />
        <Route path="/add" element={< AddCourse />} />
      </Routes>
    </Router>
  )
}


export default App;
