import { Alteradados } from './../alteradados/alteradados';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Apagaimovel } from '../apagaimovel/apagaimovel';


/**
 * Generated class for the Infoperfil page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-infoperfil',
  templateUrl: 'infoperfil.html',
})
export class Infoperfil {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Infoperfil');
  }
  mudapage(){
    this.navCtrl.push(Alteradados);
  }
  carregarpage(){
    this.navCtrl.push(Apagaimovel);
  }
}
