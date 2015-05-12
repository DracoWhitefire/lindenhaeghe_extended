// ==UserScript==
// @name        Lindenhaeghe Extended
// @namespace   lindenhaeghe_extended
// @include     https://hypotheekbond.lindenhaeghe.nl/mijn-lindenhaeghe/mijn-elearning/*
// @version     1
// @grant       none
// ==/UserScript==


var Lindenhaeghe_Extended = Lindenhaeghe_Extended || {
  init: function init() {
    Lindenhaeghe_Extended.addEventListeners();
  },
  
  addEventListeners: function addEventListeners() {
    Lindenhaeghe_Extended.addNavArrowListener();
  },
  
  addNavArrowListener: function addNavArrowListener() {
    $(document).keydown(function(e){
      if ((e.keyCode || e.which) == 37) { // linkerpijl
        Lindenhaeghe_Extended.previousPage();
      }
      if ((e.keyCode || e.which) == 39) { // rechterpijl
        Lindenhaeghe_Extended.nextPage();
      }
    });
  },
  previousPage: function previousPage() {
    var $button = $('a.btn.back.left');
    if ($button.attr('href') == 'javascript:;') {
      eval($button.attr('onclick'));
    } else if ($button.attr('href').match(/\/mijn-lindenhaeghe\/mijn-elearning\//).length) {
      window.location.href = $button.attr('href');
    }
  },
  nextPage: function nextPage() {
    var $button = $('a.btn.right');
    if (($button.attr('href') == 'javascript:;') && ($button.attr('href') == 'javascript:;')) {
      eval($button.attr('onclick'));
    } else if ($button.attr('href').match(/\/mijn-lindenhaeghe\/mijn-elearning\//).length) {
      window.location.href = $button.attr('href');
    }
  },
  
};


$(document).ready(function () {
  Lindenhaeghe_Extended.init();
});
