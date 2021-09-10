module.exports = function (schema, abortEarly = false) {
  return async (fields) => {
    try {
      const cleanFields = await schema.validate(fields, { abortEarly });
      return { cleanFields, error: null };
    } catch (ex) {
      // console.log("validation error: ", ex);
      return { cleanFields: null, error: ex.errors };
    }
  };
};
