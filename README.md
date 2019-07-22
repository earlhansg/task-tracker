# task-tracker
An Angular 8 and Node Express Typescript Task Tracker System


#### Main Dev Tools Used
`Angular 8` `Angular CLI 8` `Node` `Express` `Typescript` `ES6` `Babel 7`

```
Github Repo:
git clone https://github.com/earlhansg/task-tracker
```

#### How to run

````
 $ npm run install:all    - Installs all package.json from express & angular
 
 $ npm run ng:start       - Runs angular at http://localhost:4200
 $ npm run node:start     - Runs express at http://localhost:3000
 $ npm run start          - Runs both angular and express
````


#### Change Existing Angular App 
If you want to remove the existing public/app angular directory and generate other angular app with angular your cli version. These are some notes to consider:

```
1.) Update the @angular/cli version on the root folder's package.json matching your global version
2.) Perform ng new or ng generate on public folder
3.) Update also the Node package.json and rename the "install:all" and "ng:start" scripts changing the old "app" to your newly created angular app (new name) 
4.) Update root tsconfig.json path, changing the old angular app name to its new name
5.) Since its a newly generated angular app, just supply this line on your tsconfig.json
  
  "paths": {
     "@app/*": ["src/app/*"]
   }
```

#### Front End and Back End Test

```
Front End:
1.) Run $ npm run ng:start
2.) Visit http://localhost:4200

Back End:
1.) Run $ npm run node:start
2.) Visit http://localhost:3000/user 
  - endpoint configured when fetching users 
  - a simple message will appear
```

#### Babel and tsconfig paths support on Node and Angular

```
AVOID:
On node    : import {} from '../../shared/enums/tables/user'
On angular : import {} from './app.component'

INSTEAD USE:
import {} from '@app/enums';
import {} from '@app/app.component'   or '@app/user/user.component'


NOTE:
- These are set on the respective tsconfig.json on your Node (./tsconfig.json) 
and Angular (./public/ng-app/tsconfig.json)

- If you want to customized and support some directories, you can do so 
by updating both the .babelrc and tsconfig.json of express or angular
```
 

