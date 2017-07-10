import { Component, OnInit } from '@angular/core';

export class Post {
  id: number;
  title: string;
  content: string;
}
const posts: Post[] = [
  {
    id: 1,
    title: 'Hello',
    content: 'this is the content of Hello post'
  },
  {
    id: 2,
    title: 'Oh My ..',
    content: 'this is the content of Oh My post'
  },
  {
    id: 3,
    title: 'Bye',
    content: 'this is the content of Bye post'
  },

]

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: Post[] = posts;
  constructor() { }

  ngOnInit() {
  }

}
