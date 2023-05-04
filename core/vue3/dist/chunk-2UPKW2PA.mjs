var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/decorateStory.ts
import { h } from "vue";
import { sanitizeStoryContextUpdate } from "@storybook/preview-api";

// ../../node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
  const map2 = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map2[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map2[val.toLowerCase()] : (val) => !!map2[val];
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
var EMPTY_OBJ = true ? Object.freeze({}) : {};
var EMPTY_ARR = true ? Object.freeze([]) : [];
var isArray = Array.isArray;
var isDate = (val) => toTypeString(val) === "[object Date]";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);

// src/decorateStory.ts
function normalizeFunctionalComponent(options) {
  return typeof options === "function" ? { render: options, name: options.name } : options;
}
function prepare(rawStory, innerStory) {
  const story = rawStory;
  if (story === null) {
    return null;
  }
  if (typeof story === "function")
    return story;
  if (innerStory) {
    return {
      // Normalize so we can always spread an object
      ...normalizeFunctionalComponent(story),
      components: { ...story.components || {}, story: innerStory }
    };
  }
  return {
    render() {
      return h(story);
    }
  };
}
function decorateStory(storyFn, decorators) {
  let updatedArgs;
  return decorators.reduce(
    (decorated, decorator) => (context) => {
      let story;
      const decoratedStory = decorator((update) => {
        story = decorated({
          ...context,
          ...sanitizeStoryContextUpdate(update)
        });
        if (update && update.args && !looseEqual(update.args, context.args))
          updatedArgs ??= update.args;
        return story;
      }, context);
      context.args = updatedArgs ?? context.args;
      if (!story)
        story = decorated(context);
      if (decoratedStory === story) {
        return story;
      }
      const innerStory = () => h(story, context.args);
      return prepare(decoratedStory, innerStory);
    },
    (context) => prepare(storyFn(context))
  );
}

// src/render.ts
import { createApp, h as h2, isReactive, isVNode, reactive } from "vue";
var slotsMap = /* @__PURE__ */ new Map();
var render = (props, context) => {
  const { id, component: Component } = context;
  if (!Component) {
    throw new Error(
      `Unable to render story ${id} as the component annotation is missing from the default export`
    );
  }
  return h2(Component, props, createOrUpdateSlots(context));
};
var setupFunction = (_app) => {
};
var setup = (fn) => {
  setupFunction = fn;
};
var map = /* @__PURE__ */ new Map();
function renderToCanvas({ storyFn, forceRemount, showMain, showException, storyContext, id }, canvasElement) {
  const existingApp = map.get(canvasElement);
  if (existingApp && !forceRemount) {
    const element = storyFn();
    const args = getArgs(element, storyContext);
    updateArgs(existingApp.reactiveArgs, args);
    return () => {
      teardown(existingApp.vueApp, canvasElement);
    };
  }
  if (existingApp && forceRemount)
    teardown(existingApp.vueApp, canvasElement);
  const vueApp = createApp({
    setup() {
      storyContext.args = reactive(storyContext.args);
      const rootElement = storyFn();
      const args = getArgs(rootElement, storyContext);
      const appState = {
        vueApp,
        reactiveArgs: reactive(args)
      };
      map.set(canvasElement, appState);
      return () => {
        return h2(rootElement, appState.reactiveArgs);
      };
    }
  });
  vueApp.config.errorHandler = (e) => showException(e);
  setupFunction(vueApp);
  vueApp.mount(canvasElement);
  showMain();
  return () => {
    teardown(vueApp, canvasElement);
  };
}
function generateSlots(context) {
  const { argTypes } = context;
  const slots = Object.entries(argTypes).filter(([key, value]) => argTypes[key]?.table?.category === "slots").map(([key, value]) => {
    const slotValue = context.args[key];
    return [key, typeof slotValue === "function" ? slotValue : () => slotValue];
  });
  return reactive(Object.fromEntries(slots));
}
function getArgs(element, storyContext) {
  return element.props && isVNode(element) ? element.props : storyContext.args;
}
function updateArgs(reactiveArgs, nextArgs) {
  if (Object.keys(nextArgs).length === 0)
    return;
  const currentArgs = isReactive(reactiveArgs) ? reactiveArgs : reactive(reactiveArgs);
  Object.keys(currentArgs).forEach((key) => {
    if (!(key in nextArgs)) {
      delete currentArgs[key];
    }
  });
  Object.assign(currentArgs, nextArgs);
}
function teardown(storybookApp, canvasElement) {
  storybookApp?.unmount();
  if (map.has(canvasElement))
    map.delete(canvasElement);
}
function createOrUpdateSlots(context) {
  const { id: storyID, component } = context;
  const slots = generateSlots(context);
  if (slotsMap.has(storyID)) {
    const app = slotsMap.get(storyID);
    if (app?.reactiveSlots)
      updateArgs(app.reactiveSlots, slots);
    return app?.reactiveSlots;
  }
  slotsMap.set(storyID, { component, reactiveSlots: slots });
  return slots;
}

export {
  __commonJS,
  __toESM,
  isArray,
  decorateStory,
  render,
  setup,
  renderToCanvas
};
