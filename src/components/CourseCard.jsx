/* eslint-disable react/prop-types */

import IsMyCource from "./isMyCource/IsMyCource";

const CourseCard = ({ course }) => {

const hours = Math.floor(course.duration / 3600);
const minutes = Math.floor((course.duration % 3600) / 60);

  return (
    <div className={`card ${course.isMyCource ? "my-course" : ""}`}>
      <div className="image__container">
        <img src={course.image} alt={course.title} />
        <div className="level">{course.level}</div>
      </div>
      <div className="course-info">
        <h3>{course.title}</h3>
        <div className="card__info">
          <div className="user">
            <img src={course.user.avatar} alt={course.user.name} />
            <p>{course.user.name}</p>
          </div>
          <div className="rating">
            <p>{course.rating}</p>
          </div>
        </div>
          {course.isMyCource && <IsMyCource finish={course.finishedModules} modules={course.modules}/>}
        <div className="card__info">
          <div>{course.students} Student</div>
          <div>{course.modules} Modules</div>
          <div>{hours}h {minutes}m</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
