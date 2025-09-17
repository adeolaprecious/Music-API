const express =  require('express');
const app = express();
// const port = 4090;
const dotenv = require("dotenv")
dotenv.config()
const cors = require('cors');

let allMusics = [
    {id:1, SongImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxLs9NyX_GLIcNo8ufKpxEUp25APjdWaVRw&s", title: 'Baba', songUrl:'https://youtu.be/zZXPDlyb__w?si=K6t0LMpWwu8chn0B', artist: "Dunsin Oyekan" , genre: 'Gospel' },

    {id:2, SongImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DLM7hg-bPHn9SjlPFbAVRdX8ZUEhr2_dUg&s", title:'No me without you', songUrl:'https://youtu.be/fem4tFkwUEU?si=xrIfaX-cH0CqHV7w', artist: "Dunsin Oyekan", genre: 'Gospel' },

    {id:3, SongImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK-pjmJZoin9K_NLiRZzc3z71nUPWrAXhhJA&s", title: 'Kadosh', songUrl:'https://youtu.be/G7tj6YkDbp8?si=KgFklgFttb6E5UWS', artist: "Dunsin Oyekan" , genre: 'Gospel' },

    {id:4, SongImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRReO6xZme14P6ob09CC396s6YeKXuASiwUmQ&s", title: 'Here with us', songUrl: 'https://youtu.be/IzLY07d0meo?si=L9KevbdaXZt7LcsJ ', artist: "Dunsin Oyekan", genre: 'Gospel' },

    {id:5, SongImage:"https://i.ytimg.com/vi/LJA_g-_xlCs/hqdefault.jpg?v=688c974e", title: 'Nagode', songUrl:'https://youtu.be/LJA_g-_xlCs?si=hhl0cvsjDD5HrSdR ', artist: 'Dunsin Oyekan', genre: 'Gospel' },

    {id:6, SongImage:"https://i.ytimg.com/vi/NZ6oTmngasY/maxresdefault.jpg", title:'Who is like you' , songUrl: 'https://youtu.be/NZ6oTmngasY?si=1Y9GniQAOG2IZZqL ', artist:'Dunsin Oyekan', genre:'Gospel' },

    {id:7, SongImage:"https://gospelhotspot.net/wp-content/uploads/2024/04/Worthy-Of-My-Praise-Dunsin-Oyekan-Ft.-Lawrence-Oyor.jpg", title: 'Worthy of my Praise', songUrl:'https://youtu.be/lrdmnAn9gxk?si=J1ZZNjnTUxmjnC', artist: 'Dunsin Oyekan ft Lawrence Oyor', genre:'Gospel' },

    {id:8, SongImage:"https://assets.audiomack.com/firstprince72/9d4b793143d6f7bb9da1c15d694209bcc6b4ca2dcd5bfe8db3397d6bc706becc.jpeg?width=1000&height=1000&max=true", title: 'Undignified (Excuse Me)', songUrl:'https://youtu.be/qesfKdKxXl0?si=vaCo935UfiSy1Itt', artist:'Dunsin Oyekan' , genre:'Gospel'},

    {id:9, SongImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTEnJgJVZGHQ0U1HJUulewykKHTMRbsdx-A&s", title:'The Future', songUrl:'https://youtu.be/YNs0rSDl6Ww?si=ZJOycNx1nxT07aLr', artist:'Dunsin Oyekan' , genre:'Gospel' },

    {id:10, SongImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHJPpCVIvVSSeCVqxkwqr2NzoKZ1RHRKw2Q&s", title:'Hagiazo' , songUrl:'https://youtu.be/u3K0QnG0uR8?,si=FjmJj_gE3iq9TeSk--', artist: 'Dunsin Oyekan', genre: 'Gospel'},

    {id:11, SongImage:"https://i.ytimg.com/vi/pWPMlRp-llw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBbeFUdH5WLMLbZ9NfR-2Zk_vFkHw", title: 'The Blood and the Name', songUrl:'https://youtu.be/1b2g0k3j4aY?si=6c7d8f5e9f8c4b1a', artist: 'Dunsin Oyekan', genre: 'Gospel' },

    {id:12, SongImage:"https://yt3.googleusercontent.com/d33NWWLsiEBDWehMSfCqg76UZpMwMm49FcE5uV1ILH_Eoz7njtD7EH8Wbz4nCgTDMnoW18uJQg=s900-c-k-c0x00ffffff-no-rj", title: 'I will Exalt You', songUrl:'https://youtu.be/2b3f4c5d6e7?si=8a9b0c1d2e3f4g5h', artist: 'Dunsin Oyekan', genre: 'Gospel' },

    {id:13, SongImage:"https://i.ytimg.com/vi/an2UFepMQb8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDyC45q-eFMuvzgQ1vBqZM0RrS8Pg",  title: 'Yahweh', songUrl:'https://youtu.be/3c4d5e6f7g8?si=9b0c1d2e3f4g5h6i', artist: 'Dunsin Oyekan', genre: 'Gospel' },

    {id:14, SongImage:"https://i.ytimg.com/vi/UBCYOy7UoEA/maxresdefault.jpg", title: 'The Anthem', songUrl:'https://youtu.be/4d5e6f7g8h9?si=0c1d2e3f4g5h6i7j', artist: 'Dunsin Oyekan', genre: 'Gospel' },

    {id:15, SongImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWt6ZsWYVkCXTs3H5K0iIKwDkdnLLaB3Ykg&s", title: 'The Sound of Many Waters', songUrl:'https://youtu.be/5e6f7g8h9i0?si=1d2e3f4g5h6i7j8k', artist: 'Dunsin Oyekan', genre: 'Gospel' },

    {id:16, SongImage:"https://i0.wp.com/gospelsong.com.ng/wp-content/uploads/2020/11/the-blood-and-the-name-dunsin-oyekan5019363751226323690.jpg?resize=920%2C425&ssl=1", title: 'The Blood of Jesus', songUrl:'https://youtu.be/6f7g8h9i0j1?si=2e3f4g5h6i7j8k9l', artist: 'Dunsin Oyekan', genre: 'Gospel' },

    {id:17, SongImage:"https://i.ytimg.com/vi/bsoESXDleSA/maxresdefault.jpg", title: 'The Name of Jesus', songUrl:'https://youtu.be/7g8h9i0j1k2?si=3f4g5h6i7j8k9l0m', artist: 'Dunsin Oyekan', genre: 'Gospel' },

    {id:18, SongImage:"https://i.ytimg.com/vi/YBVJIw0Qugk/maxresdefault.jpg", title: 'When i see you', songUrl:'https://youtu.be/YBVJIw0Qugk?si=Qksx7PJAuhiz2KmM', artist: 'Dunsin Oyekan', genre: 'Gospel' },

    {id:19, SongImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOsTfT3CfMtbWPvgM8uT19KxoK7Ty2bq9gw&s", title: 'City of God', songUrl:'https://youtu.be/cX5xx9gmOcU?si=mL9lSblCMFu-vHPD', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    
    {id:20, SongImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdapjcbbbAaPHe9VShHs_i4pbofWLOkkxMfQ&s", title: 'I wll be there', songUrl:'https://youtu.be/2lSi13wruf4?si=z_rQ1iFtONtwbAdF--', artist: 'Dunsin Oyekan', genre: 'Gospel' },

    {id:21, SongImage:"https://i.ytimg.com/vi/eUNFNSf4fVw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC7glRgBbEBCPGuQ_he8nOIeoYJvA", title: 'Judah', songUrl:'https://youtu.be/eUNFNSf4fVw?si=kOGABg9bP4qwVPtU', artist: 'Dunsin Oyekan', genre: 'Gospel' },

    {id:22, SongImage:"https://i.ytimg.com/vi/OOxyjnyB69I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBbl4FjFcc4B7KxIQzNXZtGNTWxVA", title: 'To know You', songUrl:'https://youtu.be/OOxyjnyB69I?si=ChbxL-213l38lDg8', artist: 'Dunsin Oyekan', genre: 'Gospel' },

    {id:23, SongImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJjNV1x12DyKuGHn3HU5JzqK6dWJT6-jm0A&s", title: 'Mercy', songUrl:'https://youtu.be/Z_olOEr7G7Q?si=ueRx9DANLo0qBYT7', artist: 'Dunsin Oyekan', genre: 'Gospel' },

    {id:24, SongImage:"https://i0.wp.com/www.ceenaija.com/wp-content/uploads/2024/01/Emperor-of-the-Universe-by-DUNSIN-OYEKAN.jpg?fit=600%2C379&ssl=1", title: 'Emperor of the universe', songUrl:'https://youtu.be/wP1SYyKp7vU?si=FJuQaYeoe6nK_oBql', artist: 'Dunsin Oyekan', genre: 'Gospel' },
    

]

app.use(cors());

app.get('/music', (req, res) => {
    res.send(allMusics)
})

const port = process.env.PORT || 4090;

app.listen(port, () => {
    console.log('App has started already');
    
});
