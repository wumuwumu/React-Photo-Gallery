# React-Photo-Gallery

`PhotoVIewer` is based on [photoswipe](https://github.com/dimsemenov/PhotoSwipe), which only works with correct width and height of images, but you has no info for this when you get images just from urls.

So `PhotoGallery` load images' information and display them as thumbnails.

### Screenshoot

![screenshoot](./docs/screenshoot.gif)



## Components

#### 1. PhotoGallery

```javascript
import PhotoGallery from 'react-thumb-photo-gallery'
```

**Props**

| Prop Name | Type              | Default   | Description                            |
| --------- | ----------------- | --------- | -------------------------------------- |
| photos    | Array[string]     | []        | Image data set                         |
| size      | Number            | 64        | Thumbnail image size                   |
| direction | 'row' \| 'column' | 'row'     | Thumbnail Direction                    |
| margin    | Number            | undefined | Thumbnail margin                       |
| srcPrefix | String            | undefined | Add prefix string for each photo value |



#### 2. PhotoViewer

```javascript
import { PhotoViewer } from 'react-thumb-photo-gallery'
```

**Props**

| Prop Name | Type               | Default   | Description                             |
| --------- | ------------------ | --------- | --------------------------------------- |
| items     | Array[{src, w, h}] | undefined | Image data set                          |
| options   | Object             | {}        | Props  reference photoshop props: [Link |

