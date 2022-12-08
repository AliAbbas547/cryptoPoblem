const express= require("express")
const router= express.Router()
const CryptoController = require("../controllers/CryptoController")


router.get("/crypto", CryptoController.getCrypto)
   





module.exports = router