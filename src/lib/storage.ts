// @ts-nocheck
import WebStorage from '@georapbox/web-storage';

export interface Props {
  keyPrefix?: string;
}

type ErrorCallback = (error: any) => void;

const noop = () => {};

export const autoStorage = (props: Props) => {
  const keyPrefix = props.keyPrefix || '';
  let storage;
  if (WebStorage.isAvailable('localStorage')) {
    storage = WebStorage.createInstance({ driver: 'localStorage', keyPrefix });
  } else if (WebStorage.isAvailable('sessionStorage')) {
    storage = WebStorage.createInstance({
      driver: 'sessionStorage',
      keyPrefix,
    });
  } else {
    storage = mem({ keyPrefix });
  }
  return {
    setItem: storage.setItem.bind(storage),
    getItem: storage.getItem.bind(storage),
    removeItem: storage.removeItem.bind(storage),
    clear: storage.clear.bind(storage),
    keys: storage.keys.bind(storage),
    length: storage.length.bind(storage),
  };
};

function mem({ keyPrefix }: Props) {
  let storage = {} as any;
  return {
    setItem: (
      key: string,
      value: string,
      onErrorCallback: ErrorCallback = noop
    ) => {
      try {
        storage[`${keyPrefix}${key}`] = value;
      } catch (error) {
        onErrorCallback(error);
      }
    },
    getItem: (key: string, onErrorCallback: ErrorCallback = noop) => {
      try {
        return storage[`${keyPrefix}${key}`];
      } catch (error) {
        onErrorCallback(error);
      }
    },
    removeItem: (key: string, onErrorCallback: ErrorCallback = noop) => {
      try {
        delete storage[`${keyPrefix}${key}`];
      } catch (error) {
        onErrorCallback(error);
      }
    },
    clear: (onErrorCallback: ErrorCallback = noop) => {
      try {
        storage = {};
      } catch (error) {
        onErrorCallback(error);
      }
    },
    keys: (onErrorCallback: ErrorCallback = noop) => {
      try {
        return Object.keys(storage).map((key) => key.replace(keyPrefix, ''));
      } catch (error) {
        onErrorCallback(error);
      }
    },
    length: (onErrorCallback: ErrorCallback = noop) => {
      try {
        return Object.keys(storage).length;
      } catch (error) {
        onErrorCallback(error);
      }
    },
  };
}
