type TMenuItem = {
  title: string;
  tab: TTabs;
}

function getMenuItems(): TMenuItem[] {
  return [
    {
      title: 'Навыки',
      tab: 'skills'
    },
    {
      title: 'Проекты',
      tab: 'projects'
    },
    {
      title: 'Контакты',
      tab: 'contacts'
    }
  ]
}

export { getMenuItems };