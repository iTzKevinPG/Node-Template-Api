let requestCounter = 0;

function tenantContext(req, res, next) {
  req.tenantId = req.headers["mng-field-tenant-id"];
  req.requestId = generateRequestId();
  next();
}

function generateRequestId() {
  const now = Date.now();
  return `${now}-${++requestCounter}-${Math.random().toString(36).substring(2, 15)}`;
}

module.exports = tenantContext;
