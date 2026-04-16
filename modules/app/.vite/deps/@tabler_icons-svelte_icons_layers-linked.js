import {
  Icon_default
} from "./chunk-L6K42BBS.js";
import "./chunk-TJDXFXQR.js";
import "./chunk-DCAUGMVX.js";
import "./chunk-4FNOW6UU.js";
import "./chunk-LI6O5X7N.js";
import {
  check_target,
  hmr,
  legacy_api,
  legacy_rest_props,
  slot,
  spread_props,
  wrap_snippet
} from "./chunk-UT3G44YH.js";
import "./chunk-HMS34BMV.js";
import {
  append,
  comment
} from "./chunk-UKPC6S3Z.js";
import "./chunk-BXYZSQND.js";
import {
  FILENAME,
  HMR,
  add_svelte_meta,
  first_child,
  pop,
  push
} from "./chunk-JUTHNBTR.js";
import "./chunk-IHCNI2Z3.js";
import "./chunk-LYO35BPR.js";
import "./chunk-PR4QN5HX.js";

// node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/layers-linked.svelte
Layers_linked[FILENAME] = "node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/layers-linked.svelte";
function Layers_linked($$anchor, $$props) {
  check_target(new.target);
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  push($$props, false, Layers_linked);
  const iconNode = [
    [
      "path",
      {
        "d": "M19 8.268a2 2 0 0 1 1 1.732v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h3"
      }
    ],
    [
      "path",
      {
        "d": "M5 15.734a2 2 0 0 1 -1 -1.734v-8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-3"
      }
    ]
  ];
  var $$exports = { ...legacy_api() };
  var fragment = comment();
  var node = first_child(fragment);
  add_svelte_meta(
    () => Icon_default(node, spread_props({ type: "outline", name: "layers-linked" }, () => $$sanitized_props, {
      get iconNode() {
        return iconNode;
      },
      children: wrap_snippet(Layers_linked, ($$anchor2, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        slot(node_1, $$props, "default", {}, null);
        append($$anchor2, fragment_1);
      }),
      $$slots: { default: true }
    })),
    "component",
    Layers_linked,
    4,
    0,
    { componentTag: "Icon" }
  );
  append($$anchor, fragment);
  return pop($$exports);
}
if (import.meta.hot) {
  Layers_linked = hmr(Layers_linked);
  import.meta.hot.accept((module) => {
    Layers_linked[HMR].update(module.default);
  });
}
var layers_linked_default = Layers_linked;
export {
  layers_linked_default as default
};
//# sourceMappingURL=@tabler_icons-svelte_icons_layers-linked.js.map
