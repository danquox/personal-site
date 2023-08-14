export type TTrack = {
  song: string;
  album: string;
  imageURL: string;
  songURL: string;
}

export type TArtist = {
  name: string;
  tracks: TTrack[];
}

export const ArtistData: TArtist[] = [
  {
    name: "wave to earth",
    tracks: [
      {
        song: "peach eyes",
        album: "0.1 flaws and all.",
        imageURL: "/music-images/ab67616d00001e02c21555708975ad94b1faf422.jpg",
        songURL: "https://open.spotify.com/track/1V8s51MOKlmES1Vc9Erm89?si=fd8f58f13c58481c"
      },
      {
        song: "light",
        album: "light",
        imageURL: "/music-images/ab67616d00001e02666efc476444cf734af19ced.jpg",
        songURL: "https://open.spotify.com/track/4i2T7Nm4Q72sNnSlGADSm6?si=77466b802edc401d"
      },
      {
        song: "seasons",
        album: "summer flows 0.02",
        imageURL: "/music-images/ab67616d00001e02c091fe6573f073f2e31b249f.jpg",
        songURL: "https://open.spotify.com/track/1acVBP8BcK6LTeNeFjfxnh?si=ad688e7e06ec4c01"
      },
    ]
  },
  {
    name: "bixby",
    tracks: [
      {
        song: "endlessly",
        album: "endlessly",
        imageURL: "/music-images/ab67616d00001e02ae6472bcc36ab01bd3c8e9a4.jpg",
        songURL: "https://open.spotify.com/track/0hwtCNaxCMWoZZPHjUAETA?si=5ad23b206cc046fd"
      },
      {
        song: "easy",
        album: "easy",
        imageURL: "/music-images/ab67616d00001e022a9ba35990ecdf69269655b4.jpg",
        songURL: "https://open.spotify.com/track/1Tsx0p2tR01ygNRbHx8NZA?si=4ece1f401c0c4b20"
      },
      {
        song: "both of us",
        album: "both of us",
        imageURL: "/music-images/ab67616d00001e0288310e6810054f311398f773.jpg",
        songURL: "https://open.spotify.com/track/3w74RUlBu9PRcgmRxYyrdO?si=40c4292abfd74992"
      }
    ]
  },
  {
    name: "Slom",
    tracks: [
      {
        song: "ANIRAGO",
        album: "WEATHER REPORT",
        imageURL: "/music-images/ab67616d00001e02f80659fda9423f58a26e7c2b.jpg",
        songURL: "https://open.spotify.com/track/4udQ9x6PZTNkO6Jwxdn0iw?si=f54802ef96634f83"
      },
      {
        song: "WHAT DO I DO",
        album: "WEATHER REPORT",
        imageURL: "/music-images/ab67616d00001e02f80659fda9423f58a26e7c2b.jpg",
        songURL: "https://open.spotify.com/track/6IWGibUcZxGGRAHaGVyfrR?si=93cb61144a974aee"
      },
      {
        song: "CACTUS",
        album: "WEATHER REPORT",
        imageURL: "/music-images/ab67616d00001e02f80659fda9423f58a26e7c2b.jpg",
        songURL: "https://open.spotify.com/track/7sAsLAOMLLYoGyDEFK3Dh1?si=6eea0892232f4653"
      }
    ]
  },
  {
    name: "hiko",
    tracks: [
      {
        song: "time goes by",
        album: "police",
        imageURL: "/music-images/ab67616d00001e02d63dff27f9f343e7d72deea1.jpg",
        songURL: "https://open.spotify.com/track/34VRMzg7RkInZvqm1Cml2m?si=845a3b15451f4a76"
      },
      {
        song: "bad news",
        album: "police",
        imageURL: "/music-images/ab67616d00001e02d63dff27f9f343e7d72deea1.jpg",
        songURL: "https://open.spotify.com/track/52mnnXt6M3x2eRCc4JQ2uX?si=862d258fcf3d4a43"
      },
      {
        song: "to you",
        album: "to you",
        imageURL: "/music-images/ab67616d00001e0253e107d3c1aa76ea50c1bbe2.jpg",
        songURL: "https://open.spotify.com/track/65mSQVNwz3ZPSf4TFUCkyq?si=bf4372ec71f5498d"
      }
    ]
  },
  {
    name: "SEVENTEEN",
    tracks: [
      {
        song: "Ready to love",
        album: "Your choice",
        imageURL: "/music-images/ab67616d00001e02c1a20972c9a083d5cece9ce5.jpg",
        songURL: "https://open.spotify.com/track/2FymmKBuog0loCuNXMwQID?si=ab453831118a4ed6"
      },
      {
        song: "Shadow",
        album: "Face the Sun",
        imageURL: "/music-images/ab67616d00001e02decd839dd4fef3faf64c5fd5.jpg",
        songURL: "https://open.spotify.com/track/2rwJP8OEao5y3xexw52HfD?si=8d01872d7fdf4e4c"
      },
      {
        song: "Super",
        album: "FML",
        imageURL: "/music-images/ab67616d00001e0280e31ba0c05187e6310ef264.jpg",
        songURL: "https://open.spotify.com/track/3AOf6YEpxQ894FmrwI9k96?si=73c77f3f7836477a"
      }
    ]
  },
  {
    name: "keshi",
    tracks: [
      {
        song: "beside you",
        album: "beside you",
        imageURL: "/music-images/ab67616d00001e02da53f97b4b0f1e14d854f777.jpg",
        songURL: "https://open.spotify.com/track/1Fhb9iJPufNMZSwupsXiRe?si=d1ae11c657a14fe0"
      },
      {
        song: "UNDERSTAND",
        album: "GABRIEL",
        imageURL: "/music-images/ab67616d00001e0219aff2da63b211d75341e8eb.jpg",
        songURL: "https://open.spotify.com/track/72sfmdpuO5r8cBDgs7MqZZ?si=99123b6ae24e4a56"
      },
      {
        song: "B.Y.S",
        album: "always",
        imageURL: "/music-images/ab67616d00001e02563944da62812cc5c6e2fe6f.jpg",
        songURL: "https://open.spotify.com/track/2yyluSgySg95O24RBkgrMR?si=f813ac1cc33d4001"
      }
    ]
  },
  {
    name: "JUNNY",
    tracks: [
      {
        song: "INVITATION",
        album: "INVITATION",
        imageURL: "/music-images/ab67616d00001e025d25b3030cc73445764e344d.jpg",
        songURL: "https://open.spotify.com/album/4WxRKPVsrzIaQ7ExLMvJ1u?si=9DeJfd9mTKC9Vseg8091Ag&nd=1" 
      },
      {
        song: "AURA (feat. pH-1)",
        album: "AURA",
        imageURL: "/music-images/ab67616d00001e02d4c1ae7ec49587c0c38576fd.jpg",
        songURL: "https://open.spotify.com/track/6dQ4nj3aDaw7WWlI7Rbj34?si=4dacb2a6b5524e1b"
      },
      {
        song: "Good Time",
        album: "Good Time",
        imageURL: "/music-images/ab67616d00001e025cbd07885857a9a7f1001088.jpg",
        songURL: "https://open.spotify.com/track/1ytyUmH5gl1yhCPXxx3qRo?si=a63418b8601b42d0&nd=1"
      }
    ]
  },
  {
    name: "JUNE",
    tracks: [
      {
        song: "Anywhere",
        album: "Ending",
        imageURL: "/music-images/ab67616d00001e02219c36792891c193934cea67.jpg",
        songURL: "https://open.spotify.com/track/68A5OaBH9feTRySwoFpGSX?si=58099a480bbc4fd7&nd=1" 
      },
      {
        song: "Good Morning",
        album: "Today's",
        imageURL: "/music-images/ab67616d00001e029954026283e54100b9c2c206.jpg",
        songURL: "https://open.spotify.com/track/3oik0ycobGW9zGNl5m2gNF?si=7ca5f1ecb486499c&nd=1"
      },
      {
        song: "Now (feat. THAMA)",
        album: "Ending",
        imageURL: "/music-images/ab67616d00001e02219c36792891c193934cea67.jpg",
        songURL: "https://open.spotify.com/track/3VAD6IG91tzUaSlPeei63M?si=d5294675eb944064"
      }
    ]
  }
]