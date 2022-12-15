import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';

interface LocalApiError {
  code: string;
}

interface Cell {
  id: string;
  content: string;
  type: 'text' | 'code';
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());
  const fullPath = path.join(dir, filename);

  router.get('/cells', async (req, res) => {
    const isLocalApiError = (err: any): err is LocalApiError => {
      return typeof err.code === "string";
    };
    //read file, 
    try {
      const result = await fs.readFile(fullPath, { encoding: 'utf-8' });
      res.send(JSON.parse(result));
    } catch (err) {
      if (isLocalApiError(err)) {
        if (err.code === 'ENOENT') {
          // add code to create a file and add default cells
          await fs.writeFile(fullPath, "[]", "utf-8");
          res.send([]);
        }
      } else {
        throw err;
      }
    }
    //if throws an error
    //inspect error see if it says file dne

    //parse list of cells
    //send list of cells back to browser
  });

  router.post('/cells', async (req, res) => {

    //take list of cells from request obj
    // serialize them
    const { cells }: { cells: Cell[] } = req.body;

    // write cells into file
    await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');

    res.send({ status: 'ok' });
  });

  return router;
}