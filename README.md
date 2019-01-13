FireTray
=======


Please switch to the feature-tb60 branch for the latest source.  
New releases have been tested with:  

Working:

Windows 10 x64, Thunderbird win32 52.9.1 and 60.0  
openSuSE Leap 15.0, KDE, Thunderbird 52.9.1 and 60.0  

Linux Mint 18.3 Sylvia  
Linux Mint 19 Tara and Thunderbird 60.2.1  
Devuan ASCII with Thunderbird version 60.2.1 (64-bits)  
Ubuntu MATE LTS 18.04 AMD64 and Thunderbird 60.2.1  
Fedora 27, Thunderbird 60.2.1 (64-bit)  
Debian 9.5 x64 Thunderbird 60.3.0  

Thank you for testing !!!  

Not working:  

Windows 10 x64, Thunderbird win64 60.* (icon visibible but no menu, no show/hide on click)  
(K)ubuntu 16.04, Thunderbird (very small icon with GTK)  



Not tested:  

SeaMonkey  
ChatZilla  
Zotero  

other desktops...  



Overview
--------

This is a fork of [foudfou/FireTray](https://github.com/foudfou/FireTray)

The original FireTray has been patched to display the number of unread messages in KDE system tray.

It is a workaround for issues:
* [foudfou/FireTray #143](https://github.com/foudfou/FireTray/issues/143)
* [foudfou/FireTray #210](https://github.com/foudfou/FireTray/issues/210)

To build XPI file just do:
	cd src
	make build

To install icons on Kubuntu:
	cp ./src/chrome/skin/icons/unread/*.svg /usr/share/icons/breeze/actions/16/
	cp ./src/chrome/skin/icons/unread/*.svg /usr/share/icons/breeze/actions/22/
	cp ./src/chrome/skin/icons/unread/*.svg /usr/share/icons/breeze/actions/24/
