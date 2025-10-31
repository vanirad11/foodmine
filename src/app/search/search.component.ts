import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchTerm:String='';
constructor(private route:ActivatedRoute, private router:Router){}
ngOnInit():void{
  this.route.params.subscribe(params=>{
    if(params['searchTerm'])
    this.searchTerm=params['searchTerm']})
  console.log(this.searchTerm);
}
search():void{
  console.log("st", this.searchTerm);
  if(this.searchTerm)
  this.router.navigateByUrl('/search/' + this.searchTerm);
}
}
