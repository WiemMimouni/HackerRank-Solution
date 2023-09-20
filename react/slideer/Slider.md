### Challenge: React Slideshow App

#### Description

Create a basic slideshow application in React. The application should meet the following requirements:

**Component**: `Slides`

- The `Slides` component takes an array of slides as a prop.
- Each element in the slides array represents a slide and consists of two properties: `title` (string) and `text` (string).

**Functionality**

- On application launch, the first slide must be rendered.
- Clicking the "Next" button shows the next slide. This button is disabled when the current slide is the last one.
- Clicking the "Prev" button shows the previous slide. This button is disabled when the current slide is the first one.
- Clicking on the "Restart" button returns to the first slide. This button is disabled when the current slide is the first one.

**Assumptions**

- You can assume that the passed slides array contains at least one slide.

**UI Elements**

- The "Restart" button must have `data-testid="button-restart"`.
- The "Prev" button must have `data-testid="button-prev"`.
- The "Next" button must have `data-testid="button-next"`.
- Each slide's title must be rendered as an `<h1>` element with `data-testid="title"`.
- Each slide's text must be rendered as a `<p>` element with `data-testid="text"`.

Please note that the component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

#### Software Instructions

The question requires Node 8 LTS or above.

**Download & Install Node JS**

**Git Instructions**

Use the following commands to work with this project:

- Run: `bash bin/env setup && $HOME/.nvm/nvm.sh && npm start`
- Test: `bash bin/env_setup && $HOME/.nvm/nvm.sh && npm test`
- Install: `bash bin/env_setup && $HOME/.nvm/nvm.sh && npm install`

You have a React app with multiple files for this challenge. If you need more details about specific code implementation or files, please let me know.
