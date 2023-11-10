import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CourseCard({ course }) {
  return (
    <div>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <Link to={`/course/${course.id}`}>View Details</Link>
    </div>
  );
}
CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    enrollmentStatus: PropTypes.string.isRequired,
  }).isRequired,
};
export default CourseCard;
