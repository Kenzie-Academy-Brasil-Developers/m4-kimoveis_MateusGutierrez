import { validateBody } from "./validateBody.middleware";
import { handleError } from "./handleError.middleware";
import { validateEmail } from "./validateEmail.middleware";
import { validateId } from "./validateId.middleware";
import { validateAdmin } from "./validateAdmin.middleware";
import { validateToken } from "./validateToken.middleware";
import { validateName } from "./validateName.middleware";
import { validateAdminOrOwner } from "./validateAdminOrOwner.middleware";
import { validateUserSchedule } from "./validateUserSchedule.middleware";
import { validateRealEstateSchedule } from "./validateRealEstateSchedule.middleware";
import { validateBusinessHours } from "./validateBusinessHours.middleware";
import { validateWeekday } from "./validateWeekday.middleware";
import { validateAddress } from "./validateAddress.middleware";
import { validateCategoryId } from "./validateCategoryId.middleware";
import { validateCategoryIdToRealEstate } from "./validateCategoryIdToRealEstate.middleware";
import { validateRealEstateId } from "./validateRealEstateId.middleware";
import { validateRealEstateIdSchedule } from "./validateRealEstateToSchedule.middleware";
export {
    handleError,validateBody, validateEmail,
    validateId, validateAdmin, validateToken,
    validateName, validateAdminOrOwner,validateUserSchedule,
    validateRealEstateSchedule, validateBusinessHours, validateWeekday,
    validateAddress, validateCategoryId,validateCategoryIdToRealEstate,
    validateRealEstateId, validateRealEstateIdSchedule
}