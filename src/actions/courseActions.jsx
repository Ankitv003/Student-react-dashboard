import axios from "axios";

export const fetchCourses = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/courses");
    dispatch({ type: "FETCH_COURSES", payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
