# SpeakeasyRecipeBook SDK

## Overview

Recipe Book API: A simple (and fictional) API to manage recipes for a Recipe Book.

### Available Operations

* [getRecipeStatus](#getrecipestatus) - Get the status of a recipe

## getRecipeStatus

Get the status of a recipe

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyRecipeBookCore } from "speakeasy-recipe-book/core.js";
import { getRecipeStatus } from "speakeasy-recipe-book/funcs/getRecipeStatus.js";

// Use `SpeakeasyRecipeBookCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyRecipeBook = new SpeakeasyRecipeBookCore();

async function run() {
  const res = await getRecipeStatus(speakeasyRecipeBook, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [custom_operations.GetRecipeStatusRequest](../../models/custom_operations/getrecipestatusrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[custom_components.RecipeStatus](../../models/custom_components/recipestatus.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| custom_errors.SDKError | 4XX, 5XX               | \*/\*                  |