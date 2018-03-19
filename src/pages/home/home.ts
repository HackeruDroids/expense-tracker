import { DetailsPage } from "./../details/details";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  showDetails(expense) {
    var bundle = { 'expense': expense };
    this.navCtrl.push(DetailsPage, bundle);
  }

  expenses = [
    {
      id: 1,
      amount: 7.25,
      date: "2018-03-19",
      description: "Tea And Biscuits",
      category: "Food"
    },
    {
      id: 2,
      amount: 15,
      date: "2018-03-18",
      description: "Tomatoes",
      category: "Food"
    },
    {
      id: 3,
      amount: 9,
      date: "2018-03-18",
      description: "Strawberries",
      category: "Food"
    }
  ];
}
