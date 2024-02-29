export default function () {
  const element = document.createElement("div");
  element.classList.add("content");
  element.innerHTML = `<h1>Menu</h1>
  <div class="items">
    <h2>Panda Bites</h2>
    <ul>
      <li>
        <img src="" alt="" />
        <p>
          Bamboo Shoot Dumplings: Steamed dumplings filled with tender
          bamboo shoots and a hint of ginger. Served with soy dipping sauce.
        </p>
      </li>
      <li>
        <img src="" alt="" />
        <p>
          Panda Paw Spring Rolls: Crispy spring rolls stuffed with shredded
          vegetables and tofu. Perfect for sharing!
        </p>
      </li>
      <li>
        <img src="" alt="" />
        <p>
          Panda’s Favorite Wontons: Delicate wontons filled with minced
          chicken, water chestnuts, and aromatic herbs. Served in a clear
          broth.
        </p>
      </li>
    </ul>
  </div>
  <div class="items">
    <h2>Thirst Quenchers</h2>
    <ul>
      <li>
        <img src="" alt="" />
        <p>
          Panda Punch: A refreshing blend of pineapple, coconut, and lime
          juice served over ice.
        </p>
      </li>
      <li>
        <img src="" alt="" />
        <p>
          Bamboo Breeze Smoothie: Banana, spinach, and coconut milk blended
          to perfection.
        </p>
      </li>
    </ul>
  </div>`;
  return element;
}
