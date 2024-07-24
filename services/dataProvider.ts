export function dataProvider() {
  const dataStore = {};

  return async function getData(key: any, fetchFunction: any) {
    if (!dataStore[key]) {
      console.log(`Retrieving data for ${key}..`);
      try {
        const data = await fetchFunction();
        console.log(data);
        dataStore[key] = data;
      } catch (error) {
        console.error("Failed to retrieve data for ${key}:, error");
      }
    }
    return dataStore[key];
  };
}

export async function fetchChild() {
  const response = await fetch(
    "https://dev-2jh2sznfizjkeg1.api.raw-labs.com/mock/home-page"
  );
  console.log("calling fetchChild1");
  return await response.json();
}

export async function fetchChild2() {
  const response = await fetch(
    "https://dev-2jh2sznfizjkeg1.api.raw-labs.com/mock/home-page"
  );
  console.log("calling fetchChild2");
  return await response.json();
}

//   // Create the data provider closure
//   const getData = dataProvider();

//   // Fetch different types of data
//   getData('user', fetchUserData).then(data => console.log(data)); // Output: Retrieving data for user... then { user: "John Doe", age: 30 }
//   getData('product', fetchProductData).then(data => console.log(data)); // Output: Retrieving data for product... then { product: "Laptop", price: 1200 }

//   // Subsequent calls will use cached data
//   getData('user', fetchUserData).then(data => console.log(data)); // Output: { user: "John Doe", age: 30 }
//   getData('product', fetchProductData).then(data => console.log(data)); // Outpu
