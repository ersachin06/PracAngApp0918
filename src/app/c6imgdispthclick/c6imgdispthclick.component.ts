import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c6imgdispthclick',
  templateUrl: './c6imgdispthclick.component.html',
  styleUrls: ['./c6imgdispthclick.component.css']
})
export class C6imgdispthclickComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  emp:any[]=[
    {
      EMPNO:7369,
      ENAME:"SMITH",
      JOB:"CLERK",
      MGR:7902,
      HIREDATE:new Date('17/12/1980'),
      SAL:800,
      COMM:null,
      DEPTNO:20
    },
    {
      EMPNO:7499,
      ENAME:"ALLEN",
      JOB:"SALESMAN",
      MGR:7698,
      HIREDATE:new Date('20/02/1981'),
      SAL:1600,
      COMM:300,
      DEPTNO:30
    },
    {
      EMPNO:7521,
      ENAME:"WARD",
      JOB:"SALESMAN",
      MGR:7698,
      HIREDATE:new Date('22/02/1981'),
      SAL:1250,
      COMM:500,
      DEPTNO:30
    },
    {
      EMPNO:7566,
      ENAME:"JONES",
      JOB:"MANAGER",
      MGR:7839,
      HIREDATE:new Date('02/04/1981'),
      SAL:2975,
      COMM:null,
      DEPTNO:20
    },
    {
      EMPNO:7654,
      ENAME:"MARTIN",
      JOB:"SALESMAN",
      MGR:7698,
      HIREDATE:new Date('28/09/1981'),
      SAL:1250,
      COMM:500,
      DEPTNO:30
    },
    {
      EMPNO:7698,
      ENAME:"BLAKE",
      JOB:"MANAGER",
      MGR:7839,
      HIREDATE:new Date('01/05/1981'),
      SAL:2650,
      COMM:null,
      DEPTNO:30
    },
    {
      EMPNO:7782,
      ENAME:"CLARK",
      JOB:"MANAGER",
      MGR:7839,
      HIREDATE:new Date('09/06/1981'),
      SAL:2450,
      COMM:null,
      DEPTNO:10
    },
    {
      EMPNO:7788,
      ENAME:"SCOTT",
      JOB:"ANALYST",
      MGR:7566,
      HIREDATE:new Date('19/04/1987'),
      SAL:3000,
      COMM:null,
      DEPTNO:20
    },
    {
      EMPNO:7839,
      ENAME:"KING",
      JOB:"PRESIDENT",
      MGR:null,
      HIREDATE:new Date('17/11/1981'),
      SAL:5000,
      COMM:null,
      DEPTNO:10
    },
    {
      EMPNO:7844,
      ENAME:"TURNER",
      JOB:"SALESMAN",
      MGR:7698,
      HIREDATE:new Date('08/09/1981'),
      SAL:1500,
      COMM:0,
      DEPTNO:30
    },
    {
      EMPNO:7876,
      ENAME:"ADAMS",
      JOB:"CLERK",
      MGR:7788,
      HIREDATE:new Date('23/05/1987'),
      SAL:1100,
      COMM:null,
      DEPTNO:20
    },
    {
      EMPNO:7900,
      ENAME:"JAMES",
      JOB:"CLERK",
      MGR:7698,
      HIREDATE:new Date('03/12/1981'),
      SAL:950,
      COMM:null,
      DEPTNO:30
    },
    {
      EMPNO:7902,
      ENAME:"FORD",
      JOB:"ANALYST",
      MGR:7566,
      HIREDATE:new Date('03/12/1981'),
      SAL:3000,
      COMM:null,
      DEPTNO:20
    },
    {
      EMPNO:7934,
      ENAME:"MILLER",
      JOB:"CLERK",
      MGR:7782,
      HIREDATE:new Date('23/01/1982'),
      SAL:1300,
      COMM:null,
      DEPTNO:10
    }
  ];
  
  users:any[]=[
  
    {usersLogo:'assets/images/u1.jpg',id:1,department:'IT',name:'john',salary:20000},    
    {usersLogo:'assets/images/u2.jpg',id:2,department:'IT',name:'Alisha',salary:10000},
    {usersLogo:'assets/images/u3.jpg',id:3,department:'Sales',name:'Peter',salary:40000},    
    {usersLogo:'assets/images/u4.jpg',id:4,department:'Sales',name:'harry',salary:70000},
    {usersLogo:'assets/images/u5.jpg',id:5,department:'IT',name:'Sheena',salary:80000},
    {usersLogo:'assets/images/u6.jpg',id:6,department:'IT',name:'rohan',salary:47000},
    {usersLogo:'assets/images/u7.jpg',id:7,department:'RnD',name:'sohan',salary:60000},
    {usersLogo:'assets/images/u8.jpg',id:8,department:'RnD',name:'mohan',salary:50000}       
  ];



  

}
