import express from "express";

const router = express.Router();

let wizards = [
  {
    id: 1,
    name: "Szia Uram",
    magic_wand: "very big",
    house_name: "Futrinka utca 7.",
    free: false,
  },
];

router.get("/wizards", (req, res) => {
  res.send(wizards);
});

router.get("/wizards/:id", (req, res) => {
  const id = req.params.id;

  res.json(wizards.find((wizard) => wizard.id == id));
});

router.post("/wizards", (req, res) => {
  const { name, magic_wand, house_name, free } = req.body;
  wizards.push({
    id: wizards[wizards.length-1].id + 1 , 
    name,
    magic_wand,
    house_name,
    free,
  });

  res.send(wizards);
});

router.put("/wizards/:id", (req, res) => {
  const { name, magic_wand, house_name, free } = req.body;
  const id = Number(req.params.id);
  const wizardIndex = wizards.findIndex((wizard) => wizard.id == id);

  wizards[wizardIndex] = { id, name, magic_wand, house_name, free };

  res.send(wizards[wizardIndex]);
});

router.delete("/wizards/:id", (req, res) => {
  const id = req.params.id;

  wizards = wizards.filter((wizard) => wizard.id != id);

  res.send(wizards);
});

export default router;
