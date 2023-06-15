import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {


  genderlist = ["Male","Female","Others"];
  formdata = new FormGroup({
    firstname:new FormControl(""),
    lastname:new FormControl(""),
    email: new FormControl(""),
    age:new FormControl(""),
    dob:new FormControl(""),
    place:new FormControl(""),
    mobile:new FormControl(""),
    gender:new FormControl("")
  })

  //updatable list of form data
  listData: any[] = [];
  //selectedValue = "Male";

  // onEdit{}{
  //   alert("you can edit");
  // }

  // onDelete{}{
  //   alert("you can Delete");
  // }

  onsubmit(){
    console.log("form Submitted");
    this.listData.push(this.formdata.value);
    //console.log(form.value)
    console.log(this.formdata.value);
    this.formdata.reset();
  }

  onEdit() {
    alert("You can edit");
  }
  
  onDelete(index:any) {
    this.listData.splice(index,1);
    alert("You can deleted");
  }

}
