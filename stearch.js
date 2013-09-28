function stearch(elementid, inputid, classname, displaymode){
	
	if(typeof elementid === 'undefined'){
		alert('You need to provide the element id, this is the first argument');
	}else{
		elementid = "#"+elementid;
	}
	
	if(typeof inputid === 'undefined'){
		alert('You need to provide the input id, this is the second argument, you can use "this" if you don\'t have an id ');
	}else{
		if(typeof inputid == "string"){
			inputid = "#"+inputid;
		}
		query = $(inputid).val();
	}

	query = query.toLowerCase();
	
	if(typeof classname === 'undefined'){
		classname = ".searchable_row";
	}else{
		classname = "." + classname;
	}
	
	if(typeof displaymode === 'undefined'){
		displaymode = "table-row";
	}
	
	$(elementid+' '+classname).each(function() {
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
				$(this).css('display','none');
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
