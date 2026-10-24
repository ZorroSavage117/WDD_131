
/* Grade Conversion */

function convert(grade) {
    let points;

    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            return null;
    }

    return points;
}

// Array of letter grades
const grades = ['A', 'B', 'C', 'A', 'D'];

// map() converts each letter grade to grade points
const gradePoints = grades.map(convert);

// reduce() calculates the total grade points
const totalPoints = gradePoints.reduce((total, points) => total + points, 0);

// Calculate the average GPA
const gpa = totalPoints / gradePoints.length;

// Display the results
document.querySelector('#grades').innerHTML = `
    <p>Letter Grades: ${grades.join(', ')}</p>
    <p>Grade Points: ${gradePoints.join(', ')}</p>
    <p>Average GPA: ${gpa.toFixed(2)}</p>
`;

// Output to console
console.log('Letter Grades:', grades);
console.log('Grade Points:', gradePoints);
console.log('Average GPA:', gpa);


/* Fruit Array */

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

// filter() finds words shorter than 6 characters
const shortWords = words.filter(word => word.length < 6);

// map() gets the length of each word
const wordLengths = words.map(word => word.length);

// Display the results
document.querySelector('#fruits').innerHTML = `
    <p>Original Array: ${words.join(', ')}</p>
    <p>Short Words: ${shortWords.join(', ')}</p>
    <p>Word Lengths: ${wordLengths.join(', ')}</p>
`;

// Output to console
console.log('Original Words:', words);
console.log('Short Words:', shortWords);
console.log('Word Lengths:', wordLengths);


/* Student Array */

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first: 'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

// map() creates full names
const fullNames = students.map(student =>
    `${student.first} ${student.last}`
);

// sort() arranges students by last name
const sortedStudents = [...students].sort((a, b) =>
    a.last.localeCompare(b.last)
);

// Create HTML list using template literals
const studentList = sortedStudents.map(student =>
    `<li>${student.first} ${student.last}</li>`
).join('');

// Display the results
document.querySelector('#students').innerHTML = `
    <p>Student Names:</p>
    <ul>${studentList}</ul>
`;

// Output to console
console.log('Full Names:', fullNames);
console.log('Sorted Students:', sortedStudents);
