
function searchTable(inputid, displaymode, classname){
	inputid = "#"+inputid;
	query = $('#search_text').val();
	query = query.toLowerCase();
	
	if(typeof classname === 'undefined'){
		classname = ".searchable_row";
	}else{
		classname = "." + classname;
	}
	
	$(classname).each(function() {
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
				if(typeof displaymode === 'undefined'){
					$(this).css('display','table-row');
				}else{
					$(this).css('display',displaymode);
				}
				
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
