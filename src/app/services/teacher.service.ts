import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  * as APIConfig  from './endPoint';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  userProfile(userId: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders({
    'My-Custom-Header': 'test',
    'Access-Control-Allow-Origin':`*`
  });

  // update question
  updateQuestion(updateObject){
    return this.http.post(APIConfig.END_POINT + "qas/question/update", updateObject );
  }

  getTeacherDetails(teacherId){
    return this.http.get(APIConfig.END_POINT +"qas/insti/getTeacherDetails/"+teacherId);
  }

  //get assignments by teacher and institute id
  getAssignmentsByIT(instituteId,stdId,userId){
    console.log(instituteId);
    return this.http.get(APIConfig.END_POINT +"qas/insti/getAssignmentsByITStandard/"+instituteId+"/"+stdId+"/"+userId);
  }

  getAssignmentsByInstituteTeacher(instituteId,userId){
    return this.http.get(APIConfig.END_POINT +"qas/insti/getAssignmentsByIT/"+instituteId+"/"+userId);
  }

  getUncompletedAssignments(instId,userId){
    return this.http.get(APIConfig.END_POINT +"qas/insti/getUnCompletedAssignments/"+instId+"/"+userId);
  }

  getExpiredAssignments(instId,userId){
    return this.http.get(APIConfig.END_POINT +"qas/insti/expiredAssignments/"+instId+"/"+userId);
  }

  getPostTestsByITId(instituteId,teacherId){
    return this.http.get(APIConfig.END_POINT +"qas/insti/getPostTestsByTeacher/"+instituteId+"/"+teacherId);
  }

  getAssignmentsByITSS(i,t,standard,subject){
    return this.http.get(APIConfig.END_POINT +"qas/insti/getAssignmentsByITSS/"+i+"/"+t+"/"+standard+"/"+subject);
  }

  getTeachers(){
    return this.http.get(APIConfig.END_POINT1 + "users/getTeachers");
  }   

  //    Add assignement by using Inst Id and Teacher id
  addAssignment(assignmentInfo){
    return this.http.post(APIConfig.END_POINT +"qas/insti/addAssignments",assignmentInfo);
  }
  updateAssignment(assignmentInfo){
    return this.http.put(APIConfig.END_POINT +"qas/insti/updateAssignments",assignmentInfo);
  }


  // Add questions to assignment by id
  addAssignmentQuestions(question){
    return this.http.post(APIConfig.END_POINT +"qas/insti/addAssignmentsQuestions",question);
  }

  // Get whole assignment Info by Id
  getAssignmentById(id,userid){
    return this.http.get(APIConfig.END_POINT +"qas/insti/getAssignmentQuestions/"+id+"/"+userid)
  }


  getAssignmentReport(id,userid){
    return this.http.get(APIConfig.END_POINT +"qas/insti/getReports/"+id+"/"+userid)
  }

  // Add test by using Inst Id and Teacher id
  addTest(testInfo){
    return this.http.post(APIConfig.END_POINT +"qas/insti/addPostTests",testInfo);
  } 

  getTestById(id){
    return this.http.get(APIConfig.END_POINT +"qas/insti/getPostTestQuestions/"+id)
  }

  // Add questions to test by id
  addTestQuestions(question){
    return this.http.post(APIConfig.END_POINT +"qas/insti/addAPostTestQuestions",question);
  }

  postQuestion(postObject){
    return this.http.post(APIConfig.END_POINT + "qas/question/add", postObject);
  }

  rolloutAssignment(payload){
    return this.http.put(APIConfig.END_POINT + "qas/insti/updateAssignments", payload);
  }

  // get submitted users based on assignment id
  getSubmittedUsersList(id){
    return this.http.get(APIConfig.END_POINT + "qas/insti/completedAssignmentsByUser/" + id)
  }

  // get uploaded files from user
  getUserFiles(assignmentid,userid){
    return this.http.get(APIConfig.END_POINT + "qas/insti/checkingAssignment/" + userid + '/' + assignmentid)
  }

  // submit user performance
  postUserMarks(payload){
    return this.http.post(APIConfig.END_POINT + "qas/insti/addReports",payload)
  }

  teacherProfile(userId){  
    return this.http.get(APIConfig.END_POINT1 + "users/info/" + userId);
  }
  uploadProfilePic(payload){
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'Bearer '+sessionStorage.getItem('token')
  });
    return this.http.post(APIConfig.END_POINT1 + "users/uploadProfilePic",payload,{headers:headers});
  }
  SaveOrUpdate(about){
    const headers = new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        // 'Authorization':'Bearer '+sessionStorage.getItem('token')
    });
     return this.http.post(APIConfig.END_POINT1 + "teacher/addAbout",about,{headers:headers})
 }
}
