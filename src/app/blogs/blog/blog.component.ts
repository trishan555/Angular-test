import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  rating = [1, 2, 3, 4, 5];

  @Input() blog;

  @Output() deleteB = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  delete(){
    this.deleteB.emit();
  }

  onClickSelectStar(i: number){
    if(this.blog.rating === i){
      this.blog.rating = 0;
    }else{
      this.blog.rating = i;
    }
  }
}
