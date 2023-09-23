// const imageSlide = document.querySelector(".introimg1");
// const section = document.querySelector(".introduction");

// window.addEventListener("scroll", () => {
//   // Get the position of the section relative to the viewport
//   const sectionRect = section.getBoundingClientRect();

//   // If the section is in the viewport, slide the image in
//   if (sectionRect.top < window.innerHeight / 2) {
//     imageSlide.style.left = "0";
//   } else {
//     // If the section is not in the viewport, hide the image
//     imageSlide.style.left = "-100%";
//   }
// });

const imageSlide = document.querySelector(".introimg1");
const section = document.querySelector(".introduction");

function slideImage() {
  // Get the position of the section relative to the viewport
  const sectionRect = section.getBoundingClientRect();

  // Calculate the midpoint of the section
  const sectionMid = sectionRect.left + sectionRect.width / 2;

  // If the section midpoint is within the viewport width, slide the image in
  if (sectionMid <= window.innerWidth) {
    imageSlide.style.left = "0"; // Slide the image in from left to right
  } else {
    // If the section is not in the viewport, hide the image
    imageSlide.style.left = "-100%";
  }
}

// Initial check
slideImage();

// Check when scrolling
window.addEventListener("scroll", slideImage);
window.addEventListener("resize", slideImage); // Handle resizing as well
