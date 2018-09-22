/* -*- Mode: js2; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

this.EXPORTED_SYMBOLS = ['EMBEDDED_ICON_FILES'];

const {classes: Cc, interfaces: Ci, results: Cr, utils: Cu} = Components;

Cu.import("resource://firetray/icons/blank-icon.bmp.jsm");

const EMBEDDED_ICON_FILES = {
    'blank-icon': { use:'tray', type: "bmp", bin: BLANK_ICON_BMP },
};
