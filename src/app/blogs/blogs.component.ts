import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blog';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogs: Blog[]= null;

  constructor(private blogsService: BlogService) {}

  ngOnInit(): void {
    this.blogs = this.blogsService.blogs;
  }

  delete(blog:Blog){
    this.blogs = this.blogs.filter((blogg)=> {
      if(blogg!==blog){
        return blogg;
      }
    });
  }
}
