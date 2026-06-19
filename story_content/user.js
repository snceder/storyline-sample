window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var savedName = localStorage.getItem("portfolio_user");

// If a name is found in the browser storage, pass it back to Storyline automatically
if (savedName) {
    player.SetVar("LearnerName", savedName);
}
}

window.Script2 = function()
{
  // 1. Establish communication with the Storyline player
var player = GetPlayer();

// 2. Fetch the text value stored in your Storyline variable
var name = player.GetVar("LearnerName");

// 3. Store that value safely into the browser's persistent LocalStorage
localStorage.setItem("portfolio_user", name);
}

};
