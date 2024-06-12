// agregar-vaca.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiCowsService } from 'src/app/services/api-cows.service';

@Component({
  selector: 'app-agregar-vaca',
  templateUrl: './agregar-vaca.component.html',
  styleUrls: ['./agregar-vaca.component.css']
})
export class AgregarVacaComponent {
  vacaForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiCowsService) {
    this.vacaForm = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.vacaForm.valid) {
      this.apiService.addCow(this.vacaForm.value).subscribe(() => {
        console.log('Vaca agregada correctamente');
        // Aquí puedes redirigir a otra página o realizar otra acción después de agregar la vaca
      });
    }
  }
}
