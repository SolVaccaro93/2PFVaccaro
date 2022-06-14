import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Courses } from 'src/app/shared/interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Courses[] = [
    {id: 1, course: 'Angular', professor: 'Andrea', email:'agarcia@mail.com'},
    {id:2, course: 'React', professor: 'Luisina Acosta', email:'jgarcia@mail.com'},
    {id:3, course: 'VueJS', professor: 'Santi Requelme', email:'rquelme@mail.com'},
    {id:4, course: 'Node-JS', professor: 'Hernan Chaz', email:'hchaz@mail.com'},
    {id:5, course: 'Python', professor: 'Marcos Esteban', email:'mtavares@mail.com'},
    {id:6, course: 'Ingles', professor: 'Milena Giunti', email:'mgiunti@outlook.mail.com'},
   
  ];

  courseToEdit!: Courses | null;

  getCourses():Observable<Courses[]> {
    return of(this.courses);
  }

  setCourses(courses:Courses[]): Promise<any> {
    return new Promise((resolve, reject) => {
      if(courses.length > 0 || courses !== null) {
        this.courses = courses;
        return resolve({ message: 'Se actualizó la información de los cursos' })
      } else {
        reject({ message: 'No se pudo actualizar la información de los cursos' })
      }
    });
  }

  getCourseToEdit():Observable<Courses | null> {
    return of(this.courseToEdit)
  }

  setCourseToEdit(course: Courses | null) {
    return new Promise((resolve, reject) => {
      if(course || course === null) {
        this.courseToEdit = course;
        return resolve(true)
      } else {
        return reject({ message: ' No se pudo setear el curso a editar' })
      }
    });
  }
  
}
