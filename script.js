// === Loading Animation ===
window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");
    loader.style.opacity = 0;
    setTimeout(() => loader.style.display = "none", 1000);
  });
  
  // === Scroll to Section ===
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  
  // === Menu Filtering ===
  const menuItems = [
    { id: 1, name: "Charred Octopus", category: "small-flames", image: "assets/images/charred-octopus.jpg" },
    { id: 2, name: "Smoked Ribeye", category: "main-fire", image: "assets/images/smoked-ribeye.jpg" },
    { id: 3, name: "Burnt Citrus Negroni", category: "smoke-sip", image: "assets/images/negroni.jpg" },
  ];
  
  function renderMenu(filter = "all") {
    const container = document.querySelector(".menu-items");
    container.innerHTML = "";
    const filtered = filter === "all" ? menuItems : menuItems.filter(i => i.category === filter);
  
    // Adjust layout for single item
    if (filtered.length === 1) {
      container.style.display = "flex";
      container.style.justifyContent = "center";
    } else {
      container.style.display = "grid";
      container.style.justifyContent = "center";
    }
  
    filtered.forEach(item => {
      const div = document.createElement("div");
      div.className = "menu-item";
      div.innerHTML = `
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="menu-img"
        >
        <h3>${item.name}</h3>
      `;
      container.appendChild(div);
    });
  }
  
  function filterMenu(category) {
    renderMenu(category);
  }
  
  // Initialize menu on load
  renderMenu();