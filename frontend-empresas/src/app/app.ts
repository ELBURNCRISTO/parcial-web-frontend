import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpresaService, Empresa } from './empresa.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  empresas: Empresa[] = [];
  nueva: Empresa = { nombre: '', nit: '', ciudad: '', sector: '' };

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.cargarEmpresas();
  }

  cargarEmpresas(): void {
    this.empresaService.listar().subscribe({
      next: (data) => this.empresas = data,
      error: (err) => console.error('Error al listar:', err)
    });
  }

  guardarEmpresa(): void {
    this.empresaService.crear(this.nueva).subscribe({
      next: () => {
        this.nueva = { nombre: '', nit: '', ciudad: '', sector: '' };
        this.cargarEmpresas();
      },
      error: (err) => console.error('Error al crear:', err)
    });
  }
}