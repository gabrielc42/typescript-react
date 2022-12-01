import express from 'express';

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();

  router.get('/cells', async (req, res) => {
    // make sure cell storage file exists
    // if it doesn't, add in default list of cells

    //read file,
    //parse list of cells
    // send list of cells back to browser
  });

  router.post('/cells', async (req, res) => {
    //make sure it exists
    //if not, create
    //take list of cells from request obj
    // serialize them
    // write cells into file
  });

  return router;
}