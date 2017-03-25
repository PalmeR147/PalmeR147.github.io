$( document ).ready(function() {	$("#test").css("color","blue");	var wowDirectory = "http://render-eu.worldofwarcraft.com/character/";		var repStages = ["Hated","Hostile","Unfriendly","Neutral","Friendly","Honored","Revered","Exalted"]		//When "Go!" button is clicked, initiate API CALL	$("#search").click(apiCall);	function apiCall(){		var apiURL = getApiURL($("#charName").val(), $("#realmName").val(), "reputation");		console.log(apiURL);				//BeginJSONCode		$.getJSON(apiURL, function(data){			console.log(data);			$("#test").html(data.thumbnail);			$("#avatar").attr("src", wowDirectory + data.thumbnail);			$.each(data.reputation, function(arrayID,faction) {
			    //$("#testDiv").append('<p class="factionName">' + faction.name + '</p>');				if(faction.max != 8400)					$("#testDiv").append('<div class="factionBox"><h1 class="factionName">'+faction.name+'</h1><h2 class="factionStanding">'+repStages[faction.standing]+'</h2><div class="reputationProgress"><p class="repCurrent">'+faction.value+'</p><p class="repMax">/'+faction.max+'</p></div></div>');
			});		});		//EndJSONCode	}		//Function to format the API String to match current character + realm + field	function getApiURL(name, realm, field)	{		var completeURL = "https://eu.api.battle.net/wow/character/" + realm + "/" + name + "?fields=" + field + "&locale=en_GB&apikey=8cnx86bfjey75u5rjryrhc37p2s9d82t";		return completeURL;	}});
