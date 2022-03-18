import { Dimensions } from 'react-native'

const DEVICE_WINDOW = Dimensions.get('window')

const screen = {
  width: DEVICE_WINDOW.width,
  height: DEVICE_WINDOW.height,
}

export const Device = {
  screen,
}
