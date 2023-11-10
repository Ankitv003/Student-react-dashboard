import { Routes, Route } from "react-router-dom";
import CourseListing from "./components/CourseListing";
import CourseDetails from "./components/CourseDetails";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CourseListing />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
      </Routes>
    </div>
  );
};

export default App;
