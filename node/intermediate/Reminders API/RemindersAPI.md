**Problem Description (NodeJS: Reminders API)**

Your task is to implement a simple REST API to manage a collection of reminders. Each reminder is represented as a JSON entry with the following keys:

- `id`: The unique reminder ID (Integer).
- `user`: The unique user ID (Integer).
- `description`: The description of the reminder (String).
- `date`: The date of the reminder, stored in UTC format (String).

For example, here's a reminder JSON object:

```json
{
  "id": 2,
  "user": 1,
  "description": "Drink Coffee",
  "date": "2020-08-24T07:28:24.000Z"
}
```

You are provided with a read-only model implementation for these reminders.

Your task is to implement a REST service that exposes the `/reminders` endpoint to manage the collection of reminder records. This endpoint supports the following operations:

**1. POST request to `/reminders`**

- Creates a new reminder.
- Expects a JSON reminder object without the `id` property as the body payload. You can assume that the given object is always valid.
- Adds the given reminder object to the collection of reminders and assigns a unique integer `id` to it. The first created reminder must have `id` 1, the second one 2, and so on.
- The response code is 201, and the response body is the created reminder object.

**2. GET request to `/reminders`**

- Returns a collection of all reminders.
- The response code is 200, and the response body is an array of all reminder objects ordered by their `id`s in increasing order.
- Optionally accepts query parameters `user` and `after`, for example, `/reminders?user=1&after=1598448504000`. All these parameters are optional. In case they are present, only objects matching the parameters must be returned.
- The query parameter "after" accepts the time in milliseconds (Epoch) and can be used to find all the reminders that have the `date` property value after the queried time.

Certainly, here's the continuation of the problem description for the NodeJS Reminders API, focusing on the additional endpoints:

**3. GET request to `/reminders/<id>`**

- Returns a reminder with the given `id`.
- If the matching reminder exists, the response code is 200, and the response body is the matching reminder object.
- If there is no reminder with the given `id` in the collection, the response code is 404 with the response body having the text "ID not found."

**4. DELETE, PUT, PATCH requests to `/reminders/<id>`**

- For DELETE, PUT, and PATCH requests to `/reminders/<id>`, the response code is 405 because the API does not allow deleting or modifying reminders for any `id` value.

In summary, you need to implement a RESTful API for managing reminders. You can create new reminders using a POST request, retrieve all reminders using a GET request (with optional filtering by user and date), and retrieve individual reminders using a GET request with the reminder's `id`. Modifying or deleting reminders is not allowed according to this API's specification.

Ensure that your implementation passes all the provided unit tests.
