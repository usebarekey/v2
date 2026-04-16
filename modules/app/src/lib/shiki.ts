import { Effect } from "effect";
import { codeToHtml } from "shiki";

export const Highlight = ({ code, lang }: { code: string; lang: string }) =>
  Effect.gen(function* () {
    return yield* Effect.promise(async () =>
      await codeToHtml(code, {
        lang,
        theme: "ayu-light",
        transformers: [
          {
            pre(node) {
              const style = node.properties.style;

              if (typeof style === "string") {
                node.properties.style = style
                  .replace(/background-color:[^;]+;?/g, "")
                  .replace(/^;|;;+/g, "")
                  .trim();
              }

              return node;
            },
          },
        ],
      })
    );
  });
