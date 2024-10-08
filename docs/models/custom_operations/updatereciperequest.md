# UpdateRecipeRequest

## Example Usage

```typescript
import { UpdateRecipeRequest } from "speakeasy-recipe-book/models/custom_operations";

let value: UpdateRecipeRequest = {
  recipeId: "<id>",
  recipeInput: {
    name: "<value>",
    ingredients: [
      "<value>",
    ],
    instructions: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `recipeId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `recipeInput`                                                                  | [custom_components.RecipeInput](../../models/custom_components/recipeinput.md) | :heavy_check_mark:                                                             | Updated recipe data                                                            |