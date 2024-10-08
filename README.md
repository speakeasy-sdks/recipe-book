# The Speakeasy Recipe Book SDK for TypeScript

Developer-friendly & type-safe Typescript SDK demonstrating real-code examples of various tasks and use cases.

<p align="center">
  <img width="50%" src="recipe-book-logo.png" alt="The Recipe Book logo" title="The Recipe Book">
</p>

## Overlays

Overlays are applied to extend or alter the functionality of the Recipe Book API.

- [Add "Snacks" tag added to the API](https://github.com/speakeasy-sdks/recipe-book/blob/main/add_snack_tag_overlay.yaml)
- [Hide an internal-only operation from public SDK and mark it as internal only](https://github.com/speakeasy-sdks/recipe-book/blob/main/internal-staff-overlay.yaml)

Overlays are then added as a new workflow source using:
```bash
speakeasy configure sources
```

Application of overlays is shown in the [workflow.yaml](https://github.com/speakeasy-sdks/recipe-book/blob/main/.speakeasy/workflow.yaml#L7-L9) file.

## `x-speakeasy` Extensions

Speakeasy extensions provide fine-tuned control over the SDK, enabling modification to behaviors like retries, pagination, error handling, and other advanced SDK features.

- [Use `x-speakeasy-name-override` to rename an operation in the OpenAPI Spec.](https://github.com/speakeasy-sdks/recipe-book/blob/main/RecipeOpenAPISpec.yaml#L33)
- [Use `x-speakeasy-enums` to add enums to an operation in the OpenAPI Spec.](https://github.com/speakeasy-sdks/recipe-book/blob/main/RecipeOpenAPISpec.yaml#L137-L145)

##### Resources
- [Customization Basics](https://www.speakeasy.com/docs/customize-basics#2-using-x-speakeasy-extensions)
- [`x-speakeasy-name-override`](https://www.speakeasy.com/docs/methods#change-method-names)
- [`x-speakeasy-enums`](https://www.speakeasy.com/docs/data-model/enums#enum-member-names)

## Customize Imports

Speakeasy allows you to customize the paths to which models are generated imported.

- [Update model path definitions in `gen.yaml`.](https://github.com/speakeasy-sdks/recipe-book/blob/main/.speakeasy/gen.yaml#L30-L37)
- [Example of customized import paths used in SDK.](https://github.com/speakeasy-sdks/recipe-book/blob/main/src/funcs/recipesGetById.ts#L12-L21)

##### Resources
- [Customize Imports](https://www.speakeasy.com/docs/structure/imports)


<br></br>
<br></br>
<br></br>

## Auto-generated SDK documentions starts here.
<!-- Start Summary [summary] -->
## Summary

Recipe Book API: A simple (and fictional) API to manage recipes for a Recipe Book.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add https://github.com/speakeasy-sdks/recipe-book
```

### PNPM

```bash
pnpm add https://github.com/speakeasy-sdks/recipe-book
```

### Bun

```bash
bun add https://github.com/speakeasy-sdks/recipe-book
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/recipe-book zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [recipes](docs/sdks/recipes/README.md)

* [getAll](docs/sdks/recipes/README.md#getall) - Get all recipes
* [create](docs/sdks/recipes/README.md#create) - Create a new recipe
* [getById](docs/sdks/recipes/README.md#getbyid) - Get a recipe by ID
* [update](docs/sdks/recipes/README.md#update) - Update an existing recipe by ID
* [delete](docs/sdks/recipes/README.md#delete) - Delete a recipe by ID

### [SpeakeasyRecipeBook SDK](docs/sdks/speakeasyrecipebook/README.md)

* [getRecipeStatus](docs/sdks/speakeasyrecipebook/README.md#getrecipestatus) - Get the status of a recipe

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`getRecipeStatus`](docs/sdks/speakeasyrecipebook/README.md#getrecipestatus) - Get the status of a recipe
- [`recipesCreate`](docs/sdks/recipes/README.md#create) - Create a new recipe
- [`recipesDelete`](docs/sdks/recipes/README.md#delete) - Delete a recipe by ID
- [`recipesGetAll`](docs/sdks/recipes/README.md#getall) - Get all recipes
- [`recipesGetById`](docs/sdks/recipes/README.md#getbyid) - Get a recipe by ID
- [`recipesUpdate`](docs/sdks/recipes/README.md#update) - Update an existing recipe by ID

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SpeakeasyRecipeBook } from "speakeasy-recipe-book";

const speakeasyRecipeBook = new SpeakeasyRecipeBook();

async function run() {
  const result = await speakeasyRecipeBook.getRecipeStatus({
    id: "<id>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SpeakeasyRecipeBook } from "speakeasy-recipe-book";

const speakeasyRecipeBook = new SpeakeasyRecipeBook({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await speakeasyRecipeBook.getRecipeStatus({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `custom_errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `models/custom_errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `getRecipeStatus` method may throw the following errors:

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| custom_errors.SDKError | 4XX, 5XX               | \*/\*                  |

```typescript
import { SpeakeasyRecipeBook } from "speakeasy-recipe-book";
import { SDKValidationError } from "speakeasy-recipe-book/models/custom_errors";

const speakeasyRecipeBook = new SpeakeasyRecipeBook();

async function run() {
  let result;
  try {
    result = await speakeasyRecipeBook.getRecipeStatus({
      id: "<id>",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.recipeBook.com/v1` | None |

```typescript
import { SpeakeasyRecipeBook } from "speakeasy-recipe-book";

const speakeasyRecipeBook = new SpeakeasyRecipeBook({
  serverIdx: 0,
});

async function run() {
  const result = await speakeasyRecipeBook.getRecipeStatus({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { SpeakeasyRecipeBook } from "speakeasy-recipe-book";

const speakeasyRecipeBook = new SpeakeasyRecipeBook({
  serverURL: "https://api.recipeBook.com/v1",
});

async function run() {
  const result = await speakeasyRecipeBook.getRecipeStatus({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SpeakeasyRecipeBook } from "speakeasy-recipe-book";
import { HTTPClient } from "speakeasy-recipe-book/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SpeakeasyRecipeBook({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { SpeakeasyRecipeBook } from "speakeasy-recipe-book";

const sdk = new SpeakeasyRecipeBook({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `SPEAKEASYRECIPEBOOK_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=speakeasy-recipe-book&utm_campaign=typescript)
