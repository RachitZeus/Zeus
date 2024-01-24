const coursesData = [
    {
        "id":1,
        "name": "Accleration",
        "subject": "Physics",
        "grade": 7,
        "plus":2,
        "units": 4,
        "lessons": 18,
        "topics": 24,
        "students": 50,
        "startDate": "21-Jan-2020",
        "endDate": "21-Aug-2020",
        "img":"/Assets/imageMask-1.svg",
        "classes": ["Mr. Frank's Class A", "Mr. Frank's Class B"]
    },
    {
        "id":2,
        "name": "Displacement, Velocity and Speed",
        "subject": "Physics",
        "plus":3,
        "grade": 6,
        "units": 4,
        "lessons": 15,
        "topics": 20,
        "img":"/Assets/imageMask-1.png",
        "classes": []
    },
    {
        "id":3,
        "name": "Introduction to Biology: Micro organisms and how they affec...",
        "subject": "Biology",
        "grade": 7,
        "plus":1,
        "units": 5,
        "lessons": 16,
        "topics": 22,
        "students": 300,
        "img":"/Assets/imageMask-3.png",
        "classes": ["All Classes"]
    },
    {
        "id":4,
        "name": "Introduction to High School Mathematics",
        "subject": "Mathematics",
        "plus":"3",
        "grade": 8,
        "students": 300,
        "startDate": "21-Jan-2020",
        "endDate": "21-Aug-2020",
        "img":"/Assets/imageMask-2.png",
        "classes": ["Mr. Frank's Class A", "Mr. Frank's Class B"]
    }
];

function populateCourseData() {
    const coursesContainer = document.getElementById('courses-container');
    
    coursesData.forEach(course => {
        
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        courseCard.innerHTML = `
            <div class="course">
                 
                <img src="${course.img}" alt="" class="course-img">
                <div class="courses-details">
                    <div class="line-1">
                        <div class="course-name">${course.name}</div> 
                       ${course.id==4?'<img class="star-disabled" src="favourite.svg" alt="">':'<img class="star-disabled" src="./Assets/favourite.svg" alt="">'} 
                    </div>
                    <div class="line-2 regular-course-label">
                        ${course.subject}
                        <div class="subject">|</div>
                        Grade
                        <div class="result">${course.grade}</div>
                        <div class="add">+${course.plus}</div>
                    </div>
                    <div class="line-3 regular-course-label">
                        <div class="number-line-2 lm">${course.units ? `${course.units} <span class="custom-lessons">Units</span>` : ''}</div>
                    
                        <div class="number-line-2 lm">${course.lessons ? `${course.lessons} <span class="custom-lessons">Lessons</span>` : ''}</div>


                        
                        <div class="number-line-2 lm">${course.topics ? `${course.topics} <span class="custom-lessons">Topics</span>` : ''}</div>
                        
                    </div>
                    <select name="" id="" class="course-class-input">
                ${course.classes ? 
                    course.classes.length > 0 ? 
                        course.classes.map(className => `<option value="${className}">${className}</option>`).join('') 
                        : '<option value="">No classes</option>'
                    : ''}
            </select>
                    
                   
                    <div class="line-4 regular-course-label">
                        <div>${course.students ? course.students + ' Students' : ''}</div>
                        <div class="subject">|</div>
                        <div>${course.startDate ? course.startDate : ''}</div>
                        <div class="subject">-</div>
                        <div>${course.endDate ? course.endDate : ''}</div>
                    </div>
                </div>
            </div>
        
            <div class="courses-icons">
                <button class="img-button"><img src="preview.svg" alt=""></button>
                <button class="img-button"><img src="manage course.svg" alt="" class="${course.id==1 || course.id==4 ? '' : 'disable'}"></button>
                <button class="img-button"> <img src="grade submissions.svg" alt="" class="${course.id==1 || course.id==4 ? '' : 'disable'}"></button>
                <button class="img-button"> <img src="reports.svg" alt=""></button>
            </div>
        
        `;

        coursesContainer.appendChild(courseCard);
    });
}

// Call the function to populate data when the page loads
window.onload = populateCourseData;