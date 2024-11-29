const fetchCats = document.getElementById("fetchCats");
const catGallery = document.getElementById("catGallery");

fetchCats.addEventListener("click", async () => {
  const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=5";

  try {
    const response = await fetch(apiUrl);
    const cats = await response.json();

    catGallery.innerHTML = ""; // Clear previous images
    cats.forEach(cat => {
      const img = document.createElement("img");
      img.src = cat.url;
      img.alt = "A random cat";
      img.style.width = "200px";
      img.style.margin = "10px";
      catGallery.appendChild(img);
    });
  } catch (error) {
    console.error("Error fetching cat images:", error);
  }
});