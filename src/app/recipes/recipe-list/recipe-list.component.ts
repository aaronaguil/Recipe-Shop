import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('A test recipe', 'This is a test recipe', 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/03/20/970290e67a124fff953f4410b68255de/avocado-and-smoked-salmon-entree.jpg?width=1229&height=768&mode=crop&quality=75'),
    new Recipe('A test recipe', 'This is a test recipe', 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/03/20/970290e67a124fff953f4410b68255de/avocado-and-smoked-salmon-entree.jpg?width=1229&height=768&mode=crop&quality=75')
  ];

  constructor() { }

  ngOnInit() {
  }

}
