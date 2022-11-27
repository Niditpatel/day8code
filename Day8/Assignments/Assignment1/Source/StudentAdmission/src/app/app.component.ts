import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StudentAdmission';
  studentdata:any[]=[];

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    console.log(this.EmergencyList.controls[0].controls)
  }
  EmergencyList = this.fb.array([
    this.fb.group({
      Relation: this.fb.control(''),
      Number: this.fb.control('')
    })
  ]);
  ReferenceList = this.fb.array([
    this.fb.group({
      Address: this.fb.control(''),
      Number: this.fb.control('')
    })
  ]);
  StudentForm = this.fb.group({
    Name: this.fb.group({
      FirstName: this.fb.control('', [Validators.required]),
      MiddleName: this.fb.control('', [Validators.required]),
      LastName: this.fb.control('', [Validators.required])
    }),
    BirthDetail: this.fb.group({
      DOB: this.fb.control('', [Validators.required]),
      PlaceOfBirth: this.fb.control('', [Validators.required])
    }),
    Languages: this.fb.group({
      FirstLanguage: this.fb.control('', [Validators.required]),
      SecondLanguage: this.fb.control('')
    }),
    Address: this.fb.group({
      City: this.fb.control('', [Validators.required]),
      State: this.fb.control('', [Validators.required]),
      Country: this.fb.control('', [Validators.required]),
      PIN: this.fb.control('', [Validators.required])
    }),
    Father: this.fb.group({
      FullName: this.fb.group({
        FirstName: this.fb.control('', [Validators.required]),
        MiddleName: this.fb.control('', [Validators.required]),
        LastName: this.fb.control('', [Validators.required])
      }),
      Email: this.fb.control('', [Validators.required]),
      EducationQualification: this.fb.control('', [Validators.required]),
      Profession: this.fb.control('', [Validators.required]),
      Designation: this.fb.control('', [Validators.required]),
      Phone: this.fb.control('', [Validators.required])
    }),
    Mother: this.fb.group({
      FullName: this.fb.group({
        FirstName: this.fb.control('', [Validators.required]),
        MiddleName: this.fb.control('', [Validators.required]),
        LastName: this.fb.control('', [Validators.required])
      }),
      Email: this.fb.control('', [Validators.required]),
      EducationQualification: this.fb.control('', [Validators.required]),
      Profession: this.fb.control('', [Validators.required]),
      Designation: this.fb.control('', [Validators.required]),
      Phone: this.fb.control('', [Validators.required])
    }),

    Emergency: this.fb.group({
      EmergencyContact: this.EmergencyList
    }),
    Reference: this.fb.group({
      ReferenceContact: this.ReferenceList
    })
  })
  
  AddEmergency(){
    this.EmergencyList.push(
      this.fb.group({
      Relation:this.fb.control(''),
      Number:this.fb.control('')
    })
    )
  }
  DeleteEmergency(i:number){
    this.EmergencyList.removeAt(i);
  }
  AddReference(){
    this.ReferenceList.push(
      this.fb.group({
        Address:this.fb.control(''),
        Number:this.fb.control('')
      })
    )
  }

  DeleteReference(i:number){
    this.ReferenceList.removeAt(i);
  }

  addStudentdata(item:any){
    console.log(item);
    this.studentdata.push(item);
    console.log(this.studentdata);
  }
}






