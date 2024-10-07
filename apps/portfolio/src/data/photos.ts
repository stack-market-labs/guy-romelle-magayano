import type { TCommonPhotosData } from '@portfolio/types'

export type TPhotosData = {
  slidePhotos: TCommonPhotosData[]
  aboutImage: TCommonPhotosData
}

// Photos data
export const photosData: TPhotosData = {
  slidePhotos: [
    {
      id: 'dbe7035c-3778-43b4-9d27-1bcdeeef731d',
      alt: 'travel-photo',
      src: '/images/photos/travel.jpg'
    },
    {
      id: 'c37b7c8f-2a5e-467d-b8f5-7f144ea2c41f',
      alt: 'speaker-photo',
      src: '/images/photos/speaker.jpg'
    },
    {
      id: 'f5c3e7a6-16f1-4628-bbd9-87a149a9ec0f',
      alt: 'workplace-photo',
      src: '/images/photos/workplace.jpg'
    },
    {
      id: 'ab7e83d6-f15a-4d42-bf6f-54a4b67c2f53',
      alt: 'food-photo',
      src: '/images/photos/food.jpg'
    },
    {
      id: '93c1f3e2-4917-4c6e-b5b7-ef3f45d8e4d6',
      alt: 'photography-photo',
      src: '/images/photos/photography.jpg'
    }
  ],
  aboutImage: {
    src: '/images/portrait.jpg',
    alt: 'About Portrait Image'
  }
}
