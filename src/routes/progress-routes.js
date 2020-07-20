import express from 'express'
import ProgressModel from '../model/progressModel';

const router = express.Router();
const progressModel = new ProgressModel();

router.get('/', async (req, res) => {
  let progress = await progressModel.read();
  res.send(progress);
})



router.get('/:id', async (req, res) => {
  let progress = await progressModel.read(req.params.id);
  res.send(progress);
})

router.post('/', async (req, res) => {
  let created = await progressModel.create(req.body)
  res.send(created);
})

router.put('/:id', async (req, res) => {
  let id = req.params.id;
  let updated = await progressModel.update(id, req.body)
  res.send(updated);
})

export default router;