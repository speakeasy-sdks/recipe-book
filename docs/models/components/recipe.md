# Recipe

## Example Usage

```typescript
import { Recipe } from "speakeasy-recipe-book/models/components";

let value: Recipe = {};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `id`                                | *string*                            | :heavy_minus_sign:                  | Unique identifier for the recipe    |
| `name`                              | *string*                            | :heavy_minus_sign:                  | Name of the recipe                  |
| `ingredients`                       | *string*[]                          | :heavy_minus_sign:                  | List of ingredients                 |
| `instructions`                      | *string*                            | :heavy_minus_sign:                  | Cooking instructions for the recipe |
| `servings`                          | *number*                            | :heavy_minus_sign:                  | Number of servings                  |
| `prepTime`                          | *number*                            | :heavy_minus_sign:                  | Preparation time in minutes         |