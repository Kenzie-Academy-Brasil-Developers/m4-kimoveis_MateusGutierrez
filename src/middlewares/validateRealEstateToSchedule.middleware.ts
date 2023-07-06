import { NextFunction, Request, Response } from "express";
import { Category, RealEstate, User } from "../entities";
import { categoryRepository, realEstateRepository } from "../repositories";
import { AppError } from "../errors";

const validateRealEstateIdSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);
  const foundRealEstateById: RealEstate | null = await realEstateRepository.findOneBy({ id });
  if (!foundRealEstateById) throw new AppError("RealEstate not found", 404);
    res.locals ={...res.locals, foundRealEstateById}
  return next();
};

export {validateRealEstateIdSchedule}