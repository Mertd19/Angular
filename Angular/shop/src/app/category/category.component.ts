import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  title = "Kategori Listesi"
  categories : any
  ngOnInit(){
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })
  }
}
