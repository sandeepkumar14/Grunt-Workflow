# Grunt-Workflow
The grunt project setup.

# Info 
There are three main directories contents, development and production.

==> The content folder, contains the SASS files and custom js file.

==> The development folder contains all file for development purpose. All the vendor libraries are not minified. The custom js files are  being combined in one js file and souce of these js files and libraries(css and js) is content folder. I use bower to place the vendor js and css libraries to content folder.

==> The third folder contain files for production purpose. All the files are minfied including HTML files. These production files are ready to be serverd on server. All libraries source is content folder and all the css and js libraries are being combined into one file to reduce the size.

The bower components has been places inside contents folder under libs directory. Then from here these files are been concatenated into development folder (not minified versions) and production folder(minified versions)

