import { Component, OnInit } from '@angular/core';
import { ApiblogService } from '../apiblog.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allArticles: any;

  constructor(private apiblogservice: ApiblogService) { }

  ngOnInit() {
    this.apiblogservice.getSubject().subscribe(res => {
      this.allArticles = res.json();
      console.log('article', this.allArticles);
  });

}
}
