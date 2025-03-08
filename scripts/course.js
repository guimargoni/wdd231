const courses = [
    { code: 'CSE 110', category: 'CSE' },
    { code: 'WDD 130', category: 'WDD' },
    { code: 'CSE 111', category: 'CSE' },
    { code: 'CSE 210', category: 'CSE' },
    { code: 'WDD 131', category: 'WDD' },
    { code: 'WDD 231', category: 'WDD' }
];

function displayCourses(filter) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';

    const filteredCourses = filter ? courses.filter(course => course.category === filter) : courses;

    filteredCourses.forEach(course => {
        const button = document.createElement('button');
        button.className = `course ${course.category.toLowerCase()}`;
        button.textContent = course.code;
        courseList.appendChild(button);
    });
}

document.getElementById('filter-all').addEventListener('click', () => displayCourses(null));
document.getElementById('filter-cse').addEventListener('click', () => displayCourses('CSE'));
document.getElementById('filter-wdd').addEventListener('click', () => displayCourses('WDD'));

displayCourses(null);