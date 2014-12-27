/**
* Developed by Prashant Patel
*
* Prerequisties : ui.tabs.js and ui.core.js and ofcourse jquery
*/
<div id="tabs-parent-div" class="widget" style="height: auto;">

            <ul class="tab-menu">
               <li class=""><a href="#tab-1">Tab 1</a></li>
               <li class=""><a href="#tab-2">Tab 2</a></li>
			   <li class=""><a href="#tab-3">Tab 3</a></li>
			   <li class="tab-selected"><a href="#tab-4">Tab 4</a></li>
            </ul>
			<!-- Tab 1 -->
            <div id="#tab-1" class="tabdiv ui-tabs-panel ui-tabs-hide"></div>
				
			<!-- Tab 2 -->
			<div id="#tab-2" class="tabdiv ui-tabs-panel ui-tabs-hide"></div>
				
			<!-- Tab 3 -->
			<div id="#tab-3" class="tabdiv ui-tabs-panel ui-tabs-hide"></div>
			
			<!-- Tab 4 -->	
			<div id="#tab-4" class="tabdiv ui-tabs-panel"></div>
			
			</div>
			<script type="text/javascript">
					$(function() {
						$('#tabs-parent-div.widget').css('height', 'auto');
						$('#tabs-parent-div > ul').tabs({ fx: { height: 'toggle', opacity: 'toggle' } });
					});				
			</script>
</div>
