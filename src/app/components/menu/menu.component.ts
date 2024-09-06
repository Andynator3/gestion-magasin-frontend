import {Component, OnInit} from '@angular/core';
import {MenuModel} from "../models/menu.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  public menuProperties: Array<MenuModel> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fa-solid fa-chart-line',
      url: '',
      souMenu: [
        {
          id: '10',
          titre: 'Vue d\'ensemble',
          icon: 'fa-solid fa-chart-pie',
          url: ''
        },
        {
          id: '11',
          titre: 'Statistiques',
          icon: 'fa-solid fa-chart-column',
          url: 'statistic'
        }
     ]
   },
      {
        id: '2',
        titre: 'Articles',
        icon: 'fa-solid fa-boxes-stacked',
        url: '',
        souMenu: [
          {
            id: '20',
            titre: 'Articles',
            icon: 'fa-solid fa-boxes-stacked',
            url: 'articles'
          },
          {
            id: '21',
            titre: 'Mouvement du stock',
            icon: 'fa-solid fa-up-down-left-right',
            url: 'movement-stock',
          },
        ]
      },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fa-solid fa-people-group',
      url: '',
      souMenu: [
        {
          id: '30',
          titre: 'Clients',
          icon: 'fa-solid fa-people-group',
          url: 'clients'
        },
        {
          id: '31',
          titre: 'Commandes clients',
          icon: 'fa-solid fa-basket-shopping',
          url: 'order-customer'
        },
      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fa-solid fa-people-roof',
      url: '',
      souMenu: [
        {
          id: '40',
          titre: 'Fournisseurs',
          icon: 'fa-solid fa-people-roof',
          url: 'suppliers'
        },
        {
          id: '41',
          titre: 'Commandes fournisseurs',
          icon: 'fa-solid fa-truck',
          url: 'order-supplier'
        },
      ]
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'fa-solid fa-gear',
      url: '',
      souMenu: [
        {
          id: '50',
          titre: 'Categories',
          icon: 'fa-solid fa-table-list',
          url: 'categories'
        },
        {
          id: '51',
          titre: 'Utilisateurs',
          icon: 'fa-solid fa-user-group',
          url: 'users'
        },
      ]
    }
  ];


  constructor( private router: Router) {}

  ngOnInit(): void {
  }

  navigate(url?: string): void {
    this.router.navigate([url]);
  }
}
