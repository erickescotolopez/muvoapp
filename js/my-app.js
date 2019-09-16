// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/fotografia/',
    	url: 'fotografia.html',
    	name: 'fotografia',
  		},
		{
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',	
		},
		
		{
		path: '/servicios/',
    	url: 'servicios.html',
    	name: 'serivicios',	
		},
		
		{
		path: '/formulario/',
    	url: 'formulario.html',
    	name: 'formulario',	
		},
		
		{
		path: '/profile2/',
    	url: 'profile2.html',
    	name: 'profile2',	
		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

