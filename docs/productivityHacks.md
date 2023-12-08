### Productivity Hacks

Install extensions

- <em>React Snippets (ES7 version) extension</em>
- <em>Simple React Snippets</em>

With React snippets, you can use shortcuts to write React code. SOme useful shortcuts are

- <b>imr</b> - import React from react
- <b>rfce</b> - creating functional component with export statement at bottom
- <b>rafc</b> - generating react functional component with named export.
- <b>uef</b> - creates useEffect hook
- <b>usf</b> - creates useState hook

[Check more snippets here](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)

---

### Enabling automatic imports

Create `jsconfig.json` file and add following lines

```
{
 "compilerOptions": {
    "module": "commonjs",
    "target": "es2016",
    "baseUrl": "./src",
    "checkJs": true,
    "jsx": "preserve"
  },
  "exclude": ["node_modules", "**/node_modules/*"]
}

```

Use `Cmd+.` or `Ctrl+.` to see suggestions.
