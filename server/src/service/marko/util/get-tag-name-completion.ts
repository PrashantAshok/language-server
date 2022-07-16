import path from "path";
import type { TagDefinition } from "@marko/babel-utils";
import {
  type CompletionItem,
  type Range,
  CompletionItemKind,
  CompletionItemTag,
  InsertTextFormat,
  MarkupKind,
  TextEdit,
} from "vscode-languageserver";
import { URI } from "vscode-uri";

const deprecated = [CompletionItemTag.Deprecated] as CompletionItemTag[];

export default function getTagNameCompletion({
  tag,
  range,
  showAutoComplete,
  importer,
}: {
  tag: TagDefinition;
  range?: Range;
  importer?: string;
  showAutoComplete?: true;
}): CompletionItem {
  let label = tag.isNestedTag ? `@${tag.name}` : tag.name;
  const fileForTag = tag.template || tag.renderer || tag.filePath;
  const fileURIForTag = URI.file(fileForTag).toString();
  const nodeModuleMatch = /\/node_modules\/((?:@[^/]+\/)?[^/]+)/.exec(
    fileForTag
  );

  const nodeModuleName = nodeModuleMatch && nodeModuleMatch[1];
  const isCoreTag = nodeModuleName === "marko";

  const documentation = {
    kind: MarkupKind.Markdown,
    value: tag.html
      ? `Built in [<${tag.name}>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag.name}) HTML tag.`
      : nodeModuleName
      ? isCoreTag
        ? `Core Marko [<${tag.name}>](${fileURIForTag}) tag.`
        : `Custom Marko tag discovered from the ["${nodeModuleName}"](${fileURIForTag}) npm package.`
      : `Custom Marko tag discovered from:\n\n[${
          importer ? path.relative(importer, fileForTag) : fileForTag
        }](${fileURIForTag})`,
  };

  if (tag.description) {
    documentation.value += `\n\n${tag.description}`;
  }

  const autocomplete = showAutoComplete ? tag.autocomplete?.[0] : undefined;

  if (autocomplete) {
    if (autocomplete.displayText) {
      label = autocomplete.displayText;
    }

    if (autocomplete.description) {
      documentation.value += `\n\n${autocomplete.description}`;
    }

    if (autocomplete.descriptionMoreURL) {
      documentation.value += `\n\n[More Info](${autocomplete.descriptionMoreURL})`;
    }
  }

  return {
    label,
    documentation,
    tags: tag.deprecated ? deprecated : undefined,
    insertTextFormat: autocomplete ? InsertTextFormat.Snippet : undefined,
    kind: tag.html ? CompletionItemKind.Property : CompletionItemKind.Class,
    textEdit: range && TextEdit.replace(range, autocomplete?.snippet || label),
  };
}
