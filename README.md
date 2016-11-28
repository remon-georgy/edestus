## USAGE
```bash
$ git clone https://github.com/remon-georgy/edestus.git
$ cd edestus
$ npm install
$ npm start
```

## IMPLEMENTATION NOTES
- create-react-app was used as a stub.
- Responsiveness was implemented as pure FlexBox.
- Dependencies were kept to the minimum.
- Inline CSS was preferred to global CSS, in order to avoid conflicts.
- Almost all components are presentational.
- Material-ui was used for convinienve, but if I start over I'd probably remove it.
- All props are passed from root Component. That's probably not sustainable, but it will be simple to refactor it if need be.
- Entire application is stateless, I didn't need to use setState even once. Hence adding Redux wouldn't be beneficial.

## TODO
**given enought time I would tackle the following points:**
* Add missing styles.
* Add all overlaying text.
* Use react-router hash history for navigation
* Move components to a dedicated directory, while instructing webpack to load modules from there.
* Same for images.
* Some sectios are properly responsive, while others could use more work, namely Product and About sections.
* Move all colors to a shared palette.
* Add at least one unit test to make sure App is reachable.