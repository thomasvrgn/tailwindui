import { cloneElement } from 'react';
import { twCascade } from '@mariusmarais/tailwind-cascade';

export const mergeObjects = (obj1, obj2) => {
  const obj = {};
  for (const [prop, value] of Object.entries(obj1)) {
    const obj2Match = obj2[prop];
    if (obj2Match === undefined) {
      obj[prop] = value;
      continue;
    }
    if (value === undefined) continue;
    if (!Array.isArray(value)) {
      if (prop === 'className') {
        obj[prop] = twCascade(value, obj2Match);
      } else if (typeof value === 'string') {
        obj[prop] = `${value} ${obj2Match}`;
      }
    }
  }
  return obj;
}

const mergeProps = (props, obj) => {
  const filtered = Object.fromEntries(Object.entries(obj).filter(x => x[0] !== 'props'));
  const _props = props === undefined
    ? {}
    : props;
  const newObject = mergeObjects(filtered, _props);
  return newObject;
}

export const Apply = (props) => {
  return props.children.map((x, i) => cloneElement(x, {
    key: i,
    ...mergeObjects(mergeProps(props.props, props), x.props)
  }));
}