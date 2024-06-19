# Disable Updates Feature in WorkFlowy
- This will remove the "All Updates" item from the Left Bar.
- This feature is no longer being developed or supported.
- A replacement feature is planned for the future. 

## Installation: Drag this link to your bookmarks bar:

<!-- Special #setup editing instrucions go here -->
 <a href="javascript:(function disableUpdates_0_1(){function toastMsg(str,sec,err){WF.showMessage(str,err);setTimeout(WF.hideMessage,(sec||2)*1e3)}const key=&quot;update_notifications&quot;;const IS_ENABLED=feature(key).on;if(!IS_ENABLED)return void toastMsg(&quot;&lt;b&gt;Updates feature is disabled.&lt;/b&gt;&quot;,5);feature(key).toggle();const reloadLink=`&lt;br&gt;&lt;a href=&quot;${location.href}&quot; onclick=&quot;WF.hideMessage();location.reload();return true&quot;&gt;Click here for required reload&lt;/a&gt;&quot;`;WF.showMessage(`&lt;b&gt;Updates features has been disabled.${reloadLink}&lt;/b&gt;`)})();">disableUpdates</a>


## Instructions:
- Click on the bookmarklet (a banner message will appear)
- "Click here for required reload"
- Uninstall the bookmarklet via Right click > Delete (MacOS: Control+Click > Delete)


## Version Notes:
- v0.1 (2024-06-19): Initial release

<!-- 
LINKS REFERENCING THIS

Move xtras.text info here if necessary
 -->
