export interface IrowItem {
  id: number;
  name: string;
  description: string;
  price?: number | undefined | null;
}

export interface Iclases {
  modal?: string;
  table?: string;
  root: string;
  btn: string;
  forms: string;
  paper?: string;
  button?: string;
  inp?: string;
  roots?: string;
  btnD?: string;
  input?: string;
  iconButton?: string;
  form?: string;
  btns?: string;
  color?: string;
  title?: string;
  bullet?: string;
  pos?: string;
  cards?: string;
  main?: string;
  left?: string;
  right?: string;
  img?: string;
}

export interface Iitem {
  name: string;
  color: string;
  route: string;
  title?: string;
}

export interface Iproduct {
  name: string;
  color: string;
  route: string;
}

export interface IpersistentDrawerRight {
  items: Iitem[];
  title?: string;
  data?: string;
}
