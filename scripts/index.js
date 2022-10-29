const headerOpenInputBtn = document.querySelector('.header__search-btn');
const headerInput = document.querySelector('.header__input');


headerOpenInputBtn.addEventListener('click' , () => {
  let item = document.querySelector('.header__input_anim_open');
  if(item) {
    headerInput.classList.remove('header__input_anim_open');
    headerInput.classList.add('header__input_anim_close');
  }
  else {
    headerInput.classList.add('header__input_anim_open');
  }

});







