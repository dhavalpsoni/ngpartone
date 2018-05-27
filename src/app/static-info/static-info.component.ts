import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-static-info',
  templateUrl: './static-info.component.html',
  styleUrls: ['./static-info.component.scss']
})
export class StaticInfoComponent implements OnInit {
  queryStringParam: String = "";
  constructor(private route:ActivatedRoute, private router:Router,private itemService:ItemService) {   //DI create instance
      this.route.params.subscribe(p=> this.queryStringParam = p.paramOne);
console.log('paramOne value is:'+ this.queryStringParam);    
}
items :any;
  ngOnInit() {
    this.itemService.item.subscribe(i=>this.items =i );
  }

  RedirectToHome()
  {
    this.router.navigate(['']);  //this is the path value from app-routing.module.ts
  }
}
