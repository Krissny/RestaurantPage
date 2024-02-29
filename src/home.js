export default function () {
  const element = document.createElement("div");
  element.classList.add("content");
  element.innerHTML = `<h1>Bamboo Delights</h1>
  <div class="About">
    <p>
      Bamboo Delights is a delightful choice for a panda-themed restaurant!
      🐼🎋 It conjures images of serene bamboo forests where pandas happily
      munch on their favorite bamboo shoots. Here’s to a cozy and charming
      dining experience at Bamboo Delights! 🍽️🎉
    </p>
  </div>
  <div class="timings">
    <h2>Hours</h2>
    <ul>
      <li>Monday: 10am - 10pm</li>
      <li>Tuesday: 10am - 10pm</li>
      <li>Wednesday: 10am - 10pm</li>
      <li>Thursday: 10am - 10pm</li>
      <li>Friday: 10am - 11pm</li>
      <li>Saturday: 10am - 11pm</li>
    </ul>
  </div>
  <div class="location">
    <h2>Location</h2>
    <p>
      Bamboo Delights Restaurant 57, Place Bertrand Dias Roussel City Munoz
      State Zip Code: 56 824 Country: France
    </p>
  </div>`;
  return element;
}
