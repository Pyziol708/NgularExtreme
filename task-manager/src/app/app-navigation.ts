import { Item } from 'devextreme/ui/tree_view';

type MenuItem = Item & {
  path?: string;
};

export const navigation: MenuItem[] = [
  {
    icon: 'activefolder',
    text: 'Tasks',
    path: 'tasks',
  },
];
