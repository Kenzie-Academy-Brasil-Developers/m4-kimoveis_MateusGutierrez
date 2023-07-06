import { NextFunction, Request, Response } from "express";
import { RealEstate } from "../entities";
import { realEstateRepository } from "../repositories";
import { AppError } from "../errors";

const validateRealEstateId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.body.realEstateId);
  const found: RealEstate | null = await realEstateRepository.findOneBy({ id });
  if (!found) throw new AppError("RealEstate not found", 404);
    res.locals ={...res.locals, found}
  return next();
};

export {validateRealEstateId}