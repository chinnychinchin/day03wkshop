import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';


const MATERIAL = [MatButtonModule, MatCardModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,MatListModule,MatDatepickerModule,MatRadioModule,MatDividerModule,MatToolbarModule];

@NgModule({
    declarations: [],
    imports: [MATERIAL],
    exports: [MATERIAL]
})