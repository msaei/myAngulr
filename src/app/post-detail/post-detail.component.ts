import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public id;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    let postId = this._route.snapshot.params['id'];
    console.log(postId);
    this.id = postId;
  }

}
