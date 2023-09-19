**Objective**: Implement inheritance in JavaScript using prototypal inheritance.

**1. Create a function `Activity`**

- Parameters: `amount` (Number)
- Functionality:
  - Assigns the `amount` parameter to a member variable called `amount`.
- Add the following functions to the `Activity` prototype:
  - `setAmount`:
    - Parameters: `value` (Number)
    - Functionality:
      - If `value` is less than or equal to 0, it returns false.
      - Otherwise, it assigns `value` to the member variable `amount` and returns true.
  - `getAmount`:
    - Functionality:
      - Returns the value of the member variable `amount`.

**2. Create a function `Payment`**

- Inherits from the parent `Activity`.
- Parameters: `amount` (Number), `receiver` (string)
- Functionality:
  - Assigns the parent's member variable `amount` and its own member variable `receiver` with the provided values.
- Add the following functions to `Payment`'s existing prototype:
  - `setReceiver`:
    - Parameters: `receiver` (string)
    - Functionality:
      - Assigns the `receiver` parameter to the member variable `receiver`.
  - `getReceiver`:
    - Functionality:
      - Returns the value of the member variable `receiver`.

**3. Create a function `Refund`**

- Inherits from the parent `Activity`.
- Parameters: `amount` (Number), `sender` (string)
- Functionality:
  - Assigns the parent's member variable `amount` and its own member variable `sender` with the provided values.
- Add the following functions to `Refund`'s existing prototype:
  - `setSender`:
    - Parameters: `sender` (string)
    - Functionality:
      - Assigns the `sender` parameter to the member variable `sender`.
  - `getSender`:
    - Functionality:
      - Returns the value of the member variable `sender`.

**Testing**:

- The implementation of these functions will be tested using provided code stubs and input files.
- When calling the `setAmount` function, if the value returned is `false`, print 'Amount not updated'. If `true`, print 'Amount updated to <value>'.
