import Angular from './img/angular.png';
import Node from './img/node.png';
import Js from './img/js.png';
import Python from './img/python.png';
import Reactt from './img/react.png';
import React from 'react';
import './Course.css';

const courseMap = {
  Angular: Angular,

  Node: Node,
  Js: Js,
  Python: Python,
  React: Reactt,
};

function Course({ courseName }) {
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
