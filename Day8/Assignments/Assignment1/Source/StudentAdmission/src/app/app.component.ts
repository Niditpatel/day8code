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

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    console.log(this.StudentForm.controls.Emergency.controls.EmergencyContact.controls[0].controls.Realtion)
  }
  EmergencyList = this.fb.array([
    this.fb.group({
      Realtion: this.fb.control('hello'),
      Number: this.fb.control('hii')
    }),
    this.fb.group({
      Realtion: this.fb.control(''),
      Number: this.fb.control('')
    })
  ]);
  ReferenceList = this.fb.array([
    {
      Address: this.fb.control(''),
      Number: this.fb.control('')
    }
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
  
  

}






