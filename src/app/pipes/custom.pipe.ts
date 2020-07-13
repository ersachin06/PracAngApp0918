import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  // transform(value: any,arg?:number): any {
  //   return value.substr(0,arg).toUpperCase();
  // }
  transform(value: any): any
  {
    return value.toUpperCase();
  }
}

@Pipe({
  name: 'customjson',
  pure: false  // to make pure pipe impure //now we will get chages
})
export class CustomJSONPipe implements PipeTransform {

  // transform(value: any,arg?:number): any {
  //   return value.substr(0,arg).toUpperCase();
  // }
  transform(value: any): any {
    return JSON.stringify(value);
  }
}



@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform
{
  transform(value: any) :any
  {
    let y1=new Date().getFullYear();
    let joiningDate=new Date(value).getFullYear();
    let exp= y1-joiningDate;
    return exp;
    
  }
  
}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  //field= job  value='clerk'
  transform(items: any[], field: string, value: string): any[] {
      if (!items) {
          return [];
      }
      if (!field || !value) {
          return items;
      }
// tslint:disable-next-line: max-line-length
      console.log('icsd tech labs 1 ' + JSON.stringify(items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()))));

      //
      // var heroes = [
      //   {name: “Batman”, franchise: “DC”},
      //   {name: “Ironman”, franchise: “Marvel”},
      //   {name: “Thor”, franchise: “Marvel”},
      //   {name: “Superman”, franchise: “DC”}
      // ];

      // var marvelHeroes =  heroes.filter(function(hero) {
      //   return hero.franchise == “Marvel”;
      // });
     let x= items.filter(function(item)
      {
          let lowercaseitem =item[field].toLowerCase();
          let res=lowercaseitem.includes(value.toLowerCase());
          //alert('res is ' +res);
          return res;//it will return true or false
      }
      );
      alert('json is ' + JSON.stringify(x));//r,eturning 4 objects of clerk if i type clerk
      alert('x='+ x);//return array of  object 
      return x;
     // return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
  }
}

// A common use case of .filter() is with an array of objects through their properties:

// var heroes = [
// 	{name: “Batman”, franchise: “DC”},
// 	{name: “Ironman”, franchise: “Marvel”},
// 	{name: “Thor”, franchise: “Marvel”},
// 	{name: “Superman”, franchise: “DC”}
// ];

// var marvelHeroes =  heroes.filter(function(hero) {
// 	return hero.franchise == “Marvel”;
// });
