function isAuth(req, res, next) {
    try {
        const auth = {login: process.env.LOGININTRANET, password: process.env.SENHAINTRANET}
    
        const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
        const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')
      
        if (login && password && login === auth.login && password === auth.password) {
          next();
        }else{
          res.status(401).send("Não autorizado");
        }
      } catch (error) {
          res.send("Error")
      }
}

module.exports = {
    isAuth
}