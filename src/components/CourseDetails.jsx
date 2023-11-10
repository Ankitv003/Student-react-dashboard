import { useSelector } from "react-redux";
import PropTypes from "prop-types";
const CourseDetails = ({ match }) => {
  const courseId = match.params.courseId;

  const selectedCourse = useSelector((state) =>
    state.courses.find((course) => course.id === parseInt(courseId))
  );

  if (!selectedCourse) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h2>{selectedCourse.name}</h2>
      <p>Description: {selectedCourse.description}</p>
      <p>Enrollment Status: {selectedCourse.enrollmentStatus}</p>
      <p>Course Duration: {selectedCourse.duration}</p>
      <p>Schedule: {selectedCourse.schedule}</p>
      <p>Location: {selectedCourse.location}</p>
      <p>Pre-requisites: {selectedCourse.prerequisites.join(", ")}</p>

      <details>
        <summary>Syllabus</summary>
        <ul>
          {selectedCourse.syllabus.map((item) => (
            <li key={item.week}>
              <strong>Week {item.week}:</strong> {item.topic} - {item.content}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};
CourseDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      courseId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CourseDetails;
