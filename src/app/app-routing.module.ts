import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';
import { ListaTarefaComponent } from './lista-tarefa/lista-tarefa.component';
import { DetalhesTarefaComponent } from './detalhes-tarefa/detalhes-tarefa.component';

const routes: Routes = [
  { path: '',  component: CadastroTarefaComponent, pathMatch: 'full' },  // Rota padrão
  { path: 'cadastro-tarefa', component: CadastroTarefaComponent },
  { path: 'lista-tarefa', component: ListaTarefaComponent },
  { path: 'detalhe-tarefa', component: DetalhesTarefaComponent },
  // Adicione outras rotas conforme necessário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
