export default function () {
  const element = document.createElement("div");
  element.classList.add("content");
  element.innerHTML = `<h1>Contact us</h1>
  <p>
    Address: 57, Place Bertrand Dias Roussel City: Munoz State: - Zip Code:
    56 824 Country: France.
  </p>
  <p>
    For inquiries, reservations, or home deliveries, please call us at +33 1
    2345 6789. We look forward to serving you at our cozy panda-themed
    eatery! 🐼🎋
  </p>`;
  return element;
}
