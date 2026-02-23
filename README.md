# minions-taxonomy

**Organizational metadata — groups, categories, tags, namespaces, statuses, and priorities**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-taxonomy/sdk minions-sdk

# Python
pip install minions-taxonomy

# CLI (global)
npm install -g @minions-taxonomy/cli
```

---

## CLI

```bash
# Show help
taxonomy --help
```

---

## Python SDK

```python
from minions_taxonomy import create_client

client = create_client()
```

---

## Project Structure

```
minions-taxonomy/
  packages/
    core/           # TypeScript core library (@minions-taxonomy/sdk on npm)
    python/         # Python SDK (minions-taxonomy on PyPI)
    cli/            # CLI tool (@minions-taxonomy/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [taxonomy.minions.help](https://taxonomy.minions.help)
- Blog: [taxonomy.minions.blog](https://taxonomy.minions.blog)
- App: [taxonomy.minions.wtf](https://taxonomy.minions.wtf)

---

## License

[MIT](LICENSE)
