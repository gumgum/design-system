export const getOrganismsData = (id) => {
  let obj = Organisms.find((item) => item.id === id);
  return obj;
};

const Organisms = [
  {
    id: "account-modal-component",
    gumdrops: "",
    variants: [
      {
        title: "",
        values: [],
      },
    ],
    related: [
      {
        title: "",
        url: "",
      },
    ],

    code: ``,
  },
];

// to copy and paste for above array
// {
//   id: "",
//   gumdrops: "",
//   variants: [
//     {
//       title: "",
//       values: [],
//     },
//   ],
//   related: [
//     {
//       title: "",
//       url: "",
//     },
//   ],

//   code: ``,
// }
