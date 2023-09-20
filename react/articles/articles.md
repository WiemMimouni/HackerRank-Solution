### Challenge: React Sorting Articles App

#### Description

Create a basic article sorting application in React. The application should meet the following requirements:

**Component**: `Articles`

- The `Articles` component receives a list of articles as a prop. Each article is represented as an object with the following properties:
  - `title` (string): The title of the article.
  - `date` (string): The publish date of the article in the format YYYY-MM-DD.
  - `upvotes` (number): The number of upvotes for the article.

**Functionality**

- By default, the articles should be displayed in a table ordered by the number of upvotes in descending order.
- Clicking on the "Most Upvoted" button should reorder and display the articles by the number of upvotes in descending order.
- Clicking on the "Most Recent" button should reorder and display the articles by date in descending order.
- Each article has a unique publish date and number of upvotes.

**UI Elements**

- The button to reorder and display the most upvoted articles must have `data-testid="most-upvoted-link"`.
- The button to reorder and display the most recent articles must have `data-testid="most-recent-link"`.
- Each article must be rendered inside a `<tr>` element that has `data-testid="article"`.
- The title of each article must be rendered in a `<td>` element that has `data-testid="article-title"`.
- The number of upvotes of each article must be rendered in a `<td>` element that has `data-testid="article-upvotes"`.
- The publish date of each article must be rendered in a `<td>` element that has `data-testid="article-date"`.

Please note that the component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

#### Files

- `src/App.js`: You need to complete the implementation of this file.
- `src/components/Articles.js`: You need to complete the implementation of this file.

If you need more specific code details or have any questions about the implementation, please let me know.
