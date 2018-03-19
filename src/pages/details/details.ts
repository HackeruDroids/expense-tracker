import { Expense } from './../../models/expense.model';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-details",
  templateUrl: "details.html"
})
export class DetailsPage {
  expense:Expense =  { id: 1,
    amount: 7.25,
    date: "2018-03-19",
    description: "Tea And Biscuits",
    category: "Food"
  };


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.expense = navParams.get("expense");
  }

  ionViewDidLoad() {}
}
