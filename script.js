$( document ).ready(function() {



	$("#test").css("color","blue");

	var wowDirectory = "https://render-eu.worldofwarcraft.com/character/";
	
	//When "Go!" button is clicked, initiate API CALL
	$("#search").click(apiCall);

	function apiCall(){
		var apiURL = getApiURL($("#charName").val(), $("#realmName").val(), "reputation");
		console.log(apiURL);
		
		//BeginJSONCode
		$.getJSON(apiURL, function(data){
			console.log(data);
			$("#test").html(data.thumbnail);
			$("#avatar").attr("src", wowDirectory + data.thumbnail);

			$("#json").text(data.reputation[1].name);

			/*$.each(data.reputation,(function () {
			    $("#json").append(this.name);
			});*/

			$.each(data.reputation, function(arrayID,faction) {
			    $("#testDiv").append('<p class="factionName">' + faction.name + '</p>');
			});
		});
		//EndJSONCode
	}
	
	//Function to format the API String to match current character + realm + field
	function getApiURL(name, realm, field)
	{
		var completeURL = "https://eu.api.battle.net/wow/character/" + realm + "/" + name + "?fields=" + field + "&locale=en_GB&apikey=8cnx86bfjey75u5rjryrhc37p2s9d82t";
		return completeURL;
	}



});
