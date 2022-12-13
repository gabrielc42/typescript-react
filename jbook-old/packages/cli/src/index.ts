import { program } from 'commander';
import { serveCommand } from './commands/serve';
// import serve from 'local-api';

// serve();

program
  .addCommand(serveCommand);

program.parse(process.argv);