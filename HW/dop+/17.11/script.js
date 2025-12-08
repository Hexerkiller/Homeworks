const search = document.createElement("input");
search.id = "search";
search.placeholder = "Search";
document.body.append(search);

function showcard() {
  const container = document.createElement("div");
  container.id = "container";
  document.body.append(container);
  console.log(container);
  return container;
}

const cardView = showcard();

async function loadData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("fetch err");
  }
  return await res.json();
}

async function showInfo(par) {
  try {
    const data = await loadData();

    data.forEach((item) => {
      const card = document.createElement("div");
      card.id = "card";

      const image = document.createElement("img");
      image.src = "./img.jpg";

      const name = document.createElement("p");
      name.id = "name";
      name.textContent = `Name :` + item.name;

      const username = document.createElement("p");
      username.id = "username";
      username.textContent = `Username :` + item.username;

      const email = document.createElement("p");
      email.id = "email";
      email.textContent = `Email :` + item.email;

      const address = document.createElement("p");
      address.id = "adress";
      address.textContent = address.textContent = 
      `City: ${item.address.city}
      Street: ${item.address.street}
      Suite: ${item.address.suite}
      Zip: ${item.address.zipcode}`;

      card.append(image, name, username, email, address);
      par.append(card);
    });
  } catch (e) {
    console.error("Error loading items");
  }
}

showInfo(cardView);
