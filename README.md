# Flickr PWA

## What is this?

Flickr PWA is a demonstration application built using React and accessing Flickr's public REST API. 

The application performs a text search for images and returns matching images along with details about each image. Search results display below the search box.

## Features:

- Search Flickr for images
- View search results below the search area
- Routes reflect search terms (or nav link)
- Error handling when a search term returns no results (try '@@@')
- A faux 404 page for invalid routes
- An About page for information about the project
- Users can enter a search directly in the URL by appending '?query=whatever'. Use '%20' to separate multiple search terms, e.g. '?query=cute%20animals%20in%20sombreros'.

## Local Use

To install the app locally, fork or clone it, and then download it to your local development environment. Be sure to run:

```
npm install
```

to install all dependencies. 

To start the local server use:

```
npm start
```

## Development Notes

Flickr PWA was built with Reactjs and was bootstrapped with Create React App. Routing is accomplished with React Router 4. The app uses the native Fetch API. 