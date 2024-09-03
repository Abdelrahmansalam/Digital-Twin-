import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgFor} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatMenuModule} from '@angular/material/menu';
import { ContentComponent } from './processContent/content.component';
import { ServiceContentComponent } from './service-content/service-content.component';
import { DataContentComponent } from './data-content/data-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DataSelectionDialogComponent } from './data-selection-dialog/data-selection-dialog.component';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { ResultToHomeService } from './result-to-home.service';
import { UserCenterComponent } from './user-center/user-center.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DataresultComponent } from './dataresult/dataresult.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CreateUserComponent } from './create-user/create-user.component';
import { LogInComponent } from './log-in/log-in.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    ContentComponent,
    ServiceContentComponent,
    DataContentComponent,
    UploadDialogComponent,
    DataSelectionDialogComponent,
    ResultDialogComponent,
    UserCenterComponent,
    DataresultComponent,
    CreateUserComponent,
    LogInComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatRadioModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    NgFor,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgxChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent ,ResultToHomeService]
})
export class AppModule { }
