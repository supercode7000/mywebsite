import React from 'react';
const date = new Date()
let hours = date.getHours();
let timeOfDay;
let monthNow;
let dayNow;
let yearNow
if (hours < 12) {
    timeOfDay = "Good morning"
} else {
    timeOfDay = "Good afternoon"
}
const styleH1 = {
    color: '#464820',
    letterSpacing: 3,
    fontSize: "40px"
}
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
console.log(date.getDay()) //index array
console.log(date.getMonth()) // index array
console.log(date.getFullYear())
monthNow = months[date.getMonth()];
dayNow = weekday[date.getDay()];
yearNow = date.getFullYear()
const monthStyle = {
    color: "green",
    fontSize: "40px"
}
const yearStyle = {
    color: "green",
    fontSize: "3em"
}
const SayHi = () => {
    return (
        <div>
            <h1 className="" style={styleH1}>SayHi</h1>
            <h2 style={{ color: "red", fontSize: 50 }}>{timeOfDay}</h2>
            <h2>Aufgabe</h2>
            <p style={{ color: "blue", fontSize: 30 }}>today is {dayNow}</p>
            <p style={monthStyle}>this month is {monthNow}</p>
            <p style={yearStyle}>this year is {yearNow}</p>
        </div >
    );
}

export default SayHi;