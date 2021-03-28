# DENO

## Tutorial

https://deno.land/manual/getting_started/installation

```typescipt
deno run --import-map=deps.json --allow-net --allow-env --watch --unstable index.js
```

## VScode setting

```json
{
  "deno.enable": true,
  "deno.importMap": "./deps.json",
  "deno.unstable": false,
  "[typescript]": {
    "editor.defaultFormatter": "denoland.vscode-deno",
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "denoland.vscode-deno",
  },
}
```

## Oak

https://github.com/oakserver/oak

## Postgres

https://deno.land/x/postgres@v0.8.0

## Logger

https://nest.land/package/optic
