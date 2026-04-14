import {
  Icon_default
} from "./chunk-3N2RT3ZC.js";
import "./chunk-LI6O5X7N.js";
import {
  check_target,
  hmr,
  legacy_api,
  legacy_rest_props,
  slot,
  spread_props,
  wrap_snippet
} from "./chunk-HKT2IKFE.js";
import "./chunk-HMS34BMV.js";
import {
  append,
  comment
} from "./chunk-SL2FLWMR.js";
import "./chunk-EGBBZ7FA.js";
import {
  FILENAME,
  HMR,
  add_svelte_meta,
  first_child,
  pop,
  push
} from "./chunk-ABGCGA5V.js";
import "./chunk-LYO35BPR.js";
import "./chunk-37WRVOPJ.js";
import "./chunk-TJDXFXQR.js";
import "./chunk-IHCNI2Z3.js";

// node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/layout-sidebar-right-filled.svelte
Layout_sidebar_right_filled[FILENAME] = "node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/layout-sidebar-right-filled.svelte";
function Layout_sidebar_right_filled($$anchor, $$props) {
  check_target(new.target);
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  push($$props, false, Layout_sidebar_right_filled);
  const iconNode = [
    [
      "path",
      {
        "d": "M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3zm8 -16h-8a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8z"
      }
    ]
  ];
  var $$exports = { ...legacy_api() };
  var fragment = comment();
  var node = first_child(fragment);
  add_svelte_meta(
    () => Icon_default(node, spread_props({ type: "filled", name: "layout-sidebar-right-filled" }, () => $$sanitized_props, {
      get iconNode() {
        return iconNode;
      },
      children: wrap_snippet(Layout_sidebar_right_filled, ($$anchor2, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        slot(node_1, $$props, "default", {}, null);
        append($$anchor2, fragment_1);
      }),
      $$slots: { default: true }
    })),
    "component",
    Layout_sidebar_right_filled,
    4,
    0,
    { componentTag: "Icon" }
  );
  append($$anchor, fragment);
  return pop($$exports);
}
if (import.meta.hot) {
  Layout_sidebar_right_filled = hmr(Layout_sidebar_right_filled);
  import.meta.hot.accept((module) => {
    Layout_sidebar_right_filled[HMR].update(module.default);
  });
}
var layout_sidebar_right_filled_default = Layout_sidebar_right_filled;
export {
  layout_sidebar_right_filled_default as default
};
//# sourceMappingURL=@tabler_icons-svelte_icons_layout-sidebar-right-filled.js.map
