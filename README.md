
# run npx jsbook-gdc@2.0.0 on a terminal :) (some persisting errors)

# typescript-react
notable:
  - react
  - typescript
  - redux
  - lerna
  - npm published

could do this for any missing node modules (scope for specific folders/modules):

lerna add <package>[@version] [--dev] [--exact] [--peer]

lerna add module-1 --scope=module-2

includes: 
  - jsbook-gdc 2.0.0 // code editor web app similar to codepen
    - working with various packages
    - custom scripts
    - additional things in progress
    
  - a package search web app built with React-Redux
  
  - typescript parent/child working practice and template
    - typescript course in progress!


biggest challenges:

  - learning typescript throughout project
  - project breaking moments with 3rd party installations & directories, react/esbuild installation issues followed
  - not doing 'lerna add' rather than npm installs post-lerna, thus requiring a manual rebase of the project (rather than the labyrinth of manuevering node_modules and reinstalling npm installs with lerna at that point)
  - correct configurations for publishing!
  - another project breaking moment attempting to clean files and folder organization
