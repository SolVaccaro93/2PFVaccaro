import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from 'src/app/shared/interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentsData: Student[] = [ //Datos de los estudiantes
    {id: 1, name: 'Sol', lastname: 'Vaccaro', email: 'mvaccaro@gmail.com', birthday: new Date('1993, 11, 04'), cursos: [{id: 1, course: 'Angular' }, {id:2, course: 'React'}]},
    {id: 2, name: 'Momo', lastname: 'Cinno', email: 'mmoccino@gmail.com', birthday: new Date('2021, 07, 25'), cursos: [{id: 1, course: 'Angular' }, {id:4, course: 'Node-JS'}]},
    {id: 3, name: 'Rodrigo', lastname: 'Lochi', email: 'rlochi@gmail.com', birthday: new Date('1993, 02, 17'), cursos: [{id: 1, course: 'Angular' }, {id:4, course: 'Node-JS'}]},
    {id: 4, name: 'Giovanna', lastname: 'Fucenecco', email: 'giofuce@gmail.com', birthday: new Date('1998, 04, 11'), cursos: [{id: 1, course: 'Angular' }, {id:4, course: 'Node-JS'}]},
    {id: 5, name: 'Gonzalo', lastname: 'Ruiz', email: 'gruiz@gmail.com', birthday: new Date('1992, 08, 13'), cursos: [{id: 5, course: 'Python' }, {id:6, course: 'Ingles'}]}
  ];

  studentToEdit!: Student | null;

  
  getStudents():Observable<Student[]> {
    return of(this.studentsData);
  }

  setStudents(students:Student[]): Promise<any> {
    return new Promise((resolve, reject) => {
      if(students.length > 0 || students !== null) {
        this.studentsData = students;
        return resolve({ message: 'Se actualizo la información de los estudiantes correctamente' })
      } else {
        reject({ message: 'No se pudo actualizar la informacion de los estudiantes' })
      }
    });
  }

  getStudentToEdit():Observable<Student | null> {
    return of(this.studentToEdit);
  }

  setStudentToEdit(student: Student | null) {
    return new Promise((resolve, reject) => {
      if(student || student === null) {
        this.studentToEdit = student;
        return resolve(true)
      }else {
        return reject({ message: 'No se pudo setear el studentToEdit' })
      }

    });
  }

  
}

