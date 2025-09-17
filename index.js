const express =  require('express');
const app = express();
// const port = 4090;
const dotenv = require("dotenv")
dotenv.config()
const cors = require('cors');

let allMusics = [
    {id:1, title: 'Baba', songUrl:'https://youtu.be/zZXPDlyb__w?si=K6t0LMpWwu8chn0B', artist: "Dunsin Oyekan" , genre: 'Gospel' },
    {id:2, title:'No me without you', songUrl:'https://youtu.be/fem4tFkwUEU?si=xrIfaX-cH0CqHV7w', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:3, title: 'Kadosh', songUrl:'https://youtu.be/G7tj6YkDbp8?si=KgFklgFttb6E5UWS', artist: 'Dunsin Oyekan' , genre: 'Gospel' },

    {id:4, title: 'Here with us', songUrl: 'https://youtu.be/IzLY07d0meo?si=L9KevbdaXZt7LcsJ ', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:5, title: 'Nagode', songUrl:'https://youtu.be/LJA_g-_xlCs?si=hhl0cvsjDD5HrSdR ', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:6, title:'Who is like you' , songUrl: 'https://youtu.be/NZ6oTmngasY?si=1Y9GniQAOG2IZZqL ', artist:'Dunsin Oyekan', genre:'Gospel' },
    {id:7, title: 'Worthy of my Praise', songUrl:'https://youtu.be/lrdmnAn9gxk?si=J1ZZNjnTUxmjnC', artist: 'Dunsin Oyekan ft Lawrence Oyor', genre:'Gospel' },
    {id:8, title: 'Undignified (Excuse Me)', songUrl:'https://youtu.be/qesfKdKxXl0?si=vaCo935UfiSy1Itt', artist:'Dunsin Oyekan' , genre:'Gospel'},
    {id:9, title:'The Future', songUrl:'https://youtu.be/YNs0rSDl6Ww?si=ZJOycNx1nxT07aLr', artist:'Dunsin Oyekan' , genre:'Gospel' },
    {id:10, title:'Hagiazo' , songUrl:'https://youtu.be/u3K0QnG0uR8?,si=FjmJj_gE3iq9TeSk--', artist: 'Dunsin Oyekan', genre: 'Gospel'},
    {id:11, title: 'The Blood and the Name', songUrl:'https://youtu.be/1b2g0k3j4aY?si=6c7d8f5e9f8c4b1a', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:12, title: 'I will Exalt You', songUrl:'https://youtu.be/2b3f4c5d6e7?si=8a9b0c1d2e3f4g5h', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:13, title: 'Yahweh', songUrl:'https://youtu.be/3c4d5e6f7g8?si=9b0c1d2e3f4g5h6i', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:14, title: 'The Anthem', songUrl:'https://youtu.be/4d5e6f7g8h9?si=0c1d2e3f4g5h6i7j', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:15, title: 'The Sound of Many Waters', songUrl:'https://youtu.be/5e6f7g8h9i0?si=1d2e3f4g5h6i7j8k', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:16, title: 'The Blood of Jesus', songUrl:'https://youtu.be/6f7g8h9i0j1?si=2e3f4g5h6i7j8k9l', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:17, title: 'The Name of Jesus', songUrl:'https://youtu.be/7g8h9i0j1k2?si=3f4g5h6i7j8k9l0m', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:18, title: 'When i see you', songUrl:'https://youtu.be/YBVJIw0Qugk?si=Qksx7PJAuhiz2KmM', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:19, title: 'City of God', songUrl:'https://youtu.be/cX5xx9gmOcU?si=mL9lSblCMFu-vHPD', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:20, title: 'I wll be there', songUrl:'https://youtu.be/2lSi13wruf4?si=z_rQ1iFtONtwbAdF--', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:21, title: 'Judah', songUrl:'https://youtu.be/eUNFNSf4fVw?si=kOGABg9bP4qwVPtU', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:22, title: 'To know You', songUrl:'https://youtu.be/OOxyjnyB69I?si=ChbxL-213l38lDg8', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:23, title: 'Mercy', songUrl:'https://youtu.be/Z_olOEr7G7Q?si=ueRx9DANLo0qBYT7', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    {id:24, title: 'Emperor of the universe', songUrl:'https://youtu.be/wP1SYyKp7vU?si=FJuQaYeoe6nK_oBql', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    

]

app.use(cors());

app.get('/music', (req, res) => {
    res.send(allMusics)
})

const port = process.env.PORT || 4090;

app.listen(port, () => {
    console.log('App has started already');
    
});
