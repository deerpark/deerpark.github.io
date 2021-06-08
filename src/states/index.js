import { atom } from 'recoil'

export const containerWidthState = atom({
  key: 'containerWidthState',
  default: 0,
})

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
  default: 0,
})

export const profileTabDirectionState = atom({
  key: 'profileTabDirectionState',
  default: 0,
})
