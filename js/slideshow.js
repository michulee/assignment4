// Data
var url = ['parks/joshua.html', 'parks/redwood.html', 'parks/yosemite.html'];
var imageURL = ["joshua.jpg", "redwood.jpg", "yosemite.jpg"];
var title = ["Joshua Tree National Park", "Redwood National Park", "Yosemite National Park"];
var desc = ["Joshua Tree National Park is a vast protected area in southern California. It's characterized by rugged rock formations and stark desert landscapes. Named for the region’s twisted, bristled Joshua trees, the park straddles the cactus-dotted Colorado Desert and the Mojave Desert, which is higher and cooler.", "Redwood National Park is a vast protected area in southern California. It's characterized by rugged rock formations and stark desert landscapes. Named for the region’s twisted, bristled Joshua trees, the park straddles the cactus-dotted Colorado Desert and the Mojave Desert, which is higher and cooler.", "Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. In Yosemite Village are shops, restaurants, lodging, the Yosemite Museum and the Ansel Adams Gallery, with prints of the photographer’s renowned black-and-white landscapes of the area."];

// Initial
var imageIndex = 0;
var increment = false;
var arr = document.querySelectorAll('.slideshow-container');
disappear();
redirect();

// Buttons
// Previous Button
document.getElementById('prev').addEventListener('click', function() {
  imageIndex--;
  // if index is -1, set index to last image
  if(imageIndex === -1) {
    imageIndex = arr.length-1;
  }
  disappear();
});
// Next Button
document.getElementById('next').addEventListener('click', function() {
  imageIndex++;
  // if index is last, set index to 0
  if(imageIndex === arr.length) {
    imageIndex = 0;
  }
  disappear();
});

// Make other sections disappear
function disappear() {
  for(let i = 0; i < arr.length; i++) {
    if(i === imageIndex) {
      arr[i].style.display = "";
      continue;
    }
    arr[i].style.display = "none";
  }
}
// Redirect to details page
function redirect() {
  for (let i = 0; i < arr.length; i++) {
      arr[i].onclick = function () {
          pushParameters(index);
      }
  }
}

// Send Parameters
function pushParameters(imageIndex) {
    window.location.href = url[imageIndex] + "?URL=" + imageURL[imageIndex] + "&title=" + title[imageIndex] + "&desc=" + desc[imageIndex]; 
};



