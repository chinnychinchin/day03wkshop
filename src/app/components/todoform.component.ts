import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import dueDateCheck from '../dateVal'

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent {

  @Output() updateTaskComp = new EventEmitter()

  todoForm = this.fb.group({
    description:['', [Validators.required, Validators.minLength(4)]],
    priority: [''],
    due: ['', dueDateCheck] 
  })

  constructor(private fb:FormBuilder) { }

  onSubmit() {
    //console.log(this.todoForm.value)
    this.updateTaskComp.next(this.todoForm.value)
    this.todoForm.reset()
  }
}
