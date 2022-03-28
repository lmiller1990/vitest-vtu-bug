Reproduce a bug where `config` from Test Utils is modified in `globalSetup`, but doesn't seem to be persisted to the actual test.

I'm not sure how Vitest handles `globalSetup`? Is it run in the same context as the actual specs?

This same example works fine in Jest.

Reproduction: `yarn vitest --environment jsdom`
