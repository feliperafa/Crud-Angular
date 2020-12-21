import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "https://backend-crud-exemple.herokuapp.com/";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  exibir(msg: string, isError: boolean = false): void {

    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  // Criando um produto e persistindo os dados no banco
  createNow(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Listando todos os Produtos da base de dados
  readNow(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Listando um produto por ID da base de dados
  readByIdNow(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Atualizando um produto por Id para ser persistido no banco de dados
  updateNow(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Deletando um produto por id dentro do banco de dados
  deleteNow(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Erro Generico para todas as operações
  errorHandler(e: any): Observable<any> {
    this.exibir("Ocorreu um erro!", true)
    console.log(e)
    return EMPTY
  }

}
