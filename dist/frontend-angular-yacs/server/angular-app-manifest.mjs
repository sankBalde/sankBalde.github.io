
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "preload": [
      "chunk-PKADJ2UF.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6PSJVJMW.js",
      "chunk-DBU6QSDP.js"
    ],
    "route": "/cours/python"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6PSJVJMW.js",
      "chunk-DBU6QSDP.js"
    ],
    "route": "/cours/world"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6PSJVJMW.js",
      "chunk-DBU6QSDP.js"
    ],
    "route": "/cours/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GG5J5N7H.js",
      "chunk-DBU6QSDP.js"
    ],
    "route": "/formations"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WI5V6Y72.js",
      "chunk-DBU6QSDP.js"
    ],
    "route": "/formations/gestion"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-PPTVORIO.js",
      "chunk-DBU6QSDP.js",
      "chunk-IAJIG4OQ.js"
    ],
    "route": "/formations/new"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-46ESMP2M.js",
      "chunk-DBU6QSDP.js",
      "chunk-IAJIG4OQ.js"
    ],
    "route": "/formations/modifier/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-S6YX2NIJ.js",
      "chunk-IAJIG4OQ.js"
    ],
    "route": "/profile-settings"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2UKJQ7NP.js"
    ],
    "route": "/help"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-PAG6DVQG.js",
      "chunk-DBU6QSDP.js",
      "chunk-IAJIG4OQ.js",
      "chunk-F6LC75EQ.js"
    ],
    "route": "/edit-content"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5CR7HJHG.js",
      "chunk-DBU6QSDP.js",
      "chunk-IAJIG4OQ.js"
    ],
    "route": "/qcm"
  },
  {
    "renderMode": 0,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 29906, hash: '7b93a3f7517741a177856aa7dbe5e1c35389ed46af712b18712c4b7de8544954', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17292, hash: '49b95d63dc19a5f6fd3e7485ae35fffea299eb0e910f943ff98f25e585bd80a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cours/python/index.html': {size: 44759, hash: 'fe92c8be72ac5001b0b4fafd4a37e4e7e88f0b1095d064fc5d2f96778834c8d1', text: () => import('./assets-chunks/cours_python_index_html.mjs').then(m => m.default)},
    'cours/world/index.html': {size: 44759, hash: 'fe92c8be72ac5001b0b4fafd4a37e4e7e88f0b1095d064fc5d2f96778834c8d1', text: () => import('./assets-chunks/cours_world_index_html.mjs').then(m => m.default)},
    'styles-2WAMQ34Z.css': {size: 48200, hash: '3GOYFoXZmUc', text: () => import('./assets-chunks/styles-2WAMQ34Z_css.mjs').then(m => m.default)}
  },
};
