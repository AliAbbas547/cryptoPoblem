const cryptoModel= require("../models/cryptoModels")


let axios = require("axios")


let getCrypto = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: ' https://api.coincap.io/v2/assets',
            headers: {
                Authorization: "Bearer 3aca295a-7281-46ed-b6a7-976e8a936878",
              }
        }
        
        
    
        let result = await axios(options)
    
        
  
        let data = result.data.data
        let sortedData= data.sort((a,b)=>{ return a.changePercent24Hr - b.changePercent24Hr})
        console.log(data)

       

     
        


     let dataDeletion= await cryptoModel.deleteMany()
     let myData= await cryptoModel.create(data)






// const promises = data.map((c) => {
//     return cryptoModel.findOneAndUpdate(
//       { name: c.name },
//       {
//         $set: c,
//       },
//       {
//         upsert: true,
//         new: true,
//       }
//     );
//   });


//   Promise.all(promises).then((data)=>{
//     return res.status(200).send({ msg: data, status: true })



//   Promise.all(promises).then((data) => {
//     cryptoModel.deleteMany({
//       _id: {
//         $nin: data.map((i) => i._id),
//       },
//     }).then((data)=>{
//         return res.status(200).send({ msg: data, status: true })
//     });
// })
    

          
      res.status(200).send({ msg: myData, status: true })




    }    
    catch (err) {
        
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getCrypto = getCrypto