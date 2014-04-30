##Starter

This is just a starter template I'm using on projects to help with getting up and running. It just includes a few grunt tasks and basic bower dependencies. I've gitignore'd node_modules and my vendors folder (which bower populates). So if you want to get up and running with this you'll need to do more than just clone.

After cloning this repo you'll need to make sure you have node, grunt and bower installed, then run these commands:

	cd [to Starter's directory]

	npm install

	bower install

This will install all the dependencies. Once complete you can build your source by using grunt 

	grunt build

This will create a "build" directory with minified versions of your files.

This isn't meant to be a framework in any way, shape, or form. If you're not very familiar with grunt and bower, then you should read up on them before using this as you might overwrite your own files or run into unsolvable issues.