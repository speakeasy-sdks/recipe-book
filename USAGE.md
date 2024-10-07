<!-- Start SDK Example Usage [usage] -->
```typescript
import { SpeakeasyRecipeBook } from "speakeasy-recipe-book";

const speakeasyRecipeBook = new SpeakeasyRecipeBook();

async function run() {
  const result = await speakeasyRecipeBook.getRecipeStatus({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->