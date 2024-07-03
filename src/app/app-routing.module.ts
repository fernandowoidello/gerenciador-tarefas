import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';
import { DetalhesTarefaComponent } from './detalhes-tarefa/detalhes-tarefa.component';
import { ListaTarefaComponent } from './lista-tarefa/lista-tarefa.component';

const routes: Routes = [
  { path: 'cadastro-tarefa', component: CadastroTarefaComponent },
  { path: 'detalhes-tarefa', component: DetalhesTarefaComponent },
  { path: 'lista-tarefa', component: ListaTarefaComponent },
  { path: '', redirectTo: '/lista-tarefa', pathMatch: 'full' },
  { path: '**', redirectTo: '/lista-tarefa' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }