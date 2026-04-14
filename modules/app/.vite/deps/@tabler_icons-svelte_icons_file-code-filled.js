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

// node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/file-code-filled.svelte
File_code_filled[FILENAME] = "node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/file-code-filled.svelte";
function File_code_filled($$anchor, $$props) {
  check_target(new.target);
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  push($$props, false, File_code_filled);
  const iconNode = [
    [
      "path",
      {
        "d": "M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm-1.553 11.106a1 1 0 0 0 -1.341 .447l-1 2a1 1 0 0 0 0 .894l1 2a1 1 0 0 0 1.341 .447l.102 -.058a1 1 0 0 0 .345 -1.283l-.776 -1.553l.776 -1.553a1 1 0 0 0 -.447 -1.341m4.447 .447a1 1 0 0 0 -1.341 -.447l-.102 .058a1 1 0 0 0 -.345 1.283l.774 1.553l-.775 1.553a1 1 0 0 0 1.788 .894l1 -2a1 1 0 0 0 0 -.894z"
      }
    ],
    ["path", { "d": "M19 7h-4l-.001 -4.001z" }]
  ];
  var $$exports = { ...legacy_api() };
  var fragment = comment();
  var node = first_child(fragment);
  add_svelte_meta(
    () => Icon_default(node, spread_props({ type: "filled", name: "file-code-filled" }, () => $$sanitized_props, {
      get iconNode() {
        return iconNode;
      },
      children: wrap_snippet(File_code_filled, ($$anchor2, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        slot(node_1, $$props, "default", {}, null);
        append($$anchor2, fragment_1);
      }),
      $$slots: { default: true }
    })),
    "component",
    File_code_filled,
    4,
    0,
    { componentTag: "Icon" }
  );
  append($$anchor, fragment);
  return pop($$exports);
}
if (import.meta.hot) {
  File_code_filled = hmr(File_code_filled);
  import.meta.hot.accept((module) => {
    File_code_filled[HMR].update(module.default);
  });
}
var file_code_filled_default = File_code_filled;
export {
  file_code_filled_default as default
};
//# sourceMappingURL=@tabler_icons-svelte_icons_file-code-filled.js.map
