// ================================
// Dark mode toggle with persistence
// ================================

const toggle = document.getElementById('dark-toggle');

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  if (toggle) toggle.textContent = 'light mode';
} else {
  if (toggle) toggle.textContent = 'dark mode';
}

// Toggle theme on click
if (toggle) {
  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');

    toggle.textContent = isDark ? 'light mode' : 'dark mode';

    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// ================================
// Reusable Image Switcher
// ================================

function setupImageSwitcher(slotClass, images) {
  const slot = document.querySelector(`.slot.${slotClass}`);
  if (!slot) return;

  const img = slot.querySelector("img");
  const prevBtn = slot.querySelector(".arrow.left");
  const nextBtn = slot.querySelector(".arrow.right");
  if (!img || !prevBtn || !nextBtn) return;

  const storageKey = `fit:${slotClass}`;

  // load saved index (if any)
  let index = parseInt(localStorage.getItem(storageKey), 10);
  if (Number.isNaN(index) || index < 0 || index >= images.length) index = 0;

  function update() {
    img.src = images[index];
    localStorage.setItem(storageKey, index); // save every time
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    update();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    update();
  });

  update(); // set initial image + persist
}


// ================================
// Your image lists (edit these)
// ================================

setupImageSwitcher("accessory", [
  "images/accessory/chain_wallet.png",
  "images/accessory/seiko.png",
"images/accessory/uniqlo_scarf.png",
]);

setupImageSwitcher("jacket", [
  "images/jacket/uniqlo_puffer.png",
  "images/jacket/wolverine_jacket.png",
  "images/jacket/uw_sweater.png"
]);

setupImageSwitcher("cologne", [
  "images/cologne/valentino.png",
  "images/cologne/dior.png",
  "images/cologne/ysl.png",
  "images/cologne/burberry.png",
  "images/cologne/cobalt.png",
  "images/cologne/spicebomb.png"
]);

setupImageSwitcher("undershirt", [
  "images/shirt/uniqlo_white_longsleeve.png",
  "images/shirt/uw_shirt.png",
  "images/shirt/dawg_daze.png"
  //"images/shirt/messi.png"
]);

setupImageSwitcher("pants", [
  "images/pants/grey_jeans.png",
  "images/pants/gap_blue.png",
  "images/pants/pajama_pants.png"
]);

setupImageSwitcher("ring", [
  //"images/jewelry/mejuri_ring.png",
  "images/jewelry/mejuri_swirl.png",
  "images/jewelry/nicoles_ring.png",
  "images/jewelry/tinas_ring.png",
  "images/jewelry/vines.png",
  "images/jewelry/constellations.png"
  //"images/jewelry/vivienne.png"
]);

