/*- hero-slider -*/
var swiper = new Swiper('.hero-slider', {
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
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