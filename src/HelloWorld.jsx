import react, { PureComponent } from 'lib/react';
import Manager from 'webide-plugin-sdk/Manager';
import global from './global'
import './style.styl'

export class App extends PureComponent {
  render() {
    return (
      <div className='template'>
        this is a hello world demo for Coding-WebIDE.
      </div>
    )
  }
}

console.log(global)

const { injectComponent } = global;
const { position } = injectComponent;

export default class extends Manager {
  pluginWillMount() {
    console.log('template plugin will mount.')
    injectComponent.inject(position.SIDEBAR.RIGHT, {
      key: 'template',
      icon: 'fa fa-users',
      text: '模板',
      weight: 0,
    }, (extension) => {
      console.log(extension)
      return react.createElement(extension.app);
    });
  }

  pluginWillUnmount() {
    console.log('template plugin will unmount.')
  }
}
