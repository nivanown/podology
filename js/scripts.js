/*- services-dropdown -*/
document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.querySelector('.main-nav__services');
  var contentBlock = document.querySelector('.services-dropdown');

  toggleButton.addEventListener('click', function() {
    toggleButton.classList.toggle('close');
    contentBlock.classList.toggle('show');
  });
});

/*- mobile menu -*/
let toggleBtn = document.querySelector('.menu-btn');
let navBar = document.querySelector('.mobile-dropdown');
toggleBtn.addEventListener('click', function () {
  toggleBtn.classList.toggle('close');
  navBar.classList.toggle('show');
});

/*- mobile-panel -*/
document.getElementById('services-link').addEventListener('click', function() {
  document.getElementById('mobile-modal-1').classList.add('show');
  document.getElementById('mobile-modal-2').classList.remove('show');
  document.getElementById('services-link').classList.add('active');
  document.getElementById('search-link').classList.remove('active');
  document.querySelector('body').classList.add('no-scroll');
});

document.getElementById('search-link').addEventListener('click', function() {
  document.getElementById('mobile-modal-2').classList.add('show');
  document.getElementById('mobile-modal-1').classList.remove('show');
  document.getElementById('search-link').classList.add('active');
  document.getElementById('services-link').classList.remove('active');
  document.querySelector('body').classList.add('no-scroll');
});

var closeButtons = document.querySelectorAll('.mobile-modal__close-btn');
closeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    document.querySelector('body').classList.remove('no-scroll');
    document.querySelectorAll('.mobile-modal').forEach(function(modal) {
      modal.classList.remove('show');
    });

    document.querySelectorAll('.mobile-sm-nav__item').forEach(function(item) {
      item.classList.remove('active');
    });
  });
});

/*- services-dropdown-tabs -*/
const servicesTabs = document.querySelectorAll('.services-dropdown [data-tab-target]');
const servicesTabContents = document.querySelectorAll('.services-dropdown [data-tab-content]');

servicesTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    servicesTabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
    servicesTabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    target.classList.add('active');
  });
});

/*- hero-slider -*/
var swiper = new Swiper('.hero-slider', {
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  autoHeight: true,
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: '.hero-slider .swiper-pagination',
  },
});

/*- phone -*/
$.mask.definitions['9'] = false;
$.mask.definitions['0'] = '[0-9]';
$('.phone-input').mask('8(000) 000-00-00');

/*- questions-accordion -*/
$('.questions-accordion__top-panel').click(function() {
  $(this).next().slideToggle(200);
  $(this).toggleClass('show', 200);
});

/*- select -*/
class SelectManager {
  constructor(selectSelector) {
    this.container = document.querySelector('body');
    this.selectSelector = selectSelector;
    this.init();
  }

  init() {
    this.container.addEventListener('click', (e) => {
      const targetSelect = e.target.closest(this.selectSelector);
      if (targetSelect) {
        this.handleSelectClick(targetSelect);
      } else {
        this.closeAllSelects();
      }
    });

    document.addEventListener('click', (e) => {
      if (
        !e.target.closest(this.selectSelector) &&
        !e.target.closest('.select-list')
      ) {
        this.closeAllSelects();
      }
    });
  }

  handleSelectClick(select) {
    const field = select.querySelector('.select-field');
    const list = select.querySelector('.select-list');

    this.closeOtherSelects(field);

    list.classList.toggle('open');
    field.classList.toggle('turn');

    list.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    const selectItemClickHandler = (e) => {
      const selectedItem = e.target.closest('li');
      if (selectedItem) {
        const result = selectedItem.textContent.trim();
        field.value = result;
        list.classList.remove('open');
        field.classList.remove('turn');
        list.removeEventListener('click', selectItemClickHandler);
      }
    };

    list.addEventListener('click', selectItemClickHandler);
  }

  closeOtherSelects(clickedField) {
    var selects = this.container.querySelectorAll(this.selectSelector);
    for (var i = 0; i < selects.length; i++) {
      var select = selects[i];
      var field = select.querySelector('.select-field');
      var list = select.querySelector('.select-list');

      if (field && list && field !== clickedField) {
        if (list.classList.contains('open')) {
          list.classList.remove('open');
        }
        if (field.classList.contains('turn')) {
          field.classList.remove('turn');
        }
      }
    }
  }

  closeAllSelects() {
    let selects = this.container.querySelectorAll(this.selectSelector);
    for (let i = 0; i < selects.length; i++) {
      let select = selects[i];
      const field = select.querySelector('.select-field');
      const list = select.querySelector('.select-list');

      if (list && field) {
        list.classList.remove('open');
        field.classList.remove('turn');
      }
    }
  }
}

const selectManager = new SelectManager('.select');

/*- tabs -*/
const directionTabs = document.querySelectorAll('.tabs [data-tab-target]');
const directionTabContents = document.querySelectorAll('.tabs [data-tab-content]');

directionTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    directionTabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
    directionTabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    target.classList.add('active');
  });
});

/*- tabs_v2 -*/
const tabsNav = document.querySelectorAll('.gl-tabs-nav [data-tab-target]');
const tabsContent = document.querySelectorAll('.gl-tabs-content [data-tab-content]');

tabsNav.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabsContent.forEach(tabsItem => {
      tabsItem.classList.remove('active');
    });
    tabsNav.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    target.classList.add('active');
  });
});

