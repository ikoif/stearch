function searchTable(elementid, inputid, displaymode, classname){
	
	if(typeof elementid === 'undefined'){
		elementid = "#"+elementid;
	}else{
		alert('You need to provide the element id, this is the first argument');
	}
	
	if(typeof classname === 'undefined'){
		query = $(this).val();
	}else{
		inputid = "#"+inputid;
		query = $(inputid).val();
	}
	
	query = query.toLowerCase();
	
	if(typeof classname === 'undefined'){
		classname = ".searchable_row";
	}else{
		classname = "." + classname;
	}
	
	if(typeof displaymode === 'undefined'){
		displaymode = "block";
	}
	
	$(elementid).children(classname).each(function() {
		var str = purifyText($(this).html());
			result_multsearch = 0;
			result_multsearch_check = 0;
			n=query.split(" ");
			for (i = 0; i < n.length; ++i) {
				if(n[i]!=" " && n[i]!=""){
				    b=str.search(n[i]);
				    if(b==-1){
					}else{
						result_multsearch++;
					}
					result_multsearch_check++;
				}
			}

			if(result_multsearch == result_multsearch_check){
				$(this).css('display',displaymode);
			}else{
				$(this).css('display',displaymode);
			}
	});
}

function purifyText (txt) {
	var intext = txt;
	str = intext.toLowerCase();
	str = str.replace(/<[^>]*>/g, "");
	str = str.replace(/\n/gm, "");
	str = str.replace(/\t/gm, " ");
	return str;
}
