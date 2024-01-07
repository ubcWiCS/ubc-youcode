// schema.js

export default {
    name: 'carousel',
    title: 'Carousel',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: "Image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
  };