/*- gl-accordion -*/
$('.gl-accordion__top-panel').click(function() {
  $(this).next().slideToggle(200);
  $(this).toggleClass('show', 200);
});

/*- main-navi -*/
var last_id;
var $top_menu = $('.price-info__nav');
var menu_height = $top_menu.outerHeight(true);
var $menu_items = $top_menu.find('a');
var $scroll_items = $menu_items.map(function(){
  var item = $($(this).attr('href'));
  if (item.length){
    return item;
  }
});

$menu_items.click(function(e){
  var href = $(this).attr('href'),
  offset_top = href === '#' ? 0 : $(href).offset().top - menu_height;
  $('html, body').stop().animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 700);
  e.preventDefault();
});

$(window).scroll(function(){
  var from_top = $(this).scrollTop() + menu_height;
  var mar = parseInt($top_menu.css('margin-bottom'));
  var cur = $scroll_items.map(function(){
    if ($(this).offset().top < from_top + mar){
      return this;
    }
  });
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : '';
  if (last_id !== id){
    last_id = id;
    $menu_items.parent()
      .removeClass('active')
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass('active');
  }
});

/*- type-file -*/
var $file = $('.file-input input'),
    $label = $file.next('.file-input label'),
    $labelText = $label.find('.file-input__text'),
    $labelRemove = $('.file-input__close-btn'),
    labelDefault = $labelText.text();

$file.on('change', function(event){
  var fileName = $file.val().split( '\\' ).pop();
  if( fileName ){
    console.log($file)
    $labelText.text(fileName);
    $labelRemove.show();
  }else{
    $labelText.text(labelDefault);
    $labelRemove.hide();
  }
});

$labelRemove.on('click', function(event){
  $file.val("");
  $labelText.text(labelDefault);
  $labelRemove.hide();
});

/*- days-slider -*/
var swiper = new Swiper('.days-slider', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  speed: 500,
  loop: false,
  navigation: {
    nextEl: '.days-slider .swiper-button-next',
    prevEl: '.days-slider .swiper-button-prev',
  },
});

/*- filter-accordion -*/
document.addEventListener('DOMContentLoaded', function () {
  const panels = document.querySelectorAll('.filter-accordion__item');

  panels.forEach(panel => {
    panel.classList.add('active');
  });

  const panelHeaders = document.querySelectorAll('.filter-accordion__top-panel');

  panelHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const panel = this.parentElement;
      panel.classList.toggle('active');
    });
  });
});

/*- price -*/
let priceGap = 1000;

document.querySelectorAll(".price-slider").forEach((container) => {
const rangeInput = container.querySelectorAll(".range-input input"),
priceInput = container.querySelectorAll(".price-input input"),
range = container.querySelector(".slider .progress");

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
    maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
})

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
});

/*- scrollable-block -*/
var swiper = new Swiper(".scrollable-block", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".scrollable-block .swiper-scrollbar",
  },
  mousewheel: true,
});

/*- filter-accordion__settings -*/
var news = 5;
var shownews = "Показать все";
var hidenews = "Скрыть";

$(".filter-accordion__settings").each(function() {
  var $currentBlock = $(this);
  var $moreLink = $currentBlock.find(".more-link");
  var $listItems = $currentBlock.find("li");

  $moreLink.html(shownews);
  $listItems.not(":lt(" + news + ")").hide();

  if ($listItems.length > news) {
    $moreLink.show();
  } else {
    $moreLink.hide();
  }

  $moreLink.click(function(e) {
    e.preventDefault();

    if ($listItems.eq(news).is(":hidden")) {
      $listItems.filter(":hidden").show();
      $moreLink.html(hidenews);
    } else {
      $listItems.not(":lt(" + news + ")").hide();
      $moreLink.html(shownews);
    }
  });
});

/*- date -*/
var swiper = new Swiper(".product-slider__sm", {
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product-slider__big", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

/*- user-info -*/
function loadPhoto() {
  var userPhoto = document.getElementById('userPhoto');
  var fileInput = document.getElementById('fileInput');
  
  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
      userPhoto.src = e.target.result;
  };

  if (file) {
      reader.readAsDataURL(file);
  }
}

/*- counter -*/
class Counter {
  constructor(container) {
    this.container = container;
    this.counterElement = this.container.querySelector('.counter__input');
    this.decrementButton = this.container.querySelector('.counter__less');
    this.incrementButton = this.container.querySelector('.counter__more');
    
    this.counterValue = 1;
    
    this.updateCounter();
    
    this.decrementButton.addEventListener('click', () => {
      this.decrement();
    });

    this.incrementButton.addEventListener('click', () => {
      this.increment();
    });
  }

  updateCounter() {
    this.counterElement.value = this.counterValue;
  }

  decrement() {
    if (this.counterValue > 0) {
      this.counterValue--;
      this.updateCounter();
    }
  }

  increment() {
    this.counterValue++;
    this.updateCounter();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const counterContainers = document.querySelectorAll('.counter');

  counterContainers.forEach(container => {
    new Counter(container);
  });
});

/*- modal -*/
const myModal = new HystModal({
  closeOnEsc: true,
  backscroll: true,
  afterClose: function(modal){
    let videoframe = modal.openedWindow.querySelector('iframe');
    if(videoframe){
        videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    }
  },        
});


