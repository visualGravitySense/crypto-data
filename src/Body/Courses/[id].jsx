import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Course Details for {id}</h1>
      {/* Course video preview, curriculum, instructor info */}
    </div>
  );
};

export default CourseDetail;
