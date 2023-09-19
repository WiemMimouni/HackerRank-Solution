**NodeJS: Blog Posts API**

This challenge involves implementing a simple REST API to manage a collection of blog posts. Each post is a JSON entry with specific properties, and the API exposes endpoints for creating, retrieving, and filtering blog posts. Below are the details of the requests and their descriptions:


**1. POST request to `/posts`**

- Creates a new blog post.
- Expects a JSON blog post object without the `id` and `publishedDate` properties as the body payload.
- Adds the given post object to the collection of blog posts and assigns a unique integer `id` to it. The first created post must have `id` 1, the second one 2, and so on.
- If the `isPublished` property for a post payload object is `true`, it sets the `publishedDate` to the current system time in milliseconds before saving.
- The response code is 201, and the response body is the created post object.

**2. GET request to `/posts`**

- Returns a collection of all posts.
- The response code is 200, and the response body is an array of all post objects ordered by their `ids` in increasing order.
- Optionally accepts query parameters `author` and `isPublished`, for example, `/posts?author=1&isPublished=true`. These parameters are optional. In case they are present, only objects matching the parameters must be returned.
- Only the values `true` or `false` are valid for the `isPublished` query param. If any other value is passed in the request, it should be discarded, and the `isPublished` property must not be queried upon as the data type is Boolean.

**3. GET request to `/posts/<id>`**

- Returns a post with the given `id`.
- If the matching post exists, the response code is 200, and the response body is the matching post object.
- If there is no post with the given `id` in the collection, the response code is 404 with the response body having the text "ID not found".

**4. DELETE, PUT, PATCH requests to `/posts/<id>`**

- For DELETE, PUT, and PATCH requests to `/posts/<id>`, the response code is 405 because the API does not allow deleting or modifying posts for any `id` value.

You need to complete the project to pass the provided unit tests. The project supports the use of the SQLite3 database by default.

Example Requests and Responses:

**POST request to `/posts`**

- Request Body (Not Published):

```json
{
  "isPublished": false,
  "title": "Overcoming Bias in Recruiting to Create a Culture of Diversity & Inclusion",
  "author": 1,
  "timestamp": 1531522701000
}
```

- Response Body:

```json
{
  "id": 1,
  "isPublished": false,
  "title": "Overcoming Bias in Recruiting to Create a Culture of Diversity & Inclusion",
  "author": 1,
  "timestamp": 1531522701006
}
```

**POST request to `/posts`**

- Request Body (Published):

```json
{
  "isPublished": true,
  "title": "Overcoming Bias in Recruiting to Create a Culture of Diversity & Inclusion",
  "author": 1,
  "timestamp": 1531522701000
}
```

- Response Body:

```json
{
  "id": 1,
  "isPublished": true,
  "title": "Overcoming Bias in Recruiting to Create a Culture of Diversity & Inclusion",
  "author": 1,
  "timestamp": 1531527810000,
  "publishedDate": 1598779915685
}
```

These examples demonstrate creating blog posts, retrieving posts with filters, and handling requests for specific posts. Modifying or deleting posts is not allowed in this API.
