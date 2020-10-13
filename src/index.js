document.addEventListener('DOMContentLoaded', () => {
  console.log('please work');
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');

  colorRect(0, 0, canvas.width, canvas.height, "black");
  colorText("LOADING IMAGES", canvas.width / 2, canvas.height / 2, "white");

  loadImages(); 
});
