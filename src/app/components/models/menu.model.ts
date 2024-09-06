export  interface MenuModel {
  id?: string;
  titre?: string;
  icon?: string;
  url?: string;
  souMenu?: Array<MenuModel>;
}
