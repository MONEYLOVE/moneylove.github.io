import { bootstrap }    from 'angular2/platform/browser';
// import { AppComponent } from './app.component';
import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  //template: '<h1>My First Angular 2 App</h1>',
  templateUrl: "./views/ng2-tpl.html"
})
class AppComponent {
	list_item: Array;
	newTodoText = '';

	constructor() {
		this.list_item = [];
		this.amount = 31000;
		this.permonth = 500;
		this.percent = 1.01;
		this.except = "2,3,7,8,9,10,11";
		this.date = "3/15/2016";
		this.again = "9:4000";
	}
    public test() {
        var amount = parseInt(this.amount);
        var permonth = parseInt(this.permonth);
        var percent = parseFloat(this.percent);
        var except = this.except.split(",");
		var again=[];
		this.again.split(",").map(
			v=>{again.push(v.split(":"));}
		);
		console.log(again);
        this.month = 1;
		var d=new Date(this.date);
		var str=[];
        while (amount > 0) {
			var tmp=permonth;
            amount -= permonth;
            if (jQuery.inArray(this.month.toString(), except) >= 0){tmp=0;
                amount += permonth;}
            amount *= percent;
			amount=Math.round(amount);
			let againMonth1="";
			for(var v in again){
				if(this.month.toString()==again[v][0])
				{
					// debugger;
					amount+=parseInt(again[v][1]);
				againMonth1="再借"+again[v][1]+"元";
				break;
				}
			};
            // console.log(this.month, tmp, amount);
					// debugger;
			str.push({m:this.month, current:d.Format("yyyy-MM-dd"), diff: tmp, total: amount, againMonth: againMonth1});
            this.month++;
			d=new Date(d.addMonth(1));
        }
		this.list_item=str;
    }
}



bootstrap(AppComponent);