const holidays = [
  {
    country: "VN",
    holidayDate: "2022-01-03T00:00:00",
    holidayName: "New Years Day",
    id: "1de8613c-475d-4295-aa4c-03d9fe6d1aae"
  },
  {
    country: "VN",
    holidayDate: "2020-01-29T00:00:00",
    holidayName: "Tet",
    id: "3efb061b-64d6-45b4-a3d1-09f86fc60a3b"
  },
  {
    country: "VN",
    holidayDate: "2024-01-01T00:00:00",
    holidayName: "New Years Day",
    id: "e64ea096-7237-4c7b-ae90-0b8b0b77d53d"
  },
  {
    country: "VN",
    holidayDate: "2021-02-12T00:00:00",
    holidayName: "Tet",
    id: "94b46753-adb7-4fe2-986f-1289fd4918a8"
  },
  {
    country: "VN",
    holidayDate: "2023-04-28T00:00:00",
    holidayName: "Hung Kings Day",
    id: "3ed85928-a64d-418f-bebf-138082b841aa"
  },
  {
    country: "VN",
    holidayDate: "2024-05-01T00:00:00",
    holidayName: "Labor Day",
    id: "55b5f834-7e85-4103-b1c6-1a36e5d77a7a"
  },
  {
    country: "VN",
    holidayDate: "2021-02-15T00:00:00",
    holidayName: "Tet",
    id: "e704c923-e85c-4c59-bd58-1b9caadd430c"
  },
  {
    country: "VN",
    holidayDate: "2020-01-01T00:00:00",
    holidayName: "New Years Day",
    id: "9e57f846-5894-45dd-8f9a-1f1b67b238f1"
  },
  {
    country: "VN",
    holidayDate: "2020-05-01T00:00:00",
    holidayName: "Labor Day",
    id: "80492b56-58a7-4458-9cc2-25d3e97667d3"
  },
  {
    country: "VN",
    holidayDate: "2023-01-24T00:00:00",
    holidayName: "Tet",
    id: "3a473e26-47d5-4ce9-9133-2a4191318059"
  },
  {
    country: "VN",
    holidayDate: "2023-01-27T00:00:00",
    holidayName: "Tet",
    id: "0909afe8-d011-47c6-86fa-2c6ecc2468f2"
  },
  {
    country: "VN",
    holidayDate: "2023-01-25T00:00:00",
    holidayName: "Tet",
    id: "0ad82d06-51e9-4f81-ac50-2d114c7b6e07"
  },
  {
    country: "VN",
    holidayDate: "2022-05-02T00:00:00",
    holidayName: "Reunification Day",
    id: "18cc3a0e-3542-4442-be00-3114e1b3b12f"
  },
  {
    country: "VN",
    holidayDate: "2020-01-27T00:00:00",
    holidayName: "Tet",
    id: "4550fbf7-90e1-4ad4-b130-31661fb65247"
  },
  {
    country: "VN",
    holidayDate: "2022-04-10T00:00:00",
    holidayName: "Hung Kings Day",
    id: "0b3cdb3f-c132-4232-842d-317e0f333880"
  },
  {
    country: "VN",
    holidayDate: "2021-02-16T00:00:00",
    holidayName: "Tet",
    id: "6f22d7b8-098a-4dbc-ac83-34337d5a6241"
  },
  {
    country: "VN",
    holidayDate: "2021-04-30T00:00:00",
    holidayName: "Reunification Day",
    id: "2cd5f3dd-bd0b-449c-94ab-35134bbb272b"
  },
  {
    country: "VN",
    holidayDate: "2024-09-02T00:00:00",
    holidayName: "National Day",
    id: "a4b8b502-e936-4fb1-bf0a-41e453cb20b1"
  },
  {
    country: "VN",
    holidayDate: "2024-02-12T00:00:00",
    holidayName: "Tet",
    id: "d56e3281-8263-4079-8771-5a27c357bd1b"
  },
  {
    country: "VN",
    holidayDate: "2020-01-28T00:00:00",
    holidayName: "Tet",
    id: "f84ca0d0-d72c-4289-9192-5b506027ceb5"
  },
  {
    country: "VN",
    holidayDate: "2023-01-02T00:00:00",
    holidayName: "New Years Day",
    id: "7d5f31b0-c94c-4016-ad15-5cbbfdc5600c"
  },
  {
    country: "VN",
    holidayDate: "2024-02-13T00:00:00",
    holidayName: "Tet",
    id: "4b059cc5-959e-4697-aec3-5d98ca0d05a3"
  },
  {
    country: "VN",
    holidayDate: "2024-02-09T00:00:00",
    holidayName: "Tet",
    id: "a8a1272d-d7fc-4ebd-b219-6d512254686e"
  },
  {
    country: "VN",
    holidayDate: "2023-01-26T00:00:00",
    holidayName: "Tet",
    id: "721024bf-f378-441a-8eed-7020e86ae7bf"
  },
  {
    country: "VN",
    holidayDate: "2020-04-30T00:00:00",
    holidayName: "Reunification Day",
    id: "ab17c5e2-79be-4604-a720-73851c077f52"
  },
  {
    country: "VN",
    holidayDate: "2021-01-01T00:00:00",
    holidayName: "New Years Day",
    id: "0baa19f9-9fda-4123-be30-74c67905f68a"
  },
  {
    country: "VN",
    holidayDate: "2024-02-15T00:00:00",
    holidayName: "Tet",
    id: "cc4fb77c-83df-4d31-a271-763878772777"
  },
  {
    country: "VN",
    holidayDate: "2021-02-19T00:00:00",
    holidayName: "Tet",
    id: "527fee7c-4c9f-4e10-b61d-7f83c20f5b72"
  },
  {
    country: "VN",
    holidayDate: "2024-04-30T00:00:00",
    holidayName: "Reunification Day",
    id: "65984273-0a37-4f28-b0d7-80850cfdf154"
  },
  {
    country: "VN",
    holidayDate: "2023-09-04T00:00:00",
    holidayName: "National Day",
    id: "d7eb13cb-5e43-4f67-a2f9-82169cf4d01b"
  },
  {
    country: "VN",
    holidayDate: "2022-02-01T00:00:00",
    holidayName: "Tet",
    id: "d1c82969-6107-4737-8669-83e665a91bfb"
  },
  {
    country: "VN",
    holidayDate: "2024-04-18T00:00:00",
    holidayName: "Hung Kings Day",
    id: "6fa2ed99-6e4d-4f2b-ae15-88bace5087b2"
  },
  {
    country: "VN",
    holidayDate: "2021-05-01T00:00:00",
    holidayName: "Labor Day",
    id: "0c2bac8a-3d2b-440a-9163-8ed4025fe661"
  },
  {
    country: "VN",
    holidayDate: "2021-04-21T00:00:00",
    holidayName: "Hung Kings Day",
    id: "fc3044d6-f6ad-4899-9776-90d448215203"
  },
  {
    country: "VN",
    holidayDate: "2021-02-17T00:00:00",
    holidayName: "Tet",
    id: "8ce53982-488a-4605-a5c2-9916bac90c60"
  },
  {
    country: "VN",
    holidayDate: "2022-02-02T00:00:00",
    holidayName: "Tet",
    id: "2f6a6398-8837-450e-8347-a0a5e8f7e643"
  },
  {
    country: "VN",
    holidayDate: "2024-02-14T00:00:00",
    holidayName: "Tet",
    id: "9b833007-dff6-4296-b490-a0e7100a9002"
  },
  {
    country: "VN",
    holidayDate: "2024-02-16T00:00:00",
    holidayName: "Tet",
    id: "cae37501-22b1-4e21-b65b-ab4a9675c9ce"
  },
  {
    country: "VN",
    holidayDate: "2022-02-03T00:00:00",
    holidayName: "Tet",
    id: "dc734101-e73a-41be-9f72-ae15082db08b"
  },
  {
    country: "VN",
    holidayDate: "2023-01-23T00:00:00",
    holidayName: "Tet",
    id: "87f02d4e-9229-4539-a55c-baf829602fbd"
  },
  {
    country: "VN",
    holidayDate: "2022-09-02T00:00:00",
    holidayName: "National Day",
    id: "e27d0e0a-2e77-4992-9784-bc75de952639"
  },
  {
    country: "VN",
    holidayDate: "2020-09-02T00:00:00",
    holidayName: "National Day",
    id: "88ea3747-547c-461a-9891-c02df1b6240f"
  },
  {
    country: "VN",
    holidayDate: "2023-05-01T00:00:00",
    holidayName: "Reunification Day",
    id: "c3225dda-0fef-4854-8c34-c76a79446e9d"
  },
  {
    country: "VN",
    holidayDate: "2020-05-03T00:00:00",
    holidayName: "Labor Day",
    id: "6e32a61f-390a-4596-9051-d045f786a510"
  },
  {
    country: "VN",
    holidayDate: "2021-02-18T00:00:00",
    holidayName: "Tet",
    id: "d43a6010-dcee-4f2c-81b2-d0b5d28ecd89"
  },
  {
    country: "VN",
    holidayDate: "2021-09-02T00:00:00",
    holidayName: "National Day",
    id: "c2343ff3-2adc-486f-b69f-d3634b8d5503"
  },
  {
    country: "VN",
    holidayDate: "2020-04-02T00:00:00",
    holidayName: "Hung Kings Day",
    id: "baa916b6-db98-45ad-abd1-d993bdbd2404"
  },
  {
    country: "VN",
    holidayDate: "2022-01-31T00:00:00",
    holidayName: "Tet",
    id: "6719c39e-2ba9-47c2-94e7-e9eb7270d6fa"
  },
  {
    country: "VN",
    holidayDate: "2020-01-23T00:00:00",
    holidayName: "Tet",
    id: "c898e29e-0781-4414-902e-f6bfedb4bf69"
  },
  {
    country: "VN",
    holidayDate: "2020-01-24T00:00:00",
    holidayName: "Tet",
    id: "0a884eb7-9c24-4efa-8e6d-f7316e326c8e"
  },
  {
    country: "VN",
    holidayDate: "2022-02-04T00:00:00",
    holidayName: "Tet",
    id: "37c46af7-988a-454b-b626-fd36a2e1aaef"
  },
  {
    country: "VN",
    holidayDate: "2023-05-02T00:00:00",
    holidayName: "Labor Day",
    id: "ace847ba-bf97-460a-94ac-ffb9e817c7fc"
  }
];

// console.log(holidays);
const res = holidays.findIndex(
  item => item.holidayDate.slice(0, 10) === "2023-05-03"
);
console.log(res);
