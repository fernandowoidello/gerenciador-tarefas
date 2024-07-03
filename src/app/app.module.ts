import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';
import { DetalhesTarefaComponent } from './detalhes-tarefa/detalhes-tarefa.component';
import { ListaTarefaComponent } from './lista-tarefa/lista-tarefa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    CadastroTarefaComponent,
    DetalhesTarefaComponent,
    ListaTarefaComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    ReactiveFormsModule,  // Importe o ReactiveFormsModule
    BrowserAnimationsModule,  // Importe o BrowserAnimationsModule
    ToastrModule.forRoot(),  // Importe o ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
