# Design System React Components

## <HeaderManager />
The header manager component manages all of the header components and consists of the following components:

<BodyClasses/>
<SlideNav />
<PageHeader />

All necessary functions and strings are passed from this header manager down to the child components.

It receives the data for the SlideMenu and AvatarMenu from the objects located in /data. Modify these files with your app's menu options and user options.

It also uses a function called getLocation, that calculates the page name based on the location. You may have to modify this function depending on how you name your routes.


## <BodyClasses />
When you open or close the slide menu, the classes on the body need to be changed, so this happens here.


## <SlideNav />
The SlideNav component contains all of the content that appears on the left when you open the navigation. It displays the menuTitle and passes all of the data into its child component, NavOption.


### <NavOption />
The NavOption component is rendered for each of the menu items. It checks to see if each menu item has a child, if so, it also handles the toggling of each parent's sub menu.

## <PageHeader />
The PageHeader component displays the app name and AvatarMenu, as well as handling the toggling of the AvatarMenu.
