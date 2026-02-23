---
title: Quick Start
description: Get up and running with Minions Taxonomy in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-taxonomy/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_taxonomy import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
taxonomy info
```
