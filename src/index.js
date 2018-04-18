import { appRegistry } from 'webide-plugin-sdk/utils'
import Manager, { App as app } from './HelloWorld'

appRegistry({
  key: 'template',
  app,
  Manager,
})
