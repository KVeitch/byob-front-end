(this["webpackJsonpmls2019-sandbox"]=this["webpackJsonpmls2019-sandbox"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(5),c=a.n(r),m=(a(16),a(1)),u=a.n(m),s=a(2),o=a(6),E=a(7),i=a(9),d=a(8),p=a(10),h=(a(18),a(3)),y=a.n(h),f=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://mls2019-api.herokuapp.com/api/v1/teams");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://mls2019-api.herokuapp.com/api/v1/players");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://mls2019-api.herokuapp.com/api/v1/players/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://mls2019-api.herokuapp.com/api/v1/teams/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://mls2019-api.herokuapp.com/api/v1/teams/".concat(t,"/roster"));case 2:return a=e.sent,e.next=5,a.json();case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,l,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},e.next=3,fetch("http://mls2019-api.herokuapp.com/api/v1/teams/",a);case 3:return l=e.sent,e.next=6,l.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,l,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},e.next=3,fetch("http://mls2019-api.herokuapp.com/api/v1/players/",a);case 3:return l=e.sent,e.next=6,l.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,l,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"DELETE",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},e.next=3,fetch("http://mls2019-api.herokuapp.com/api/v1/players/".concat(t),a);case 3:return l=e.sent,n=l.json(),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(i.a)(this,Object(d.a)(t).call(this))).handleChange=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value))},e.setTeamsResponse=Object(s.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:a=t.sent,e.setState({teamsResponse:a});case 4:case"end":return t.stop()}}),t)}))),e.setTeamResponse=Object(s.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e.state.teamNum);case 2:a=t.sent,e.setState({teamResponse:a});case 4:case"end":return t.stop()}}),t)}))),e.setPlayersResponse=Object(s.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:a=t.sent,e.setState({playersResponse:a});case 4:case"end":return t.stop()}}),t)}))),e.setPlayerResponse=Object(s.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e.state.playerNum);case 2:a=t.sent,e.setState({playerResponse:a});case 4:case"end":return t.stop()}}),t)}))),e.setRoster=Object(s.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e.state.rosterNum);case 2:a=t.sent,e.setState({rosterResponse:a});case 4:case"end":return t.stop()}}),t)}))),e.clearTeamsResponse=function(){return e.setState({teamsResponse:[]})},e.clearTeamResponse=function(){return e.setState({teamResponse:{}})},e.clearPlayersResponse=function(){return e.setState({playersResponse:[]})},e.clearPlayerResponse=function(){return e.setState({playerResponse:{}})},e.clearRoster=function(){return e.setState({rosterResponse:[]})},e.clearTeam=function(){return e.setState({teamname:null,city:null,logoUrl:null,stadium:null})},e.clearDelete=function(){return e.setState({deletePlayerNum:null,deletePlayerResponse:""})},e.clearPostPlayerResponses=function(){e.setState({name:null,nationality:null,photoUrl:null,preferedFoot:null,age:null,team:null,postPlayerResponses:{}})},e.makeTeam=Object(s.a)(u.a.mark((function t(){var a,l,n,r,c,m,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,l=a.teamname,n=a.city,r=a.logoUrl,c=a.stadium,m={teamname:l,city:n,logoUrl:r,stadium:c},t.next=4,N(m);case 4:s=t.sent,e.setState({postTeamResponse:s});case 6:case"end":return t.stop()}}),t)}))),e.makePlayer=Object(s.a)(u.a.mark((function t(){var a,l,n,r,c,m,s,o,E;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,l=a.name,n=a.nationality,r=a.photoUrl,c=a.preferedFoot,m=a.age,s=a.team,o={name:l,nationality:n,photoUrl:r,preferedFoot:c,age:m,team:s},t.next=4,P(o);case 4:E=t.sent,e.setState({postPlayerResponse:E});case 6:case"end":return t.stop()}}),t)}))),e.removePlayer=Object(s.a)(u.a.mark((function t(){var a,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.deletePlayerNum,t.next=3,T(a);case 3:l=t.sent,e.setState({deletePlayerResponse:l});case 5:case"end":return t.stop()}}),t)}))),e.render=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"main-title"},"MLS 2019 API Documentation and Sandbox"),n.a.createElement("h2",null,"This API allows you to retrieve data on the 2019 MLS teams and players."),n.a.createElement("main",null,n.a.createElement("h2",null,"API Endpoints"),n.a.createElement("p",null,"Base URL: All URLs referenced in the documentation have the following base:"),n.a.createElement("code",null,"https://mls2019-api.herokuapp.com"),n.a.createElement("div",{className:"main__div--border"},n.a.createElement("h2",null,"GET all teams ",n.a.createElement("code",null,"/api/v1/teams")),n.a.createElement("h3",null,"Response Parameters"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"id")),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"Unique team identifier.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"teamname")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Full name of MLS team.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"stadium")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Full name of the team's home stadium.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"logoUrl")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"URL for the team's logo.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"city")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"City location of the team's stadium")))),n.a.createElement("div",{className:"div__row"},n.a.createElement("p",null,"Try it:",n.a.createElement("span",{className:"bold"},"GET")," /api/v1/teams"),n.a.createElement("button",{type:"button",onClick:e.setTeamsResponse},"Go!"),n.a.createElement("button",{type:"button",onClick:e.clearTeamsResponse},"Clear the field")),n.a.createElement(y.a,{src:e.state.teamsResponse,theme:"hopscotch"})),n.a.createElement("div",{className:"main__div--border"},n.a.createElement("h1",null,"GET team by id or full team name  ",n.a.createElement("code",null,"/api/v1/teams/:id")),n.a.createElement("h3",null,"Query Parameters"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"id")),n.a.createElement("td",null,n.a.createElement("code",null,"number")," / ",n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Unique team identifier or full team name")))),n.a.createElement("h3",null,"Response Parameters"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"id")),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"Unique team identifier.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"teamname")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Full name of MLS team.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"stadium")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Full name of the team's home stadium.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"logoUrl")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"URL for the team's logo.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"city")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"City location of the team's stadium")))),n.a.createElement("div",{className:"div__row"},n.a.createElement("p",null,"Try it:",n.a.createElement("span",{className:"bold"},"GET")," /api/v1/teams/"),n.a.createElement("input",{className:"input__team-id",placeholder:":id",name:"teamNum",maxLength:"40",value:e.state.teamNum,onChange:e.handleChange}),n.a.createElement("button",{type:"button",onClick:e.setTeamResponse},"Go!"),n.a.createElement("button",{type:"button",onClick:e.clearTeamResponse},"Clear the field")),n.a.createElement(y.a,{src:e.state.teamResponse,theme:"hopscotch"})),n.a.createElement("div",{className:"main__div--border"},n.a.createElement("h1",null,"GET all player ",n.a.createElement("code",null,"/api/v1/players")),n.a.createElement("h3",null,"Response Parameters"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"id")),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"Unique player identifier.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"name")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Full name of player.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"nationality")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Player's country of origin.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"photoUrl")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"URL for the player's image.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"preferedFoot")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Player's dominate foot.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"age")),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"Player's age in years for the 2019 MLS season.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"team")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Player's team at the end of the 2019 MLS season.")))),n.a.createElement("div",{className:"div__row"},n.a.createElement("p",null,"Try it:",n.a.createElement("span",{className:"bold"},"GET")," /api/v1/players"),n.a.createElement("button",{type:"button",onClick:e.setPlayersResponse},"Go!"),n.a.createElement("button",{type:"button",onClick:e.clearPlayersResponse},"Clear the field")),n.a.createElement(y.a,{src:e.state.playersResponse,theme:"hopscotch"})),n.a.createElement("div",{className:"main__div--border"},n.a.createElement("h1",null,"GET player by id ",n.a.createElement("code",null,"/api/v1/players/:id")),n.a.createElement("h3",null,"Query Parameters"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"id")),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"Unique player identifier.")))),n.a.createElement("h3",null,"Response"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"Response"))),n.a.createElement("tr",null,n.a.createElement("th",null,"200"),n.a.createElement("th",null,"Returns a specific player object.")),n.a.createElement("tr",null,n.a.createElement("th",null,"404"),n.a.createElement("th",null,n.a.createElement("code",null,'"error": "There is a not player with an id of 1000"')))),n.a.createElement("h3",null,"Response Parameters"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"id")),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"Unique player identifier.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"name")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Full name of player.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"nationality")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Player's country of origin.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"photoUrl")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"URL for the player's image.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"preferedFoot")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Player's dominate foot.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"age")),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"Player's age in years for the 2019 MLS season.")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"team")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Player's team at the end of the 2019 MLS season.")))),n.a.createElement("div",{className:"div__row"},n.a.createElement("p",null,"Try it:",n.a.createElement("span",{className:"bold"},"GET")," /api/v1/players/"),n.a.createElement("input",{className:"input__player-id",placeholder:":id",name:"playerNum",maxLength:"40",value:e.state.playerNum,onChange:e.handleChange}),n.a.createElement("button",{type:"button",onClick:e.setPlayerResponse},"Go!"),n.a.createElement("button",{type:"button",onClick:e.clearPlayerResponse},"Clear the field")),n.a.createElement(y.a,{src:e.state.playerResponse,theme:"hopscotch"})),n.a.createElement("div",{className:"main__div--border"},n.a.createElement("h1",null,"GET a teams roster ",n.a.createElement("code",null,"/api/v1/teams/:id/roster")),n.a.createElement("h3",null,"Query Parameters"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"id")),n.a.createElement("td",null,n.a.createElement("code",null,"number")," / ",n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Unique team identifier or full team name")))),n.a.createElement("h3",null,"Response"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"Response"))),n.a.createElement("tr",null,n.a.createElement("th",null,"200"),n.a.createElement("th",null,"Returns an array of the player objects associated with a specific team.")),n.a.createElement("tr",null,n.a.createElement("th",null,"404"),n.a.createElement("th",null,n.a.createElement("code",null,"error: `Requested team: ${id}. There is no record of that team`")))),n.a.createElement("div",{className:"div__row"},n.a.createElement("p",null,"Try it:",n.a.createElement("span",{className:"bold"},"GET")," /api/v1/teams/"),n.a.createElement("input",{className:"input__roster-id",placeholder:":id",name:"rosterNum",maxLength:"40",value:e.state.rosterNum,onChange:e.handleChange}),n.a.createElement("p",null,"/roster"),n.a.createElement("button",{type:"button",onClick:e.setRoster},"Go!"),n.a.createElement("button",{type:"button",onClick:e.clearRoster},"Clear the field")),n.a.createElement(y.a,{src:e.state.rosterResponse,theme:"hopscotch"})),n.a.createElement("div",{className:"main__div--border"},n.a.createElement("h1",null,"POST Add a team ",n.a.createElement("code",null,"/api/v1/teams")),n.a.createElement("h3",null,"Parameters"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Required"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"teamname")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Full name of MLS team."),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"stadium")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Full name of the team's home stadium."),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"logoUrl")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"URL for the team's logo."),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"city")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"City location of the team's stadium"),n.a.createElement("td",null,"Yes")))),n.a.createElement("h3",null,"Response"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"Response"))),n.a.createElement("tr",null,n.a.createElement("th",null,"200"),n.a.createElement("th",null,"Returns the new player object.")),n.a.createElement("tr",null,n.a.createElement("th",null,"422"),n.a.createElement("th",null,n.a.createElement("code",null,'error: `Expected format: { teamname: <String>, city: <String>, stadium: <Sring>, logoUrl: <String> }. You\'re missing a "${requiredParameter}" property.` ')))),n.a.createElement("div",{className:"div__row"},n.a.createElement("p",null,"Try it:",n.a.createElement("span",{className:"bold"},"GET")," /api/v1/teams/"),n.a.createElement("div",{className:"input-container"},n.a.createElement("input",{className:"input__teamname multi-input",placeholder:"Team Name",name:"teamname",value:e.state.teamname,onChange:e.handleChange}),n.a.createElement("input",{className:"input__city multi-input",placeholder:"City",name:"city",value:e.state.city,onChange:e.handleChange}),n.a.createElement("input",{className:"input__stadium multi-input",placeholder:"Stadium",name:"stadium",value:e.state.stadium,onChange:e.handleChange}),n.a.createElement("input",{className:"input__logoUrl multi-input",placeholder:"URL for team logo",name:"logoUrl",maxLength:"40",value:e.state.logoUrl,onChange:e.handleChange})),n.a.createElement("button",{type:"button",onClick:e.makeTeam},"Go!"),n.a.createElement("button",{type:"button",onClick:e.clearTeam},"Clear the field")),n.a.createElement(y.a,{src:e.state.postTeamResponse,theme:"hopscotch"})),n.a.createElement("div",{className:"main__div--border"},n.a.createElement("h1",null,"POST Add a player ",n.a.createElement("code",null,"/api/v1/players")),n.a.createElement("h2",null,"PLAYERS CAN ONLY BE ADDED TO EXISTING TEAMS"),n.a.createElement("h3",null,"Parameters"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Required"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"name")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Full name of player."),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"nationality")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Player's country of origin."),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"photoUrl")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"URL for the player's image."),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"preferedFoot")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Player's dominate foot."),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"age")),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"Player's age in years for the 2019 MLS season."),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"team")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"Player's team"),n.a.createElement("td",null,"Yes")))),n.a.createElement("h3",null,"Response"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"Response"))),n.a.createElement("tr",null,n.a.createElement("th",null,"200"),n.a.createElement("th",null,"Returns a specific player object.")),n.a.createElement("tr",null,n.a.createElement("th",null,"404"),n.a.createElement("th",null,n.a.createElement("code",null,'error: `Expected format: { name: <String>, age: <Int>, photoUrl: <String>, nationality: <String>, preferedFoot: <String>, team: <String>, }. You\'re missing a "${param}" property.`')))),n.a.createElement("div",{className:"div__row player-post"},n.a.createElement("p",null,"Try it:",n.a.createElement("span",{className:"bold"},"POST")," /api/v1/players"),n.a.createElement("p",{className:"options"},"Options:"),n.a.createElement("div",{className:"input-container"},n.a.createElement("input",{className:"input__name multi-input",placeholder:"Player Name",name:"name",value:e.state.name,onChange:e.handleChange}),n.a.createElement("input",{className:"input__nationality multi-input",placeholder:"Player Nationality",name:"nationality",value:e.state.nationality,onChange:e.handleChange}),n.a.createElement("input",{className:"input__photoUrl multi-input",placeholder:"Photo URL",name:"photoUrl",value:e.state.photoUrl,onChange:e.handleChange}),n.a.createElement("input",{className:"input__preferedFoot multi-input",placeholder:"Prefered Foot",name:"preferedFoot",maxLength:"40",value:e.state.preferedFoot,onChange:e.handleChange}),n.a.createElement("input",{className:"input__age multi-input",placeholder:"Player Age",name:"age",maxLength:"3",value:e.state.age,onChange:e.handleChange}),n.a.createElement("input",{className:"input__team multi-input",placeholder:"Player Team",name:"team",maxLength:"40",value:e.state.team,onChange:e.handleChange})),n.a.createElement("button",{type:"button",onClick:e.makePlayer},"Go!"),n.a.createElement("button",{type:"button",onClick:e.clearPlayer},"Clear the field")),n.a.createElement(y.a,{src:e.state.postPlayerResponse,theme:"hopscotch"})),n.a.createElement("div",{className:"main__div--border"},n.a.createElement("h2",null,"DELETE a player ",n.a.createElement("code",null,"/api/v1/players")),n.a.createElement("h3",null,"Response"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"Response"))),n.a.createElement("tr",null,n.a.createElement("th",null,"200"),n.a.createElement("th",null,"Player ${id} sucessfully deleted.")),n.a.createElement("tr",null,n.a.createElement("th",null,"404"),n.a.createElement("th",null,n.a.createElement("code",null,"No player with the id of ${id}")))),n.a.createElement("h3",null,"Response"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"Response"))),n.a.createElement("tr",null,n.a.createElement("th",null,"200"),n.a.createElement("th",null,"Returns an array of the player objects associated with a specific team.")),n.a.createElement("tr",null,n.a.createElement("th",null,"404"),n.a.createElement("th",null,n.a.createElement("code",null,"error: `Requested team: ${id}. There is no record of that team`")))),n.a.createElement("div",{className:"div__row"},n.a.createElement("p",null,"Try it:",n.a.createElement("span",{className:"bold"},"DELETE")," /api/v1/teams/"),n.a.createElement("input",{className:"input__del-player-num-id",placeholder:":id",name:"deletePlayerNum",maxLength:"4",value:e.state.deletePlayerNum,onChange:e.handleChange}),n.a.createElement("p",null,"/roster"),n.a.createElement("button",{type:"button",onClick:e.removePlayer},"Go!"),n.a.createElement("button",{type:"button",onClick:e.clearDelete},"Clear the field")),n.a.createElement(y.a,{src:e.state.rosterResponse,theme:"hopscotch"}))))},e.state={teamsResponse:[],playersResponse:[],playerResponse:{},teamResponse:{},rosterResponse:[],postPlayerResponse:{},postTeamResponse:{},deletePlayerResponse:"",deletePlayerNum:null,playerNum:null,teamNum:null,rosterNum:null,teamname:null,city:null,logoUrl:null,stadium:null,name:null,nationality:null,photoUrl:null,preferedFoot:null,age:null,team:null},e}return Object(p.a)(t,e),t}(l.Component);c.a.render(n.a.createElement(C,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.fcaef733.chunk.js.map