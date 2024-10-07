# RecipeStatus

## Example Usage

```typescript
import { RecipeStatus } from "speakeasy-recipe-book/models/components";

let value: RecipeStatus = "in_progress";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"not_started" | "in_progress" | "complete" | Unrecognized<string>
```