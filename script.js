const API_BASE = "https://api.thedogapi.com/v1";
const API_KEY = "YOUR_API_KEY_HERE"; // replaced during local dev

// RANDOM DOG IMAGE
const loadDogBtn = document.getElementById("loadDog");
const dogContainer = document.getElementById("dogContainer");
const errorEl = document.getElementById("error");

if (loadDogBtn) {
  loadDogBtn.addEventListener("click", getRandomDog);
}

async function getRandomDog() {
  try {
    errorEl.textContent = "";
    const res = await fetch(`${API_BASE}/images/search`, {
      headers: { "x-api-key": API_KEY }
    });

    if (!res.ok) throw new Error("Failed to fetch dog image");

    const data = await res.json();
    dogContainer.innerHTML = `<img src="${data[0].url}" alt="Random Dog" />`;

  } catch (err) {
    errorEl.textContent = err.message;
  }
}

// DOG BREEDS
const breedsContainer = document.getElementById("breedsContainer");
const searchInput = document.getElementById("search");

async function getBreeds() {
  try {
    const res = await fetch(`${API_BASE}/breeds`);
    if (!res.ok) throw new Error("Failed to fetch breeds");

    const breeds = await res.json();
    displayBreeds(breeds);

    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        const filtered = breeds.filter(b =>
          b.name.toLowerCase().includes(value)
        );
        displayBreeds(filtered);
      });
    }

  } catch (err) {
    errorEl.textContent = err.message;
  }
}

function displayBreeds(breeds) {
  breedsContainer.innerHTML = "";
  if (breeds.length === 0) {
    breedsContainer.innerHTML = "<p>No breeds found.</p>";
    return;
  }

  breeds.forEach(breed => {
    const div = document.createElement("div");
    div.className = "breed-card";
    div.innerHTML = `
      <h3>${breed.name}</h3>
      <p><strong>Temperament:</strong> ${breed.temperament || "N/A"}</p>
      <p><strong>Life Span:</strong> ${breed.life_span}</p>
    `;
    breedsContainer.appendChild(div);
  });
}

if (breedsContainer) {
  getBreeds();
}

