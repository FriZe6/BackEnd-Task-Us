
async function requireAuth(req, res, next) {
  //TODO: check if guest, allow to pass
  if (!req.session || !req.session.user) {
    res.status(401).end('Unauthorized!');
    return;
  }
  next();
}

async function requireAdmin(req, res, next) {
  //TODO: check if guest, allow to pass
  const user = req.session.user;
  if (!user.isAdmin) {
    res.status(403).end('Unauthorized Enough..');
    return;
  }
  next();
}


// module.exports = requireAuth;

module.exports = {
  requireAuth,
  requireAdmin
}
