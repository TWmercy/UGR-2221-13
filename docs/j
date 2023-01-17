<script>
    let popup = document.getElementById("popup");
    function openPopup(){
      popup.classList.add("open-popup");
    }
    function closePopup(){
      popup.classList.remove("open-popup");
    }
</script>

<div class="container">

<button type="submit" class="container__btn" onclick="openPopup()">Sign up</button> 
 <!-- the next line of code is for a popup confirmation that will be finished with JS -->
<div class="popup" id="popup">
      <p>You have successfuly signed up, we will contact you with payment information shortly</p>
      <button type="button" onclick="closePopup()">OK</button>
  </div>
  .container{
    width: 100%;
    height: 150px;
    background:gray;
    display: flex;
    align-items: center;
    justify-content: center;
}
.popup{
    width: 400px;
    background-color: #fff;
    border-radius: 6px;
    position:absolute;
    top:0%;
    left: 50%;
    transform: translate(-50%,-50% ) scale(0.1);
    text-align: center;
    padding: 0 30px 30px;
    color:rgb(14, 61, 6);
    visibility: hidden;
    transition: transform 0.4s, top 0.4s;

}
.open-popup{
    visibility: visible;
    top:50%;
    transform: translate(-50%,-50% ) scale(1);
}
