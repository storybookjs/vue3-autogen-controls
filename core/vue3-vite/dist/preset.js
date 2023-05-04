"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/preset.ts
var preset_exports = {};
__export(preset_exports, {
  core: () => core,
  viteFinal: () => viteFinal
});
module.exports = __toCommonJS(preset_exports);
var import_builder_vite = require("@storybook/builder-vite");
var import_vite2 = require("vite");

// src/plugins/vue-docgen.ts
var import_path = __toESM(require("path"));
var import_vite = require("vite");
var import_magic_string = __toESM(require("magic-string"));
var import_vue_component_meta = require("vue-component-meta");
function vueDocgen() {
  const include = /\.(vue)$/;
  const filter = (0, import_vite.createFilter)(include);
  const checkerOptions = {
    forceUseTs: true,
    schema: { ignore: ["MyIgnoredNestedProps"] },
    printer: { newLine: 1 }
  };
  const checker = (0, import_vue_component_meta.createComponentMetaChecker)(
    import_path.default.join(__dirname, "../../../../tsconfig.json"),
    checkerOptions
  );
  return {
    name: "storybook:vue-docgen-plugin",
    async transform(src, id) {
      if (!filter(id))
        return void 0;
      let metaSource;
      try {
        metaSource = {
          exportName: checker.getExportNames(id)[0],
          displayName: id.split(import_path.default.sep).slice(-1).join("").replace(".vue", ""),
          ...checker.getComponentMeta(id),
          sourceFiles: id
        };
      } catch (e) {
        console.log(" checker error = ", e);
      }
      metaSource = JSON.stringify(metaSource);
      const s = new import_magic_string.default(src);
      s.append(`;_sfc_main.__docgenInfo = ${metaSource}`);
      return {
        code: s.toString(),
        map: s.generateMap({ hires: true, source: id })
      };
    }
  };
}

// src/preset.ts
var core = {
  builder: "@storybook/builder-vite",
  renderer: "@storybook/vue3"
};
var viteFinal = async (config, { presets }) => {
  const plugins = [];
  if (!await (0, import_builder_vite.hasVitePlugins)(config.plugins, ["vite:vue"])) {
    const { default: vue } = await import("@vitejs/plugin-vue");
    plugins.push(vue());
  }
  plugins.push(vueDocgen());
  return (0, import_vite2.mergeConfig)(config, {
    plugins,
    resolve: {
      alias: {
        vue: "vue/dist/vue.esm-bundler.js"
      }
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  core,
  viteFinal
});
