
# (was runnable via npx jsbook-gdc@2.0.0 on a terminal :) , some persisting errors and time has withered this project down)
could do this for any missing node modules (scope for specific folders/modules):
- lerna add <package>[@version] [--dev] [--exact] [--peer]
- lerna add module-1 --scope=module-2

# typescript-react
notable:
  - react
  - typescript
  - redux
  - lerna
  - npm published

includes: 
  - jsbook-gdc 2.0.0 // code editor web app similar to codepen
    - working with various packages
    - custom scripts
    
  - a package search web app built with React-Redux
  
  - typescript parent/child working practice and template
    - typescript course


biggest challenges:

  - learning typescript throughout project
  - project breaking moments with 3rd party installations & directories, react/esbuild installation issues followed
  - not doing 'lerna add' rather than npm installs post-lerna, thus requiring a manual rebase of the project (rather than the labyrinth of manuevering node_modules and reinstalling npm installs with lerna at that point)
  - correct configurations for publishing!

what i learned:
  - this was the first big project after being put on bench at former employment
  - introduction to npm package working and publishing, allowing further scope of moving parts to a system of software and applications
  - heavily got into learning other various architectures and formatting for a project, whether it is web app or not
  - this project's biggest challenge was necessarily longevity coinciding with proper repair and engineering for further development
  - package issues and rebasing left a lot for me to learn and improve upon, decision to store and format necessary data was importantly learned through this, in order to get a successful shipment
  - another project breaking moment attempting to clean files and folder organization
