import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import {reactotronRedux} from 'reactotron-redux';
import {NativeModules} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//@ts-ignore
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

let tron: typeof Reactotron = Reactotron;

if (__DEV__ && !process.env.__TEST__) {
  tron = Reactotron.configure({
    name: 'Checkout',
    host: NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0],
    createSocket: path => new ReactotronFlipper(path),
  }).setAsyncStorageHandler!(AsyncStorage)
    .useReactNative({
      asyncStorage: false,
      overlay: false,
    })
    .use(reactotronRedux())
    .use(sagaPlugin({}))
    .connect();

  tron.clear!();

  console.tron = tron;
}

export default tron;
