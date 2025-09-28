// src/middleware/validate.js
export function validate(schema) {
  return (req, res, next) => {
    const parsed = schema.safeParse({
      body:  req.body  ?? {},   // 👈 default to {}
      query: req.query ?? {},
      params:req.params?? {},
    });

    if (!parsed.success) {
      const zerr = parsed.error;
      return res.status(400).json({
        error: 'Invalid request',
        details: zerr.flatten ? zerr.flatten() : zerr.issues ?? zerr,
      });
    }

    req.validated = parsed.data;   // use this in controllers
    next();
  };
}
