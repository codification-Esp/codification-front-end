import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatProgressBarModule,MatExpansionModule } from '@angular/material';
import{FormsModule} from '@angular/forms';

@NgModule({
    imports:[MatButtonModule,MatProgressBarModule,MatExpansionModule],
    exports:[MatButtonModule,MatProgressBarModule,MatExpansionModule]


})
export class MaterialModule{

}