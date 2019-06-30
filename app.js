var express=require('express')
var app=express()
//var partilcesJS=require('particlesJS')
var login_controller=require('./controllers/loginController')
var live_score_selector_controller = require('./controllers/live_score_selectorController')
var create_new_game_controller = require('./controllers/create_new_gameController')
var list_current_games_controller = require('./controllers/list_current_gamesController')
var scoreboard_controller=require('./controllers/scoreboardController')
var result_sportx_controller=require('./controllers/result_sportxController')
var livescores_controller=require('./controllers/livescoresController')
var athletics_score_controller=require('./controllers/athletics_scoreController')
var sport_indi_pages_controller=require('./controllers/sport_indi_pagesController')
var teams_x_controller=require('./controllers/teams_xController')
//setup template
app.set('view engine','ejs')

//static files
app.use(express.static('./public'))


//fire controllers
login_controller(app)
live_score_selector_controller(app)
create_new_game_controller(app)
list_current_games_controller(app)
scoreboard_controller(app)
result_sportx_controller(app)
livescores_controller(app)
athletics_score_controller(app)
sport_indi_pages_controller(app)
teams_x_controller(app)
app.listen(3000)
console.log('listeneing to port 3000')