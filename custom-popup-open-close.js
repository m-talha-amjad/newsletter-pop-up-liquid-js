setTimeout(function(){
          let isPopupShownLocal = localStorage.getItem('popupShow');
          let isPopupShownSession = sessionStorage.getItem('popupShow');

          if (isPopupShownSession != 'alredy shown' && isPopupShownLocal != 'alredy shown') {

            document.querySelector(".popup").classList.add("visible");
            let popupClose = document.querySelector(".popup__close");
            let SubscribeBtn = document.querySelector("#Subscribe");
            
            function setSessionStorage() {
              document.querySelector(".popup").classList.remove("visible");
              sessionStorage.setItem('popupShow', 'alredy shown');
            }
            popupClose.addEventListener("click", function() {
              document.querySelector(".popup").classList.remove("visible");
              sessionStorage.setItem('popupShow', 'alredy shown');
            });
            SubscribeBtn.addEventListener("click", function() {
              document.querySelector(".popup").classList.remove("visible");
              localStorage.setItem('popupShow', 'alredy shown');
            });
          }
         }, 2000);
