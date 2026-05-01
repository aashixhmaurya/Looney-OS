# Looney OS

hello everyone this is my project looney os. it is a web based operating system that i made purely with html css and javascript. i wanted to give it a sketchy black and white cartoon look so everything is hand drawn style.

## Navigation
using windows is very simple. just click and hold the top bar to move them around.
- to close a window just drag it to the top right corner of the screen
- to make it full screen drag it to the top edge
- to minimize just drag the window down to the bottom near the taskbar

## Terminal
if you want to use the terminal just open it and type help to see all the commands. honestly i didnt focus much on the terminal so it is very basic right now.

## Other Cool Features
- **Auto Save:** everything you do like changing wallpaper, writing notes, or high scores in games is saved in your browser locally. so if you refresh the page your data is still there.
- **Right Click:** you can right click anywhere on the desktop to open a custom menu for quick note, settings, and refresh.

## Files App
here you can manage your stuff. there are default folders like pictures videos and a hidden safe folder which asks for a password. you can move files around or delete them into the recycle bin. 
to add your own files you just have to open the folder where you want to put it and simply drag and drop the file from your pc screen. just remember the max file drop limit is 10 mb.

## Settings
in settings you get a volume slider to control the os audio. the main feature here is the wallpaper system where you can drop any image to change your desktop background. there is also a small about section.

## Music Player
i have not added any music by default. if you want to listen to songs you just have to drop your mp3 files inside the Music folder in the files app. then open the music app and you can play them. you can also create new folders inside the music folder to make your own albums.

## Other Apps
there is a calendar notes doodle pad and calculator. these are just normal basic apps like you see everywhere to help you do basic things.

## Games
i also added 2 basic games. you can just open them and play using your keyboard arrow keys.

## Browser
the browser is very basic because i used iframe to build it. because of iframe limitations many websites dont open and refuse to connect. this was a big problem and i havent learned much things other than iframes right now so i added a button to open those sites safely in a new tab. 
but i mainly made this browser to read real wikipedia pages because wikipedia works perfectly inside it and we can read topics and articles in the cool black and white theme.

## Limitations
since this is running completely on browser memory there are some limits
- if you drop too many heavy files the browser storage will get full and it wont save new things
- many popular websites block iframes so the browser will show refused to connect error for them
- terminal is just visual and only has basic commands
- on very small mobile screens dragging and resizing windows might feel a bit tricky

## Things I Optimized
- File system
- Multi file handling
- Memory management to stop lag
- Wallpaper system

## APIs Used
- Google Fonts for the sketchy text style
- Google Sign In API for the login page 
- Tailwind CSS for the login page design

thanks for checking out my project. hope you like it!