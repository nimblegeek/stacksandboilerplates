document.addEventListener("DOMContentLoaded", function () {
  const parts = [
    {
      imgSrc: "placeholder1.jpg",
      linkHref: "https://www.example.com",
      linkText: "Web Link 1",
    },
    {
      imgSrc: "placeholder2.jpg",
      linkHref: "https://www.example.com",
      linkText: "Web Link 2",
    },
    {
      imgSrc: "placeholder3.jpg",
      linkHref: "https://www.example.com",
      linkText: "Web Link 3",
    },
    {
      imgSrc: "placeholder4.jpg",
      linkHref: "https://www.example.com",
      linkText: "Web Link 4",
    },
    {
      imgSrc: "placeholder5.jpg",
      linkHref: "https://www.example.com",
      linkText: "Web Link 5",
    },
    {
      imgSrc: "placeholder6.jpg",
      linkHref: "https://www.example.com",
      linkText: "Web Link 6",
    },
    {
      imgSrc: "placeholder7.jpg",
      linkHref: "https://www.example.com",
      linkText: "Web Link 7",
    },
    {
      imgSrc: "placeholder8.jpg",
      linkHref: "https://www.example.com",
      linkText: "Web Link 8",
    },
    {
      imgSrc: "placeholder9.jpg",
      linkHref: "https://www.example.com",
      linkText: "Web Link 9",
    },
  ];

  const container = document.getElementById("dynamicContent");

  parts.forEach((part) => {
    const partDiv = document.createElement("div");
    partDiv.classList.add("part");

    const img = document.createElement("img");
    img.src = part.imgSrc;
    img.alt = `Placeholder Image ${part.linkText.split(" ")[2]}`; // Dynamically setting alt text based on link text
    partDiv.appendChild(img);

    const link = document.createElement("a");
    link.href = part.linkHref;
    link.textContent = part.linkText;
    partDiv.appendChild(link);

    container.appendChild(partDiv);
  });
});
