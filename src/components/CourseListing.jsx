import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseCard from "./CourseCard";
import { fetchCourses } from "../actions/courseActions";

function CourseListing() {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      <h1>Course Listing</h1>
      {Array.isArray(courses) &&
        courses.map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
    </div>
  );
}

export default CourseListing;
