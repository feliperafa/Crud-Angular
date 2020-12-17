import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
product: Product
  constructor(
      private productService: ProductService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readByIdNow(id).subscribe(product => {
this.product = product
    });
  }
  update():void{
    this.productService.updateNow(this.product).subscribe(() =>{
      this.productService.exibir('Produto Atualizado com Sucesso!')
      this.router.navigate(['/products']);
    })
  }

cancel():void{
  this.router.navigate(['/products'])
}
}
