/* -*- Mode: js2; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

this.EXPORTED_SYMBOLS = ['EMBEDDED_ICON_FILES'];

const {classes: Cc, interfaces: Ci, results: Cr, utils: Cu} = Components;

Cu.import("chrome://firetray/content/modules/icons/blank-icon.bmp.jsm");
Cu.import("chrome://firetray/content/modules/icons/blank-icon.ico.jsm");
Cu.import("chrome://firetray/content/modules/icons/mail-unread.bmp.jsm");
Cu.import("chrome://firetray/content/modules/icons/mail-unread.ico.jsm");
Cu.import("chrome://firetray/content/modules/icons/gtk-preferences.bmp.jsm");
Cu.import("chrome://firetray/content/modules/icons/application-exit.bmp.jsm");
Cu.import("chrome://firetray/content/modules/icons/document-new.bmp.jsm");
Cu.import("chrome://firetray/content/modules/icons/gtk-edit.bmp.jsm");
Cu.import("chrome://firetray/content/modules/icons/gtk-apply.bmp.jsm");

const EMBEDDED_ICON_FILES = {
  'blank-icon-bmp': { use: 'tray', type: 'bmp', bin: BLANK_ICON_BMP },
  'mail-unread-bmp': { use: 'tray', type: 'bmp', bin: MAIL_UNREAD_BMP },
  'blank-icon': { use: 'tray', type: 'ico', bin: BLANK_ICON_ICO },
  'mail-unread': { use: 'tray', type: 'ico', bin: MAIL_UNREAD_ICO },
  'prefs': { use: 'menu', type: 'bmp', bin: GTK_PREFERENCES_BMP },
  'quit': { use: 'menu', type: 'bmp', bin: APPLICATION_EXIT_BMP },
  'new-wnd': { use: 'menu', type: 'bmp', bin: DOCUMENT_NEW_BMP },
  'new-msg': { use: 'menu', type: 'bmp', bin: GTK_EDIT_BMP },
  'reset': { use: 'menu', type: 'bmp', bin: GTK_APPLY_BMP },
};
