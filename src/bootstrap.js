Components.utils.import("resource://gre/modules/Services.jsm");


const PREF_BRANCH = "extensions.firetray.";
const PREFS = {
  firstrun: true,

  hides_on_close: true,
  hides_on_minimize: true,
  hides_single_window: true,
  hides_last_only: false,
  start_hidden: false,
  show_activates: false,
  remember_desktop: false,

  app_icon_type: 0,
  app_browser_icon_names: '["web-browser", "internet-web-browser"]',
  app_mail_icon_names: '["indicator-messages", "applications-email-panel"]',
  app_default_icon_names: '[]',
  app_icon_custom: "",
  new_mail_icon_names: '["indicator-messages-new", "mail-message-new"]',
  show_icon_on_hide: false,
  scroll_hides: true,
  scroll_mode: "down_hides",
  middle_click: 0,
  chat_icon_enable: true,
  chat_icon_blink: true,
  chat_icon_blink_style: 0,

  mail_get_attention: true,
  nomail_hides_icon: false,
  message_count_type: 0,
  mail_notification_enabled: true,
  mail_unread_count_enabled: true,
  mail_notification_type: 0,
  icon_text_color: "#000000",
  mail_icon_custom: "",
  mail_change_trigger: "",
  folder_count_recursive: true,
  // Ci.nsMsgFolderFlags.Archive|Drafts|Junk|Queue|SentMail|Trash|Virtual
  excluded_folders_flags: 1077956384,
  // exposed in 1 tree, hence 2 branches: serverTypes, excludedAccounts
  mail_accounts: '{ "serverTypes": {"pop3":{"order":1,"excluded":false}, "imap":{"order":1,"excluded":false}, "movemail":{"order":2,"excluded":true}, "none":{"order":3,"excluded":false}, "rss":{"order":4,"excluded":true}, "nntp":{"order":5,"excluded":true}, "exquilla":{"order":6,"excluded":true}}, "excludedAccounts": [] }', // JSON
  only_favorite_folders: false,

  with_appindicator: false,
};

function setDefaultPrefs() {
  let branch = Services.prefs.getDefaultBranch(PREF_BRANCH);
  for (let key in PREFS) {
    switch (typeof PREFS[key]) {
      case "boolean":
        branch.setBoolPref(key, PREFS[key]);
        break;
      case "number":
        branch.setIntPref(key, PREFS[key]);
        break;
      case "string":
        branch.setCharPref(key, PREFS[key]);
        break;
      case "object":
        branch.setObjPref(key, PREFS[key]);
        break;
    }
  }
}

function getPref(key) {
  // Cache the prefbranch after first use
  if (getPref.branch == null)
    getPref.branch = Services.prefs.getBranch(PREF_BRANCH);
  // Figure out what type of pref to fetch
  switch (typeof PREFS[key]) {
    case "boolean":
      return getPref.branch.getBoolPref(key);
    case "number":
      return getPref.branch.getIntPref(key);
    case "string":
      return getPref.branch.getCharPref(key);
    case "object":
      return getPref.branch.getObjectPref(key);
  }
}

function startup(data,reason) {
    
  setDefaultPrefs();
    
//  myModule.startup();  // Do whatever initial startup stuff you need to do

  forEachOpenWindow(loadIntoWindow);
  Services.wm.addListener(WindowListener);
}

function shutdown(data,reason) {
  if (reason == APP_SHUTDOWN)
      return;

  forEachOpenWindow(unloadFromWindow);
  Services.wm.removeListener(WindowListener);

//  myModule.shutdown();  // Do whatever shutdown stuff you need to do on addon disable

  Components.utils.unload("chrome://firetray/content/overlay.js");  // Same URL as above

  // HACK WARNING: The Addon Manager does not properly clear all addon related caches on update;
  //               in order to fully update images and locales, their caches need clearing here
  Services.obs.notifyObservers(null, "chrome-flush-caches", null);
}

function install(data,reason) {
}

function uninstall(data,reason) {
}

function loadIntoWindow(window) {
  if (!window) {
    return;
  }
  
  /* call/move your UI construction function here */
}

function unloadFromWindow(window) {
  if (!window) {
    return;
  }
  
  /* call/move your UI tear down function here */
}

function forEachOpenWindow(todo)  // Apply a function to all open browser windows
{
  var windows = Services.wm.getEnumerator("mail:3pane");
  while (windows.hasMoreElements())
    todo(windows.getNext().QueryInterface(Components.interfaces.nsIDOMWindow));
}

var WindowListener =
{
    onOpenWindow: function(xulWindow)
    {
        var window = xulWindow.QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                              .getInterface(Components.interfaces.nsIDOMWindow);
        function onWindowLoad()
        {
            window.removeEventListener("load",onWindowLoad);
            if (window.document.documentElement.getAttribute("windowtype") == "mail:3pane")
                loadIntoWindow(window);
        }
        window.addEventListener("load",onWindowLoad);

        window.addEventListener(
          'load',
          function removeOnloadListener(e) {
            window.removeEventListener('load', removeOnloadListener, true);
            firetrayChrome.onLoad(this); },
          false);
        window.addEventListener(
          'unload',
          function removeOnUnloadListener(e) {
            window.removeEventListener('unload', removeOnUnloadListener, true);
            firetrayChrome.onQuit(this); },
          false);
    },
    onCloseWindow: function(xulWindow) { },
    onWindowTitleChange: function(xulWindow, newTitle) { }
};
