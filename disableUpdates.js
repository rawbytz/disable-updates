(function disableUpdates_0_1() {
  function toastMsg(str, sec, err) {
    WF.showMessage(str, err);
    setTimeout(WF.hideMessage, (sec || 2) * 1000);
  }
  const key = "update_notifications";
  const IS_ENABLED = feature(key).on;
  if (!IS_ENABLED) return void toastMsg("<b>Updates feature is disabled.</b>", 5);
  feature(key).toggle();
  const reloadLink = `<br><a href="${location.href}" onclick="WF.hideMessage();location.reload();return true">Click here for required reload</a>"`;
  WF.showMessage(`<b>Updates features has been disabled.${reloadLink}</b>`);
})();