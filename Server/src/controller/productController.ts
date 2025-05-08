import { Request, Response } from "express";

export const getAllProducts = (req: Request, res: Response) => {
  res.json("all the products stay here");
};

export const getProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(id);
};
