interface Course{
    title : string;
    students : number;
    isPublished : boolean;
}

const courses : Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

const getPopularCourses = (courses:Course[],minStudents:number):Course[]=>{
    const newCourse:Course[] = []
    for(let course of courses){
        if(course.students > minStudents && course.isPublished==true){
            // console.log(course);
            newCourse.push(course);
        }
    }
    return newCourse;
}

console.log(getPopularCourses(courses,80));
