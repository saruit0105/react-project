(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{35:function(e,t,n){e.exports=n(65)},40:function(e,t,n){},41:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(31),l=n.n(r),o=(n(40),n(41),n(13)),i=n(15),s=[{label:"My calendar",path:"/content/calendar",className:"calendar"},{label:"Random recipes",path:"/content/random",className:"randomRecipes"},{label:"Search for a recipe",path:"/content/search",className:"Search"},{label:"Lots of Recipes",path:"/content/morerandoms",className:"lotsOfRandoms"}],u=function(){return s.map((function(e){return c.a.createElement("button",{className:"".concat(e.className," homeLink")},c.a.createElement(i.b,{to:e.path},e.label))}))},p=n(7),m=n.n(p),h=n(16),d=n(8),f=n(9),g=n(11),E=n(10),v=n(12),b=n(6),R=n.n(b),y=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(c)))).state={singleRecipe:null},n.handleRecipeClick=function(e){return function(){n.props.history.push("/content/singleRecipe/".concat(e))}},n.fetchRecipes=Object(h.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("https://api.spoonacular.com/recipes/random?apiKey=".concat("c7c30319422e4b2390111f8faea4d19a"));case 3:t=e.sent,a=t.data,n.setState({singleRecipe:a}),console.log(a.recipes[0]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error fetching Recipes",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.fetchRecipes()}},{key:"render",value:function(){var e=this.state.singleRecipe;return c.a.createElement("div",null,c.a.createElement("div",{className:"randomRecipeCard"},e&&c.a.createElement("div",null,c.a.createElement("img",{src:e.recipes[0].image,alt:"food pics"}),c.a.createElement("p",null,c.a.createElement("strong",null,e.recipes[0].title)),c.a.createElement("div",{className:"frontLists"},c.a.createElement("ul",null,c.a.createElement("p",null,c.a.createElement("strong",null,"Dish type")),e.recipes[0].dishTypes.map((function(e){return c.a.createElement("li",null,e)}))),c.a.createElement("ul",null,c.a.createElement("p",null,c.a.createElement("strong",null,"Diet type")),e.recipes[0].diets.map((function(e){return c.a.createElement("li",null,e)}))))),c.a.createElement("button",null,"Not a fan"),c.a.createElement("button",null,"More details!")))}}]),t}(a.Component),O=function(e){var t=e.history;return c.a.createElement("div",{className:"mainContent"},c.a.createElement("button",{onClick:function(){return t.push("/")}}," Go Back"),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/content/random",component:y}),c.a.createElement(o.a,{path:"/content/moreRandoms",component:j}),c.a.createElement(o.a,{path:"/content/singleRecipe/:id",component:w}),c.a.createElement(o.a,{path:"/content/Search",component:C})))},k=n(34),j=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(c)))).state={randomRecipeArr:null,selectedRecipe:[]},n.randomRecipes=Object(h.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("https://api.spoonacular.com/recipes/random?number=3&apiKey=".concat("c7c30319422e4b2390111f8faea4d19a"));case 3:t=e.sent,a=t.data,n.setState({randomRecipeArr:a}),console.log(a.recipes),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error fetching Recipes",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.handleRecipeClick=function(e){return function(){var t=n.props.history;console.log(e),t.push("/content/singleRecipe/".concat(e))}},n.handleDeleteClick=function(e){return function(){R.a.get("https://api.spoonacular.com/recipes/random?apiKey=".concat("c7c30319422e4b2390111f8faea4d19a")).then((function(t){var a=Object(k.a)(n.state.randomRecipeArr.recipes).concat(t.data.recipes);a.splice(e,1),console.log(a,t.data),n.setState({randomRecipeArr:{recipes:a}}),console.log(t)}))}},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.randomRecipes()}},{key:"render",value:function(){var e=this,t=this.state.randomRecipeArr;return c.a.createElement("div",null,t&&t.recipes.map((function(t){return c.a.createElement("div",{className:"randomRecipeCard"},c.a.createElement("div",null,c.a.createElement("img",{src:t.image,alt:"food pics"}),c.a.createElement("p",null,c.a.createElement("strong",null,t.title)),c.a.createElement("div",{className:"frontLists"},c.a.createElement("ul",null,c.a.createElement("p",null,c.a.createElement("strong",null,"Dish type")),t.dishTypes.map((function(e){return c.a.createElement("li",null,e)}))),c.a.createElement("ul",null,c.a.createElement("p",null,c.a.createElement("strong",null,"Diet type")),t.diets.map((function(e){return c.a.createElement("li",null,e)}))))),c.a.createElement("button",{onClick:e.handleDeleteClick(t)},"Not a fan"),c.a.createElement("button",{onClick:e.handleRecipeClick(t.id)},"Show details!"))})))}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={theRecipe:null},n.fetchRecipes=Object(h.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("https://api.spoonacular.com/recipes/".concat(n.props.match.params.id,"/analyzedInstructions?apiKey=").concat("c7c30319422e4b2390111f8faea4d19a"));case 3:t=e.sent,a=t.data,n.setState({theRecipe:a[0]}),console.log(a[0]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error fetching Recipes",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.recipeDetails=function(){console.log("running the details function");var e=n.state.theRecipe;if(null!==e)return console.log(e.steps),e.steps.map((function(e){return c.a.createElement("div",null,c.a.createElement("p",null,e.step))}))},n.ingredientDetails=function(){console.log("running the details function");var e=n.state.theRecipe;if(null!==e){console.log(e.steps);var t=e.steps.map((function(e){return e.ingredients}));return(t=t.flat(1/0)).map((function(e){return c.a.createElement("ul",null,c.a.createElement("li",null,e.name))}))}},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){console.log("this is the details page bro"),this.fetchRecipes(),this.recipeDetails()}},{key:"render",value:function(){return this.recipeDetails(),console.log("this is the single recipe page"),c.a.createElement("div",null,this.recipeDetails(),this.ingredientDetails())}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(c)))).state={searchTerm:"",searchResults:null},n.handleSearch=function(e){var t=e.target.value;n.setState({searchTerm:t}),console.log(t)},n.getSearchResults=function(){var e="https://api.spoonacular.com/recipes/search?query=".concat(n.state.searchTerm,"number=5&apiKey=").concat("c7c30319422e4b2390111f8faea4d19a");console.log(e),R.a.get("https://api.spoonacular.com/recipes/search?query=".concat(n.state.searchTerm,"&number=5&apiKey=").concat("c7c30319422e4b2390111f8faea4d19a")).then((function(e){return n.setState({searchResults:e})}))},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("input",{onChange:this.handleSearch,onKeyDown:function(t){console.log(t),13===t.keyCode&&(console.log("hello"),e.getSearchResults())}}))}}]),t}(a.Component);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/react-project",REACT_APP_SPOON:"c7c30319422e4b2390111f8faea4d19a"}));var D=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o.a,{path:"/",component:u,exact:!0}),c.a.createElement(o.a,{path:"/content",component:O}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(i.a,null,c.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.6cc30f39.chunk.js.map