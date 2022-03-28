Reproduce a bug where `config` from Test Utils is modified in `globalSetup`, but doesn't seem to be persisted to the actual test. We have a feature where you can add anything to `config` (import from '@vue/test-0tils') and it's automatically merged with your local config when using Vue Test Utils. In Jest, it's common to do this in a setup file, especially for installing things like Vuetify, that all your components rely on.

I'm not sure how Vitest handles `globalSetup`? Is it run in the same context as the actual specs? It seems different to Jest's `setupFiles`.

This same example works fine in Jest.

Reproduction: `yarn vitest --environment jsdom`

Output: Test fails, and shows:

```
[Vue warn]: Failed to resolve component: foo-bar
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. 
  at <Anonymous ref="VTU_COMPONENT" >
```

I expect the custom component in `./global.js` to be installed and available globally.
