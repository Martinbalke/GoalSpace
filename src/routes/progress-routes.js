import express from 'express'
import ProgressModel from '../model/progressModel';

const router = express.Router();
const progressModel = new ProgressModel();

router.get('/', async (req, res) => {
  let progress = await progressModel.read();
  res.send(progress);
})



router.get('/:goalID', async (req, res) => {
  let progress = await progressModel.findByGoal(req.params.goalID);
  res.send(progress[0]);
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