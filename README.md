stearch
=======

Funny name for - String Search.
Javascript based DOM client search. A function which hides html elements (divs, table rows, table cells, spans) which do not match the string which is entered in a field. 

###<a href="http://jsbin.com/EYOjiFE/1/">Check demo</a>


##Usage and implementation

Add the *stearch()* to any event handler to trigger the search mechanism, which will filter out all results that do not match, and display the ones that do. 

If you want a search field that has a div structure and a 'search' button, use the follwing example:

<pre>
	&lt;input type=&quot;text&quot; placeholder=&quot;search me&quot; id=&quot;search_employee&quot; /&gt;
	&lt;button onclick=&quot;stearch('employees', 'search_employee', 'row', 'block')&quot;&gt;search&lt;/button&gt;
    &lt;div id=&quot;employees&quot;&gt;
      &lt;div&gt;
        &lt;div class=&quot;head&quot;&gt;Name&lt;/div&gt;&lt;div class=&quot;head&quot;&gt;Class&lt;/div&gt;&lt;div class=&quot;head&quot;&gt;Points&lt;/div&gt;
		&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;div class=&quot;row&quot;&gt;&lt;div class=&quot;data_cell&quot;&gt;Jumpy&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;dog&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;211&lt;/div&gt;&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;&lt;/div&gt;
        &lt;div class=&quot;row&quot;&gt;&lt;div class=&quot;data_cell&quot;&gt;Squeeky&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;cat&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;252&lt;/div&gt;&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;&lt;/div&gt;
        &lt;div class=&quot;row&quot;&gt;&lt;div class=&quot;data_cell&quot;&gt;Tom&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;cat&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;321&lt;/div&gt;&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;&lt;/div&gt;
        &lt;div class=&quot;row&quot;&gt;&lt;div class=&quot;data_cell&quot;&gt;Jerry&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;mouse&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;476&lt;/div&gt;&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;&lt;/div&gt;
        &lt;div class=&quot;row&quot;&gt;&lt;div class=&quot;data_cell&quot;&gt;Rex&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;dog&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;421&lt;/div&gt;&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;&lt;/div&gt;
        &lt;div class=&quot;row&quot;&gt;&lt;div class=&quot;data_cell&quot;&gt;Chewy&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;mouse&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;421&lt;/div&gt;&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;&lt;/div&gt;
        &lt;div class=&quot;row&quot;&gt;&lt;div class=&quot;data_cell&quot;&gt;Purry&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;cat&lt;/div&gt;&lt;div class=&quot;data_cell&quot;&gt;653&lt;/div&gt;&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
</pre>

If you want a search field that will update a filter on each keypress, use the following example:

<pre>
    &lt;input type=&quot;text&quot; placeholder=&quot;search me&quot; onkeyup=&quot;stearch('myTable', this)&quot; /&gt;
    &lt;table id=&quot;myTable&quot;&gt;
      &lt;thead&gt;
        &lt;tr&gt;&lt;td&gt;Name&lt;/td&gt;&lt;td&gt;Gender&lt;/td&gt;&lt;td&gt;Age&lt;/td&gt;&lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
        &lt;tr class=&quot;searchable_row&quot;&gt;&lt;td&gt;John Smith&lt;/td&gt;&lt;td&gt;male&lt;/td&gt;&lt;td&gt;21&lt;/td&gt;&lt;/tr&gt;
        &lt;tr class=&quot;searchable_row&quot;&gt;&lt;td&gt;Ben Hardey&lt;/td&gt;&lt;td&gt;male&lt;/td&gt;&lt;td&gt;25&lt;/td&gt;&lt;/tr&gt;
        &lt;tr class=&quot;searchable_row&quot;&gt;&lt;td&gt;Olivia Green&lt;/td&gt;&lt;td&gt;female&lt;/td&gt;&lt;td&gt;22&lt;/td&gt;&lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
</pre>

If you want a search field with a 'search' button, use the following example:

<pre>
	&lt;input type=&quot;text&quot; placeholder=&quot;search me&quot; id=&quot;query_field&quot; /&gt;
	&lt;button onclick=&quot;stearch('myTable2', 'query_field')&quot;&gt;search&lt;/button&gt;
    &lt;table id=&quot;myTable2&quot;&gt;
      &lt;thead&gt;
        &lt;tr&gt;&lt;td&gt;Name&lt;/td&gt;&lt;td&gt;Gender&lt;/td&gt;&lt;td&gt;Age&lt;/td&gt;&lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
        &lt;tr class=&quot;searchable_row&quot;&gt;&lt;td&gt;Greg Burrow&lt;/td&gt;&lt;td&gt;male&lt;/td&gt;&lt;td&gt;26&lt;/td&gt;&lt;/tr&gt;
        &lt;tr class=&quot;searchable_row&quot;&gt;&lt;td&gt;Smith Johnson&lt;/td&gt;&lt;td&gt;male&lt;/td&gt;&lt;td&gt;21&lt;/td&gt;&lt;/tr&gt;
        &lt;tr class=&quot;searchable_row&quot;&gt;&lt;td&gt;Petra Reece&lt;/td&gt;&lt;td&gt;female&lt;/td&gt;&lt;td&gt;32&lt;/td&gt;&lt;/tr&gt;
        &lt;tr class=&quot;searchable_row&quot;&gt;&lt;td&gt;Veronica Baker&lt;/td&gt;&lt;td&gt;female&lt;/td&gt;&lt;td&gt;26&lt;/td&gt;&lt;/tr&gt;
        &lt;tr class=&quot;searchable_row&quot;&gt;&lt;td&gt;Maria Vera&lt;/td&gt;&lt;td&gt;female&lt;/td&gt;&lt;td&gt;27&lt;/td&gt;&lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
</pre>

##*stearch(elementid, inputid [,classname, displaymode])*
Type: Function()

Arguments: the one on [..] are optional, and will be replaced with default values if not provided.

###elementid
type:String

This is the id of the holder or wrapper, which holds the children which will be checked. For example, if you have a field which will searching in a table, this will be the id of the table.

###inputid
Type:String or Object

This is the id of the field which will provide the query. So this is the actuall search box. If the *stearch* function is attached to a *onkeyup, onkeydown or onchange* event handler, this argument can be **this** instead of an id. You should provide an id when the *stearch* is triggered from a button, and **this** when the user searches with a button.

###[classname]
Type:String

Default value:'searchable_row'

This is the name of the class that is assigned to all elements which will be searched. For example if you are searching in a table, every row that you want to be searched can have a class (ie. 's_row') and this class name can be passed to the function arguments. The defualt value is 'searchable_row'.

###[displaymode]
Type:String

Default value:'table-row'

This is the css value of the display property which will be added to all rows that match or do not match when the search iterates through the structure of the desired holder.
