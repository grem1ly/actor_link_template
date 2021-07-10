
document.getElementById("add_links?").addEventListener("click", generate_links);
document.getElementById("final_connection").addEventListener("click", link_the_actors);

document.getElementById("head_link_button1").addEventListener("click", function() {
  open_hidden_panel(this.id)});
document.getElementById("head_link_button2").addEventListener("click", function() {
  open_hidden_panel(this.id)});

document.getElementById("submit_link").addEventListener("click", add_link);
