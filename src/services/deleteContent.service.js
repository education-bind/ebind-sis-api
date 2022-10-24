import messages from "../utils/customMessages";
import { deleteResponse } from "../utils/responseHandlers";
import catchAsync from "../utils/catchAsync";

const { contentDeleted } = messages;

export const temporaryDelete = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { databaseTable } = req;

  await databaseTable.update(
    {
      active: false,
    },
    {
      where: { id },
    }
  );
  return deleteResponse(res, contentDeleted);
});
