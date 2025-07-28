 let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "300px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        };
const phrases=[
       "ارشيل للخدمات الهندسية"
   

];
document.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('.image');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          image.classList.add('show');
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(image);
});






