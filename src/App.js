import { useState } from 'react';
import './App.css';
import Course from './Course';

// to get a random course
function getRandomCourse() {
  const courseArray = ['Angular', 'Node', 'JS', 'Python', 'React'];
  // generates random number
  const randomNumber = Math.floor(Math.random() * courseArray.length);
  // return the course generated randomly
  return courseArray[randomNumber];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleCourses = () => {
    // adds new course to courseArray and saves the courses that have alredy been there
    setCourses([...courses, getRandomCourse()]);
    // write the arrayCourse latest version on the console
    console.log(courses);
  };
  //mapping
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <div className="App">
      <button className="appButton" onClick={handleCourses}>
        Kurs Ekle
      </button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
