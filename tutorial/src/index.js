import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!</h1>

const name = "tomer abrashkin"
const user = {
  firstname: "tomer",
  lastname: "abrashkin"
};
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const presentme = (
  <h1>Hello, Mr. {user.firstname +" " + user.lastname} !</h1>
);

function clock(){
  const time_element = (
    <div>
      <h1>It is {new Date().getSeconds()}:{new Date().getMinutes()}:{new Date().getHours()} in israel</h1>
    </div>
  );
  ReactDOM.render(time_element,document.getElementById('root'));
}

setInterval(clock,1000)

// ReactDOM.render(myfirstelement,document.getElementById('root'));
// ReactDOM.render(presentme, document.getElementById('root'));
// ReactDOM.render(element, document.getElementById('root'));

