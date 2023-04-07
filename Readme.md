# Scripts
  Install: npm install
  
  Build: npm run build
  
  Lint: npm run lint
  
  Prettify: npm run prettier
  
  Run unit tests: npm run test
  
  Start server: npm run start

# Usage
The server will listen on port 5000

Endpoint to resize images

http://localhost:5000/api/images

Expected query arguments are:
  filename: Available filenames are:
  encenadaport
  fjord
  icelandwaterfall
  palmtunnel
  santamonica
  width: numerical pixel value > 0
  height: numerical pixel value > 0

Example 1
http://localhost:5000/api/images Will display a hint and list available image names.

Example 2
http://localhost:5000/api/images?filename=palmtunnel Will display the original palmtunnel image.

Example 3
http://localhost:5000/api/images?filename=palmtunnel&width=300&height=400 Will scale the palmtunnel image to 300 by 400 pixels and store the resulting image. On subsequent calls will serve the resized image instead of resizing the original again.

Example 4
http://localhost:3000/api/images?filename=palmtunnel&width=-400&height=200 Invalid width parameter that will be hinted to.

Example 5
http://localhost:3000/api/images?filename=palmtunnel&width=200 Will adjust the width only.

Example 6
http://localhost:3000/api/images?filename=palmtunnel&height=200 Will adjust the height only.

Example 7
http://localhost:3000/api/images?filename=test Will display a hint and list av.ailable image names.

# Notes
Images are served from assets/full. Further images with the extension can be put into that directory, but the filetype is not checked (not required in exercise).
Image thumbs will be stored in assets/thumb and can be deleted from there to verify that in that case they will be re-created on subsequent calls to the same endpoint.
