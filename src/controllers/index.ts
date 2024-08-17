import express, { Request, Response } from 'express';
import { encrypt, decrypt }  from '../models/cryptoUtils';



const router = express.Router();
router.use(express.json());
 



// criptografa texto
router.post('/encrypt',  (req: Request, res: Response) => {
  
  try {
   const { texto, keyHex, ivHex } = req.body;
   const iv = Buffer.from(ivHex, 'hex');
   const key = Buffer.from(keyHex, 'hex');
   const encryptedText =  encrypt(texto, key, iv);

   res.setHeader('Content-Type', 'application/json');
   res.send({ message: "Sucesso", encryptedText });

    
 } catch (error) {
   
   res.status(500).send({ error: 'Erro ao encriptar o texto'});

 }
 
 
})
 
 
//descriptografar texto
router.post('/decrypt',  (req: Request, res: Response) => {
    const {texto_criptografado, keyHex, ivHex} = req.body
    
    try {
      const iv = Buffer.from(ivHex, 'hex');
      const key = Buffer.from(keyHex, 'hex');
      const decryptedText = decrypt(texto_criptografado, key, iv);
       
      res.setHeader('Content-Type', 'application/json');
      res.send({ message: "Sucesso", decryptedText });
     /// res.send(decryptedText);
    
    } catch (error) {
      res.status(400).send("erro na descriptografia verifique si existem algo erro");
    
    }
    
    });
              


export default router; // Usando export default
