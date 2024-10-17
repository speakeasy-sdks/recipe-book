# Recipes
(*recipes*)

## Overview

### Available Operations

* [getAll](#getall) - Get all recipes
* [create](#create) - Create a new recipe
* [getById](#getbyid) - Get a recipe by ID
* [update](#update) - Update an existing recipe by ID
* [delete](#delete) - Delete a recipe by ID

## getAll

Get all recipes

### Example Usage

```typescript
import { SpeakeasyRecipeBook } from "speakeasy-recipe-book";

const speakeasyRecipeBook = new SpeakeasyRecipeBook();

async function run() {
  const result = await speakeasyRecipeBook.recipes.getAll({
    page: 461008,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyRecipeBookCore } from "speakeasy-recipe-book/core.js";
import { recipesGetAll } from "speakeasy-recipe-book/funcs/recipesGetAll.js";

// Use `SpeakeasyRecipeBookCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyRecipeBook = new SpeakeasyRecipeBookCore();

async function run() {
  const res = await recipesGetAll(speakeasyRecipeBook, {
    page: 461008,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [custom_operations.GetRecipesRequest](../../models/custom_operations/getrecipesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[custom_operations.GetRecipesRes](../../models/custom_operations/getrecipesres.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| custom_errors.AuthError | 401                     | application/json        |
| custom_errors.SDKError  | 4XX, 5XX                | \*/\*                   |

## create

Create a new recipe

### Example Usage

```typescript
import { SpeakeasyRecipeBook } from "speakeasy-recipe-book";

const speakeasyRecipeBook = new SpeakeasyRecipeBook();

async function run() {
  const result = await speakeasyRecipeBook.recipes.create({
    name: "<value>",
    ingredients: [
      "<value>",
    ],
    instructions: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyRecipeBookCore } from "speakeasy-recipe-book/core.js";
import { recipesCreate } from "speakeasy-recipe-book/funcs/recipesCreate.js";

// Use `SpeakeasyRecipeBookCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyRecipeBook = new SpeakeasyRecipeBookCore();

async function run() {
  const res = await recipesCreate(speakeasyRecipeBook, {
    name: "<value>",
    ingredients: [
      "<value>",
    ],
    instructions: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [custom_components.RecipeInput](../../models/custom_components/recipeinput.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[custom_components.Recipe](../../models/custom_components/recipe.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| custom_errors.SDKError | 4XX, 5XX               | \*/\*                  |

## getById

Get a recipe by ID

### Example Usage

```typescript
import { SpeakeasyRecipeBook } from "speakeasy-recipe-book";

const speakeasyRecipeBook = new SpeakeasyRecipeBook();

async function run() {
  const result = await speakeasyRecipeBook.recipes.getById({
    recipeId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyRecipeBookCore } from "speakeasy-recipe-book/core.js";
import { recipesGetById } from "speakeasy-recipe-book/funcs/recipesGetById.js";

// Use `SpeakeasyRecipeBookCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyRecipeBook = new SpeakeasyRecipeBookCore();

async function run() {
  const res = await recipesGetById(speakeasyRecipeBook, {
    recipeId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [custom_operations.GetRecipeByIdRequest](../../models/custom_operations/getrecipebyidrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[custom_components.Recipe](../../models/custom_components/recipe.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| custom_errors.SDKError | 4XX, 5XX               | \*/\*                  |

## update

Update an existing recipe by ID

### Example Usage

```typescript
import { SpeakeasyRecipeBook } from "speakeasy-recipe-book";

const speakeasyRecipeBook = new SpeakeasyRecipeBook();

async function run() {
  await speakeasyRecipeBook.recipes.update({
    recipeId: "<id>",
    recipeInput: {
      name: "<value>",
      ingredients: [
        "<value>",
      ],
      instructions: "<value>",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyRecipeBookCore } from "speakeasy-recipe-book/core.js";
import { recipesUpdate } from "speakeasy-recipe-book/funcs/recipesUpdate.js";

// Use `SpeakeasyRecipeBookCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyRecipeBook = new SpeakeasyRecipeBookCore();

async function run() {
  const res = await recipesUpdate(speakeasyRecipeBook, {
    recipeId: "<id>",
    recipeInput: {
      name: "<value>",
      ingredients: [
        "<value>",
      ],
      instructions: "<value>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [custom_operations.UpdateRecipeRequest](../../models/custom_operations/updatereciperequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| custom_errors.SDKError | 4XX, 5XX               | \*/\*                  |

## delete

Delete a recipe by ID

### Example Usage

```typescript
import { SpeakeasyRecipeBook } from "speakeasy-recipe-book";

const speakeasyRecipeBook = new SpeakeasyRecipeBook();

async function run() {
  await speakeasyRecipeBook.recipes.delete({
    recipeId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyRecipeBookCore } from "speakeasy-recipe-book/core.js";
import { recipesDelete } from "speakeasy-recipe-book/funcs/recipesDelete.js";

// Use `SpeakeasyRecipeBookCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyRecipeBook = new SpeakeasyRecipeBookCore();

async function run() {
  const res = await recipesDelete(speakeasyRecipeBook, {
    recipeId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [custom_operations.DeleteRecipeRequest](../../models/custom_operations/deletereciperequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| custom_errors.SDKError | 4XX, 5XX               | \*/\*                  |