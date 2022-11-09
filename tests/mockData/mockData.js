export default {
  countryData: {
    countryExist: {
      name: "rwanda",
      extension: "Kn",
      latitude: 1.027,
      longitude: 1.44,
      code: 252,
    },
    invalidCountry: {
      name: "USA",
      extension: "us",
      latitude: "1.027n",
      longitude: 1.44,
      code: 259,
    },
    validCountry: {
      name: "USA",
      extension: "us",
      latitude: 1.027,
      longitude: 1.44,
      code: 259,
    },

    updateCountry: {
      name: "Burundi",
      extension: "Bj",
      latitude: 1.027,
      longitude: 1.44,
      code: 258,
    },
  },
  eduPermissions: {
    createPermission: {
      name: "add ebind user",
    },
    updatePermission: {
      name: "create ebind user",
    },
  },
  notificationType: {
    createNotificationType: {
      name: "school",
    },
    updateNotificationType: {
      name: "ebind",
    },
  },
  eduLanguages: {
    createLanguage: {
      name: "english",
      abbreviation: "eng",
    },
    updateLanguage: {
      name: "kinyarwanda",
      abbrevivation: "kiny",
    },
  },
  eduUserTypes: {
    createUserType: {
      name: "super manager",
    },
    updateUserType: {
      name: "student",
    },
  },
  schools: {
    createSchools: {
      city: "Rubonobono",
      name: "Kagugu tvet",
      abbreviation: "Kat",
      admin: 99999,
      regDate: "2022-11-04T20:26:03.008Z",
      email: "kat@gmail.com",
      phoneNumber: "1234462880",
      description: "we cool",
      logoImage: "kat.png",
      longitude: "1.99",
      latitude: "30.32",
      country: 1,
    },
    updateSchools: {
      city: "Kigali",
      name: "kglvilla",
      email: "kati@gmail.com",
      description: "we are cool",
      logoImage: "kaat.png",
    },
  },
  eduFaculties: {
    createFaculty: {
      name: "rwanda education board",
      abbreviation: "WDA",
      logoImage: "kat.png",
      description: "we cool",
      country: 1,
    },
    updateFaculty: {
      description: "we are cool",
      logoImage: "kaat.png",
    },
  },
};
