function mostActive(customers) {
  const length = customers.length;
  let result = [];
  let occurence = {};
  for (let customer of customers) {
    if (occurence[customer]) {
      occurence[customer]++;
    } else {
      occurence[customer] = 1;
    }
  }
  for (let customer in occurence) {
    if ((occurence[customer] / length) * 100 >= 5) {
      result.push(customer);
    }
  }

  return result.sort((a, b) => a.localeCompare(b));
}
function mostActive(customers) {
  const length = customers.length;
  let result = [];
  let occurence = {};
  for (let customer of customers) {
    if (occurence[customer]) {
      occurence[customer]++;
    } else {
      occurence[customer] = 1;
    }
  }
  for (let customer in occurence) {
    if ((occurence[customer] / length) * 100 >= 5) {
      result.push(customer);
    }
  }

  return result.sort((a, b) => a.localeCompare(b));
}
function mostActive(customers) {
  const length = customers.length;
  let result = [];
  let occurence = {};
  for (let customer of customers) {
    if (occurence[customer]) {
      occurence[customer]++;
    } else {
      occurence[customer] = 1;
    }
  }
  for (let customer in occurence) {
    if ((occurence[customer] / length) * 100 >= 5) {
      result.push(customer);
    }
  }

  return result.sort((a, b) => a.localeCompare(b));
}
