# RecipeInput

## Example Usage

```typescript
import { RecipeInput } from "speakeasy-recipe-book/models/custom_components";

let value: RecipeInput = {
  name: "<value>",
  ingredients: [
    "<value>",
  ],
  instructions: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `name`                              | *string*                            | :heavy_check_mark:                  | Name of the recipe                  |
| `ingredients`                       | *string*[]                          | :heavy_check_mark:                  | List of ingredients                 |
| `instructions`                      | *string*                            | :heavy_check_mark:                  | Cooking instructions for the recipe |
| `servings`                          | *number*                            | :heavy_minus_sign:                  | Number of servings                  |
| `prepTime`                          | *number*                            | :heavy_minus_sign:                  | Preparation time in minutes         |