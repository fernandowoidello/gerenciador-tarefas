import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; // Importe o Router

@Component({
  selector: 'app-cadastro-tarefa',
  templateUrl: './cadastro-tarefa.component.html',
  styleUrls: ['./cadastro-tarefa.component.css']
})
export class CadastroTarefaComponent implements OnInit {
  cadastroForm: FormGroup;
 

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.cadastroForm = this.fb.group({
      taskName: ['', [Validators.required, Validators.maxLength(30)]],
      taskDescription: ['', [Validators.required]],
      taskPriority: ['', Validators.required],
      taskDueDate: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    console.log("dasdsadasdsadsa")
  }

  get form() {
    return this.cadastroForm.controls;
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Formulário válido. Enviar para o servidor:', this.cadastroForm.value);
      // Aqui você pode enviar os dados para o servidor

      // Após o cadastro, redirecione para a lista de tarefas
      this.redirecionarParaListaTarefa();
    } else {
      console.log('Formulário inválido. Verifique os campos.');
      // Aqui você pode implementar alguma lógica para lidar com o formulário inválido, como exibir mensagens de erro
    }
  }

  redirecionarParaListaTarefa(): void {
    this.toastr.success('Tarefa cadastrada com sucesso!', 'Sucesso');
    this.router.navigate(['/lista-tarefa']);
  }

  limparFormulario() {
    this.cadastroForm.reset();
  }

  voltarParaTelaInicial() {
    this.router.navigate(['']);
  }
}

