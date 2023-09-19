**Image Class**

**Constructor:**

- `Image(url, size)`
  - Parameters:
    - `url` (String): Sets the URL of the image.
    - `size` (Size): Sets the size of the image.

**Methods:**

1. `getUrl()`
   - Description: Returns the URL of the image.

2. `setUrl(url)`
   - Parameters:
     - `url` (String): The new URL to update.
   - Description: Updates the URL of the image.

3. `setSize(width, height)`
   - Parameters:
     - `width` (Number): The new width value for the image's size.
     - `height` (Number): The new height value for the image's size.
   - Description: Updates the width and height values of the image's size.

4. `getSize()`
   - Description: Returns the size of the image as a `Size` object.

5. `cloneImage()`
   - Description: Returns a clone of the current image. It creates a new `Image` instance with the same properties (URL and size) as the current object.

The `Image` class allows you to create and manipulate images, including changing the URL, modifying the size, and creating clones of images.
