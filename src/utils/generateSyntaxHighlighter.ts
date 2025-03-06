export const generateSyntaxHighlighter = (code: string) => {
  return code
    .replaceAll("\n", "<br />")
    .replace(
      /(--[\w-]+)(:)/g,
      `<span class="text-muted-foreground">$1</span><span class="text-muted-foreground">$2</span>`,
    )
    .replace(
      /\b(hsl|oklch)\b/g,
      `<span class="css-color-code-and-parenthesis">$1</span>`,
    )
    .replace(/\(([^)]+)\)/g, `(<span class="text-foreground">$1</span>)`)
    .replace(
      /([\(\)])/g,
      `<span class="css-color-code-and-parenthesis">$1</span>`,
    )
    .replace(/(\d+\.\d{0,2}%?)/g, `<span class="text-foreground">$1</span>`)
    .replace(
      /(\b0\b|\d+\.\d{0,2}%?)/g,
      `<span class="text-foreground">$1</span>`,
    );
};
