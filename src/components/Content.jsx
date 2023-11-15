// import { cources } from "../assets/data/data";
// import CourseCard from "./CourseCard";

import Counter from "./counter/Counter";


function Content() {
  return (
    <>
      <div className="d-flex container">
        <Counter />
        {/* {cources.map(course => (
          <CourseCard key={course.id} course={course} />
        ))} */}
      </div>
      
    </>
  );
}
export default Content;
