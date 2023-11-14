import { cources } from "../assets/data/data";
import CourseCard from "./CourseCard";


function Content() {
  return (
    <>
      <div className="d-flex container">
        {cources.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      
    </>
  );
}
export default Content;
