
document.getElementById("play_game").addEventListener("click", play);

document.getElementById("reshuffle1").addEventListener("click", function() {
  reshuffle("1")});
document.getElementById("reshuffle2").addEventListener("click", function() {
  reshuffle("2")});

document.getElementById("add_links?").addEventListener("click", generate_links);
document.getElementById("final_connection").addEventListener("click", link_the_actors);

document.getElementById("head_link_button1").addEventListener("click", function() {
  open_hidden_panel(this.id)});
document.getElementById("head_link_button2").addEventListener("click", function() {
  open_hidden_panel(this.id)});
document.getElementById("back_button").addEventListener("click", return_home);

document.getElementById("submit_link").addEventListener("click", add_link);

document.getElementById("overlay").addEventListener("click", return_home);
document.getElementById("close_out").addEventListener("click", return_home);
