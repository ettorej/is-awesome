if (typeof jQuery === "undefined") {
  throw new Error("is-awesome requires jQuery");
}

$(function () {
  	"use strict";

	_init();

  	$.IsAwesome.sidebar(
  		'#menu', 
  		'#main', 
  		'#side-nav'
	);

	$.IsAwesome.scrolling('.scrollable-items', '180px');

  	$.IsAwesome.tree('.menu-list');
  	$.IsAwesome.tabs('.tabs');

  	$.IsAwesome.modals(
  		'.modal-button', 
  		'.modal-background', 
  		'.modal-close'
  	);

  	$('.notification button').click(function(){
		$(this).parent().hide();
	});

});

$.IsAwesome = {};

//IsAwesome options 
$.IsAwesome.options = {
  animationSpeed: 500,
  sideBarWidth: '260px',
  sreenSize: $( window ).width(),
  //icons
  closeSideBarIcon: 'fa-close',
  openSideBarIcon: 'fa-bars',
  starEmptyIcon: 'fa-star-o',
  starIcon: 'fa-star'

};


function _init() {

	$.IsAwesome.sidebar = function(menu, main, sidenav) {
		var $icon = $(menu).find('i');
		var openIcon = $.IsAwesome.options.openSideBarIcon;
		var closeIcon = $.IsAwesome.options.closeSideBarIcon;
		$(menu).on('click', function (e) {
			if($icon.hasClass(openIcon)){
				openNav(main, sidenav);
			}
			if($icon.hasClass(closeIcon)){
				closeNav(main, sidenav);
			}
			$icon.toggleClass(closeIcon);
			$icon.toggleClass(openIcon);
		});

		$(main).click(function(){

			if($icon.hasClass(closeIcon)){
				closeNav(main, sidenav);
				$icon.removeClass(closeIcon);
				$icon.addClass(openIcon);
			}
		});
	};

	$.IsAwesome.tree = function (menu) {
		var _this = this;
		var animationSpeed = $.IsAwesome.options.animationSpeed;
		$(document).on('click', menu + ' li a', function (e) {
		  //Get the clicked link and the next element
		  var $this = $(this);
		  var checkElement = $this.next();

		  if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
		    //Close the menu
		    checkElement.slideUp(animationSpeed, function () {
		      checkElement.removeClass('menu-open');
		    });
		    checkElement.parent("li").removeClass("active");
		  }
		  //If the menu is not visible
		  else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
		    var parent = $this.parents('ul').first();
		    //Close all open menus within the parent
		    var ul = parent.find('ul:visible').slideUp(animationSpeed);
		    //Remove the menu-open class from the parent
		    ul.removeClass('menu-open');
		    var parent_li = $this.parent("li");

		    //Open the target menu and add the menu-open class
		    checkElement.slideDown(animationSpeed, function () {
		      //Add the class active to the parent li
		      checkElement.addClass('menu-open');
		      parent.find('li.active').removeClass('active');
		      parent_li.addClass('active');
		    });
		  }
		  //if this isn't a link, prevent the page from being redirected
		  if (checkElement.is('.treeview-menu')) {
		    e.preventDefault();
		  }
		});
	};
	
	$.IsAwesome.scrolling = function(id, h){
		$(id).slimScroll({
		    height: h,
		    size: '3px'
		});
	};
	
	$.IsAwesome.tabs = function(tab) {
		$(document).on('click', tab + ' li a', function (e) {
			$this = $(this);
			var target = $this.attr('data-toggle');
			$this.parent().addClass('is-active');
			openTabs(target);
			switchActiveTabs($this.parent());
		});

	};

	$.IsAwesome.modals = function (button, background, close) {
		$(button).on('click', function (e) {
			var target = $(this).data('target');
			$('html').addClass('is-clipped');
			$(target).addClass('is-active');
		});
		$(document).on('click', background + ', ' + close, function (e) {
			$('html').removeClass('is-clipped');
			$(this).parent().removeClass('is-active');
		});
	};

	function openNav(main, sidenav) {
		var width = $.IsAwesome.options.sideBarWidth;
		$(sidenav).css('width', width);
		/*$("#main").css('margin-left', '250px');*/
		$(main).addClass('overlay');
	}

	function closeNav(main, sidenav) {
		$(sidenav).css('width', '0px');
		/*$("#main").css('margin-left', '0px');*/
		$(main).removeClass('overlay');
	}

	function openTabs(id) {
	    $('.tabs-content').each(function(){
	    	$(this).removeClass('tab-active');
	    });
	    $(id).addClass('tab-active');
	}

	function switchActiveTabs(tab){
	 	$('.tabs li').each(function(){
	    	$(this).removeClass('is-active');
	    });
	    tab.addClass('is-active');
	}

};
