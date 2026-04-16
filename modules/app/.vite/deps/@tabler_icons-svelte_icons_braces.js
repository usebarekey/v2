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

// node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/braces.svelte
Braces[FILENAME] = "node_modules/.deno/@tabler+icons-svelte@3.41.0/node_modules/@tabler/icons-svelte/dist/icons/braces.svelte";
function Braces($$anchor, $$props) {
  check_target(new.target);
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  push($$props, false, Braces);
  const iconNode = [
    [
      "path",
      {
        "d": "M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2"
      }
    ],
    [
      "path",
      {
        "d": "M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2"
      }
    ]
  ];
  var $$exports = { ...legacy_api() };
  var fragment = comment();
  var node = first_child(fragment);
  add_svelte_meta(
    () => Icon_default(node, spread_props({ type: "outline", name: "braces" }, () => $$sanitized_props, {
      get iconNode() {
        return iconNode;
      },
      children: wrap_snippet(Braces, ($$anchor2, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        slot(node_1, $$props, "default", {}, null);
        append($$anchor2, fragment_1);
      }),
      $$slots: { default: true }
    })),
    "component",
    Braces,
    4,
    0,
    { componentTag: "Icon" }
  );
  append($$anchor, fragment);
  return pop($$exports);
}
if (import.meta.hot) {
  Braces = hmr(Braces);
  import.meta.hot.accept((module) => {
    Braces[HMR].update(module.default);
  });
}
var braces_default = Braces;
export {
  braces_default as default
};
//# sourceMappingURL=@tabler_icons-svelte_icons_braces.js.map
