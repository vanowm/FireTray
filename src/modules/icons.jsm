/* -*- Mode: js2; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

this.EXPORTED_SYMBOLS = ['EMBEDDED_ICON_FILES'];

const {classes: Cc, interfaces: Ci, results: Cr, utils: Cu} = Components;

Cu.import("resource://firetray/icons/blank-icon.bmp.jsm");
Cu.import("resource://firetray/icons/mail-unread.bmp.jsm");
Cu.import("resource://firetray/icons/gtk-preferences.bmp.jsm");
Cu.import("resource://firetray/icons/application-exit.bmp.jsm");
Cu.import("resource://firetray/icons/document-new.bmp.jsm");
Cu.import("resource://firetray/icons/gtk-edit.bmp.jsm");
Cu.import("resource://firetray/icons/gtk-apply.bmp.jsm");

const EMBEDDED_ICON_FILES = {
  'blank-icon': { use: 'tray', type: 'bmp', bin: BLANK_ICON_BMP },
  'mail-unread': { use: 'tray', type: 'bmp', bin: MAIL_UNREAD_BMP },
  'prefs': { use: 'menu', type: 'bmp', bin: GTK_PREFERENCES_BMP },
  'quit': { use: 'menu', type: 'bmp', bin: APPLICATION_EXIT_BMP },
  'new-wnd': { use: 'menu', type: 'bmp', bin: DOCUMENT_NEW_BMP },
  'new-msg': { use: 'menu', type: 'bmp', bin: GTK_EDIT_BMP },
  'reset': { use: 'menu', type: 'bmp', bin: GTK_APPLY_BMP },
};
