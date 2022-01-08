import { Menu } from 'electron'

const dockMenu = Menu.buildFromTemplate([
  {
    label: 'Custom option 1',
    click() {
      console.log('Custom option 1 clicked')
    },
  },
  {
    label: 'Custom option 2',
    submenu: [{ label: 'Suboption 1' }, { label: 'Suboption 2' }],
  },
  { label: 'Custom option 3' },
])

export default dockMenu
