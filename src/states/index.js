import { atom } from 'recoil'

export const containerHeightState = atom({
  key: 'containerHeightState',
  default: 0,
})

export const titleStickyState = atom({
  key: 'titleStickyState',
  default: false,
})

export const profileTabStickyState = atom({
  key: 'profileTabStickyState',
  default: false,
})

export const profileTabState = atom({
  key: 'profileTabState',
  default: '1',
})
