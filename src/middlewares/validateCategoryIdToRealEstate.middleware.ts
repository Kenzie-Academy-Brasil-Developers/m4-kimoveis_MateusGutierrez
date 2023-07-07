import { NextFunction, Request, Response } from "express";
import { Category} from "../entities";
import { categoryRepository } from "../repositories";
import { AppError } from "../errors";

const validateCategoryIdToRealEstate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);
  const foundCategory: Category | null = await categoryRepository.findOneBy({ id });
  if (!foundCategory) throw new AppError("Category not found", 404);
    res.locals ={...res.locals, foundCategory}
  return next();
};

export {validateCategoryIdToRealEstate}